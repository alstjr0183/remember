import React, { useState } from "react";
import { useNavigate } from "../../../node_modules/react-router-dom/index";
import ListUi from "./ListUi";

const List = () => {
  const navi = useNavigate();
  const [state, setState] = useState({});

  const f_naviInsert = () => {
    navi("/insert");
  };

  const a_day = [
    { day: "월" },
    { day: "화" },
    { day: "수" },
    { day: "목" },
    { day: "금" },
    { day: "토" },
    { day: "일" },
  ];
  const props = { state, a_day, f_naviInsert };
  return <ListUi {...props} />;
};

export default List;
