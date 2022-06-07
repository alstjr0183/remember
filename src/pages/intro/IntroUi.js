import React from "react";
import styled from "styled-components";
import { StyledContainer } from "../../components/common/StyledContainer";
import Header from "../../components/header/Header";
import { flexbox } from "../../styles/utils/flexbox";
import Nav from "../../components/nav/Nav";

const IntroUi = ({ state, f_stepOne, f_stepTwo }) => {
  const { img, title, subTitle } = state;

  return (
    <StyledContainer>
      <Header
        title="한 주 기억"
        className="notom18"
        style={{ color: "#434D54" }}
      />
      <SyyledIntro>
        <figure>
          {img.map((item, idx) => (
            <img
              style={idx === 1 ? { marginLeft: "20px" } : {}}
              key={idx}
              src={item.img}
              alt="인트로1"
            ></img>
          ))}
        </figure>
        <div className="text">
          <h1 className="notob24">{title}</h1>
          {subTitle?.split("\n").map((line, index) => {
            return (
              <p className="notor14" key={index}>
                {line}
              </p>
            );
          })}
        </div>
        <Nav
          text={state.btnText}
          onClick={state.fc}
          className="notob18"
          style={{ backgroundColor: "white", color: "#265BFF" }}
        />
      </SyyledIntro>
    </StyledContainer>
  );
};

const SyyledIntro = styled.div`
  height: calc(var(--vh, 1vh) * 100 - 144px);
  ${flexbox()};
  flex-direction: column;

  .notor14 {
    line-height: 20px;
  }

  figure {
    margin-bottom: 43px;
  }

  .text {
    ${flexbox()};
    flex-direction: column;

    h1 {
      color: #363a3c;
      margin-bottom: 4px;
    }

    p {
      color: rgba(121, 139, 151, 1);
    }
  }
`;

export default IntroUi;
