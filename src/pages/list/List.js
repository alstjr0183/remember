import React, { useEffect, useState } from "react";
import {
  useLocation,
  useNavigate,
} from "../../../node_modules/react-router-dom/index";
import ListUi from "./ListUi";

const List = () => {
  const retryState = useLocation()?.state?.retry;

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
    retry: retryState,
  });

  const f_navi = (url) => {
    if (state.retry) {
      // 다시되새기기 화면일땐 되새기기 페이지로 이동
      navi("/reminder");
    } else {
      // list 보여주는 화면일땐 등록 페이지로 이동
      navi("/insert");
    }
  };

  // 로컬스토리지에 저장된 요일 찾는 함수
  const f_findDay = (day) => {
    const result = local_day.filter((s) => s.day === day);
    return result;
  };

  // f_findDay를 이용한 요일 정렬
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

  // 만약에 check가 안된 정보가있는경우 10초뒤 되새기기 페이지로가는 함수
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const props = { state, a_day, f_navi };
  return <ListUi {...props} />;
};

export default List;
