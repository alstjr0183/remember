import React, { useEffect, useState } from "react";
import { useNavigate } from "../../../node_modules/react-router-dom/index";
import { _handleInputChange } from "../../components/input/inputFc";
import ReminderUi from "./ReminderUi";

const Reminder = () => {
  const navi = useNavigate();
  // 로컬 데이터
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const local_day = JSON.parse(localStorage.getItem("day")) || [];

  const noCheckData = local_day.filter((s) => s.check === false);

  const [state, setState] = useState({
    name: "",
    day: "월",
    time: "",
    memo: "",

    wrong: noCheckData[0].wrong,

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

  // 다시하기 함수
  const f_retry = () => {
    // 배열에서 몇번째 no에 있는 확인하기위해 변수선언
    const local_index = noCheckData[state.count].no - 1;

    // 배열의 틀린횟수를 0으로 바꿔주는 부분
    const object = {
      // ... 사용해서 데이터 불변성 지켜주기
      ...local_day[local_index],
      wrong: 0,
    };

    // 아까 몇번째 no인지 찾았으니 로컬스토리지 배열에 저장
    local_day[local_index] = object;
    // 로컬스토리지에 저장
    localStorage.setItem("day", JSON.stringify(local_day));
    // 수행후 page를 list로 이동하고 retry 라는 상태를 이용해 그후 로직 구현
    navi("/list", { state: { retry: true } });
  };

  // 되새기기 성공 함수
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

  // 되새기기 틀렸을때 함수
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
    f_retry,
  };
  return <ReminderUi {...props} />;
};

export default Reminder;
