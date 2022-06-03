import React from "react";
import { StyledContainer } from "../../components/common/StyledContainer";
import Header from "../../components/header/Header";
import styled from "styled-components";
import Nav from "./../../components/nav/Nav";
import { flexbox } from "./../../styles/utils/flexbox";

const ListUi = ({ state, f_naviInsert, a_day }) => {
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
            <div className="contents__day notob14" key={idx}>
              <div className="contents__day-left">{item.day}</div>
              <div className="contents__day-right"></div>
            </div>
          ))}
        </div>
        <Nav onClick={f_naviInsert} text={"등록하기"} />
      </StyledList>
    </StyledContainer>
  );
};

const StyledList = styled.div`
  width: 100%;
  overflow: auto;
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
      /* border-top: 1px solid #eaeeef; */
      border-bottom: 1px solid #eaeeef;
      width: 100%;
      flex: 1;

      .contents__day-left {
        color: #363a3c;
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
