import React, { useState } from "react";
import IntroUi from "./IntroUi";

import intro1 from "../../images/intro/intro1.svg";
import intro2 from "../../images/intro/intro2.svg";
import { useNavigate } from "../../../node_modules/react-router-dom/index";

const Intro = () => {
  const navi = useNavigate();
  const f_stepTwo = () => {
    setState({
      ...state,
      img: intro2,
      step: "two",
      title: "습관을 개선하세요",
      subTitle: `일정을 등록하고 되새기고 유지해요!
      한 주 기억은 여러분의 기억 습관을 개선하기 위해
      제작되었습니다.
      `,
      btnText: "시작하기",
      fc: f_naviList,
    });
  };

  const f_naviList = () => {
    navi("list");
  };

  const [state, setState] = useState({
    img: intro1,
    step: "one",
    title: "안녕하세요",
    subTitle: "한 주 기억에 참여해 주신 여러분을 환영합니다!",
    btnText: "들어가기",
    fc: f_stepTwo,
  });

  const props = { state, f_stepTwo };
  return <IntroUi {...props} />;
};

export default Intro;
