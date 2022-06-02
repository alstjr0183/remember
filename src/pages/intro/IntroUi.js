import React from "react";
import styled from "styled-components";
import { StyledContainer } from "../../components/common/StyledContainer";
import intro1 from "../../images/intro/intro1.svg";
import intro2 from "../../images/intro/intro2.svg";
import Header from "../../components/header/Header";
import { flexbox } from "../../styles/utils/flexbox";
import Nav from "../../components/nav/Nav";

const IntroUi = ({ state, f_stepTwo }) => {
  const { img, title, subTitle, btnText } = state;

  return (
    <StyledContainer>
      <Header
        title="한 주 기억"
        className="notom18"
        style={{ color: "#434D54" }}
      />
      <SyyledIntro>
        <figure>
          <img src={img} alt="인트로1"></img>
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
        <Nav text={state.btnText} onClick={state.fc} />
      </SyyledIntro>
    </StyledContainer>
  );
};

const SyyledIntro = styled.div`
  height: calc(100vh - 80px);
  ${flexbox()};
  flex-direction: column;

  figure {
    margin-bottom: 47px;
  }

  .text {
    ${flexbox()};
    flex-direction: column;

    h1 {
      color: rgba(45, 78, 126, 1);
      margin-bottom: 16px;
    }

    p {
      color: rgba(121, 139, 151, 1);
    }
  }
`;

export default IntroUi;