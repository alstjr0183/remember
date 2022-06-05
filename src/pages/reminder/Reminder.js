import React, { useEffect, useState } from "react";
import { useNavigate } from "../../../node_modules/react-router-dom/index";
import { _handleInputChange } from "../../components/input/inputFc";
import ReminderUi from "./ReminderUi";

const Reminder = () => {
  const navi = useNavigate();
  // 로컬 데이터
  const local_day = JSON.parse(localStorage.getItem("day")) || [];

  const noCheckData = local_day.filter((s) => s.check === false);

  const [state, setState] = useState({
    name: "",
    day: "월",
    time: "",
    memo: "",

    wrong: 0,

    count: 0,
  });

  const f_check = () => {
    const { name, day, time } = noCheckData[state.count];

    const check =
      state.name === name && state.day === day && state.time === time;

    if (check) {
      f_success();
    } else {
      f_error();
    }
  };

  const f_success = () => {
    const local_index = noCheckData[state.count].no - 1;
    const object = {
      ...local_day[local_index],
      check: true,
    };

    local_day[local_index] = object;

    localStorage.setItem("day", JSON.stringify(local_day));
    navi("/list");
  };

  const f_error = () => {
    if (noCheckData[state.count].wrong < 4) {
      setState({
        ...state,
        wrong: state.wrong + 1,
      });

      const local_index = noCheckData[state.count].no - 1;
      const object = {
        ...local_day[local_index],
        wrong: local_day[local_index].wrong + 1,
      };
      local_day[local_index] = object;

      localStorage.setItem("day", JSON.stringify(local_day));
    }
  };

  const f_handleInputChange = (e) => {
    _handleInputChange(e, state, setState);
  };

  useEffect(() => {
    if (noCheckData.length === 0) {
    }
  }, [local_day, noCheckData]);

  const a_select = [
    { text: "월" },
    { text: "화" },
    { text: "수" },
    { text: "목" },
    { text: "금" },
    { text: "토" },
    { text: "일" },
  ];
  const props = {
    state,
    noCheckData,
    a_select,
    f_handleInputChange,
    f_check,
    f_success,
  };
  return <ReminderUi {...props} />;
};

export default Reminder;
