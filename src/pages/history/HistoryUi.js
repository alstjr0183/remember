import React from "react";
import { StyledContainer } from "../../components/common/StyledContainer";
import Header from "../../components/header/Header";
import styled from "styled-components";

const HistoryUi = () => {
  const local_day = JSON.parse(localStorage.getItem("day")) || [];

  //   const local_day = [
  //     { name: "특정" },
  //     { name: "특정" },
  //     { name: "특정" },
  //     { name: "특정" },
  //     { name: "특정" },
  //     { name: "특정" },
  //     { name: "특정" },
  //     { name: "특정" },
  //     { name: "특정" },
  //     { name: "특정" },
  //     { name: "특정" },
  //     { name: "특정" },
  //     { name: "특정" },
  //     { name: "특정" },
  //     { name: "특정" },
  //   ];
  return (
    <StyledContainer>
      <Header
        back={true}
        title="기억력"
        className="notom18"
        style={{ color: "#434D54" }}
      />
      <StyledHistory>
        <div className="list">
          {local_day.map((item, idx) => {
            const wrong = item.wrong;
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
                style={{
                  opacity: opacity,
                  marginRight: (idx + 1) % 4 === 0 ? "" : "10px",
                }}
                key={idx}
                className="box"
              >
                <p className="notom10">{item.name}</p>
              </div>
            );
          })}
        </div>
      </StyledHistory>
    </StyledContainer>
  );
};

const StyledHistory = styled.div`
  width: 100%;
  .list {
    width: 100%;
    padding: 16px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    width: 100%;

    .box {
      width: 22%;
      height: 64.71px;
      background-color: #265bff;
      border-radius: 4px;
      margin-bottom: 10px;
      p {
        padding: 8px;
        color: white;
      }
    }
  }
`;

export default HistoryUi;
