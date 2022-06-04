import React, { useState } from "react";
import { _handleInputChange } from "../../components/input/inputFc";
import ReminderUi from "./ReminderUi";

const Reminder = () => {
  const [state, setState] = useState({
    name: "",
    day: "요일을 선택해주세요.",
    time: "",
    memo: "",

    wrong: 0,
  });

  const f_check = () => {
    if (state.wrong < 4) {
      setState({
        ...state,
        wrong: state.wrong + 1,
      });
    }
  };

  const f_handleInputChange = (e) => {
    _handleInputChange(e, state, setState);
  };

  console.log(state);
  const a_select = [
    { text: "월" },
    { text: "화" },
    { text: "수" },
    { text: "목" },
    { text: "금" },
    { text: "토" },
    { text: "일" },
  ];
  const props = { state, a_select, f_handleInputChange, f_check };
  return <ReminderUi {...props} />;
};

export default Reminder;
