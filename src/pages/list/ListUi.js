import React from "react";
import { StyledContainer } from "../../components/common/StyledContainer";
import Header from "../../components/header/Header";
import styled from "styled-components";
import Nav from "./../../components/nav/Nav";
import { flexbox } from "./../../styles/utils/flexbox";

const ListUi = ({ state, a_day }) => {
  return (
    <StyledContainer>
      <Header
        title="첫째주 기억"
        className="notom18"
        style={{ color: "#434D54" }}
      />
      <StyledList>
        <div className="contents">
          {a_day.map((item, idx) => (
            <div className="contents__day" key={idx}>
              <div className="contents__day-left">{item.day}</div>
              <div className="contents__day-right"></div>
            </div>
          ))}
        </div>
        <Nav text={"등록하기"} />
      </StyledList>
    </StyledContainer>
  );
};

const StyledList = styled.div`
  width: 100%;
  height: calc(100vh - 144px);
  ${flexbox()};
  flex-direction: column;

  .contents {
    width: 100%;
    height: 100%;
    ${flexbox()};
    flex-direction: column;
    .contents__day {
      display: flex;
      border-top: 1px solid #f8fafb;
      border-bottom: 1px solid #f8fafb;
      width: 100%;
      flex: 1;

      .contents__day-left {
        width: 40px;
        height: 100%;
        ${flexbox()};
      }
      .contents__day-right {
        width: 100%;
        background-color: #f8fafb;
      }
    }
  }
`;

export default ListUi;
