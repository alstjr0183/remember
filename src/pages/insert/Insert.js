import React, { useEffect, useState } from "react";
import InsertUi from "./InsertUi";
import { _handleInputChange } from "../../components/input/inputFc";
import { useNavigate } from "../../../node_modules/react-router-dom/index";

const Insert = () => {
  const navi = useNavigate();
  const [state, setState] = useState({
    name: "",
    day: "월",
    time: "",
    memo: "",

    nameError: false,
    dayError: false,
    timeError: false,

    nameMessage: "",
    dayMessage: "",
    timeMessage: "",
  });

  // 로컬 데이터
  const local_day = JSON.parse(localStorage.getItem("day")) || [];

  // 다음 버튼 이벤트
  const f_required = () => {
    const { name, day, time } = state;

    if (name && day && time) {
      setState((prev) => ({
        ...prev,
        nameError: false,
        nameMessage: "",
        dayError: false,
        dayMessage: "",
        timeError: false,
        timeMessage: "",
      }));
      f_save();
    } else {
      // 빠진 input alert
      if (!name) {
        setState((prev) => ({
          ...prev,
          nameError: true,
          nameMessage: "일정을 입력해주세요.",
        }));
      } else {
        setState((prev) => ({
          ...prev,
          nameError: false,
          nameMessage: "",
        }));
      }
      if (day === "요일을 선택해주세요." || !day) {
        setState((prev) => ({
          ...prev,
          dayError: true,
          dayMessage: "요일을 선택해주세요.",
        }));
      } else {
        setState((prev) => ({
          ...prev,
          dayError: false,
          dayMessage: "",
        }));
      }
      if (!time) {
        setState((prev) => ({
          ...prev,
          timeError: true,
          timeMessage: "시간을 입력해주세요.",
        }));
      } else {
        setState((prev) => ({
          ...prev,
          timeError: false,
          timeMessage: "",
        }));
      }
    }
  };

  const f_save = (e) => {
    const ob = {
      name: state.name,
      day: state.day,
      time: state.time,
      memo: state.memo,
      wrong: 0,
      check: false,
      no: local_day.length + 1,
    };
    local_day.push(ob);
    localStorage.setItem("day", JSON.stringify(local_day));
    navi("/list", { state: { insert: true } });
  };

  const f_handleInputChange = (e) => {
    _handleInputChange(e, state, setState);
  };

  const a_select = [
    { text: "월" },
    { text: "화" },
    { text: "수" },
    { text: "목" },
    { text: "금" },
    { text: "토" },
    { text: "일" },
  ];
  const props = { state, a_select, f_required, f_handleInputChange };
  return <InsertUi {...props} />;
};

export default Insert;
