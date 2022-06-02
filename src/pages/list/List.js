import React, { useState } from "react";
import ListUi from "./ListUi";

const List = () => {
  const [state, setState] = useState({});
  const a_day = [
    { day: "월" },
    { day: "화" },
    { day: "수" },
    { day: "목" },
    { day: "금" },
    { day: "토" },
    { day: "일" },
  ];
  const props = { state, a_day };
  return <ListUi {...props} />;
};

export default List;
