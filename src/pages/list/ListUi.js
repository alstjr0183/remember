import React from "react";
import { StyledContainer } from "../../components/common/StyledContainer";
import Header from "../../components/header/Header";
import styled from "styled-components";
import Nav from "./../../components/nav/Nav";
import { flexbox } from "./../../styles/utils/flexbox";

const ListUi = ({ state, f_navi, a_day }) => {
  return (
    <StyledContainer>
      <StyledList retry={state.retry}>
        <Header
          title="첫째주 기억"
          className="notom18"
          history={true}
          style={{ color: "#434D54" }}
        />
        <div className="contents">
          {a_day.map((item, idx) => {
            return (
              <div className="contents__day notob14" key={idx}>
                <div className="contents__day-left">{item.day}</div>
                <div className="contents__day-right">
                  {item.info.map((item2, idx) => {
                    const wrong = item2.wrong;
                    const opacity =
                      wrong === 0
                        ? "1"
                        : wrong === 1
                        ? "0.75"
                        : wrong === 2
                        ? "0.5"
                        : wrong === 3
                        ? "0.25"
                        : wrong === 4 && "0";
                    return (
                      <div
                        key={idx}
                        style={{ opacity: opacity }}
                        className="contents__day-right-block"
                      >
                        <p className="notom10">{item2.name}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </StyledList>
      <Nav onClick={f_navi} text={state.retry ? "다시 되새기기" : "등록하기"} />
    </StyledContainer>
  );
};

const StyledList = styled.div`
  width: 100%;
  overflow: auto;
  opacity: ${(props) => (props.retry ? "0.25" : "1")};
  height: calc(var(--vh, 1vh) * 100 - 144px);
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
        padding: 12px;
        width: calc(100% - 40px);
        overflow: auto;

        background-color: #f8fafb;
        ${flexbox("flex-start")}
        .contents__day-right-block {
          width: 55px;
          min-width: 55px;
          margin-right: 10px;
          height: 100%;
          background-color: #265bff;
          border-radius: 4px;

          p {
            padding: 8px;
            color: white;
          }
        }
      }
    }
  }
`;

export default ListUi;
