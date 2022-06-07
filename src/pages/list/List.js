import React, { useEffect, useState } from "react";
import {
  useLocation,
  useNavigate,
} from "../../../node_modules/react-router-dom/index";
import ListUi from "./ListUi";

const List = () => {
  // const inserState = useLocation()?.state?.insert;

  // 로컬 데이터
  const local_day = JSON.parse(localStorage.getItem("day")) || [];

  const navi = useNavigate();

  const [state, setState] = useState({
    monInfo: [],
    tueInfo: [],
    wedInfo: [],
    thuInfo: [],
    friInfo: [],
    satInfo: [],
    sunInfo: [],

    reload: false,
  });

  const f_naviInsert = () => {
    navi("/insert");
  };

  const f_findDay = (day) => {
    const result = local_day.filter((s) => s.day === day && s.wrong !== 4);
    return result;
  };

  // 요일에따른 셋팅
  useEffect(() => {
    setState({
      ...state,
      monInfo: f_findDay("월"),
      tueInfo: f_findDay("화"),
      wedInfo: f_findDay("수"),
      thuInfo: f_findDay("목"),
      friInfo: f_findDay("금"),
      satInfo: f_findDay("토"),
      sunInfo: f_findDay("일"),
    });
  }, []);

  const a_day = [
    { day: "월", info: state.monInfo },
    { day: "화", info: state.tueInfo },
    { day: "수", info: state.wedInfo },
    { day: "목", info: state.thuInfo },
    { day: "금", info: state.friInfo },
    { day: "토", info: state.satInfo },
    { day: "일", info: state.sunInfo },
  ];

  useEffect(() => {
    const result = local_day.some((item) => item.check === false);

    const f_timeout = () => {
      navi("/reminder");
    };

    if (result) {
      var t = setTimeout(f_timeout, 10000);
    }

    return () => {
      clearTimeout(t);
    };
  }, []);

  const props = { state, a_day, f_naviInsert };
  return <ListUi {...props} />;
};

export default List;
