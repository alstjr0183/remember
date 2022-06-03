import React, { useState } from "react";
import InsertUi from "./InsertUi";

const Insert = () => {
  const [state, setState] = useState({ day: "요일을 선택해주세요." });
  const a_select = [
    { text: "월" },
    { text: "화" },
    { text: "수" },
    { text: "목" },
    { text: "금" },
    { text: "토" },
    { text: "일" },
  ];
  const props = { state, a_select };
  return <InsertUi {...props} />;
};

export default Insert;
