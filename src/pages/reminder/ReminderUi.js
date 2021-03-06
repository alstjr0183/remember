import React from "react";
import { StyledContainer } from "../../components/common/StyledContainer";
import Header from "../../components/header/Header";
import styled from "styled-components";
import Nav from "./../../components/nav/Nav";
import { flexbox } from "./../../styles/utils/flexbox";
import Input from "../../components/input/Input";
import arrow_bottom from "../../images/common/arrow-bottom.svg";

const ReminderUi = ({
  state,
  noCheckData,
  a_select,
  f_check,
  f_success,
  f_retry,
  f_handleInputChange,
}) => {
  const { wrong } = state;

  const s_opacity =
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
    <StyledContainer>
      <Header
        title="일정 되새김"
        className="notom18"
        style={{
          color: "white",
          backgroundColor: "#265BFF",
          opacity: s_opacity,
        }}
      />
      <StyledInsert opacity={s_opacity}>
        <div className="text ">
          <b className="notob14">일정을 되새깁니다.</b>
          <p className="notor14">
            입력하신 일정을 다시 입력해 주세요. <br />
            기억이 나지 않으시면 메모에 적힌 내용을 읽어보세요!
          </p>
        </div>
        <div className="form">
          <Input
            name="name"
            value={state.name}
            guideText={state.nameMessage}
            onChange={f_handleInputChange}
            placeholder="일정을 입력해 주세요."
            text="일정"
            style={{
              textColor: "white",
              inputColor: "white",
              border: "1px solid white",
              inputBackgroundColor: "#265bff",
              inputPlaceholderColor: "white",
              // opacity: s_opacity,
            }}
          />
          <div className="form__select">
            <p className="notob14">요일</p>
            <select
              value={state.day}
              className="notor14"
              name="day"
              onChange={f_handleInputChange}
            >
              {a_select.map((item, idx) => (
                <option key={idx}>{item.text}</option>
              ))}
            </select>
          </div>

          <Input
            value={state.time}
            name="time"
            guideText={state.timeMessage}
            onChange={f_handleInputChange}
            style={{
              textColor: "white",
              inputColor: "white",
              border: "1px solid white",
              inputBackgroundColor: "#265bff",
              inputPlaceholderColor: "white",
              // opacity: s_opacity,
            }}
            placeholder="HH:MM"
            text="시간"
          />
          <div className="memo">
            <b className="notob14">메모</b>
            <p className="notor14">{noCheckData[0].memo}</p>
          </div>
        </div>
      </StyledInsert>
      <p
        className="text__check notob12"
        style={{
          position: "fixed",
          bottom: "96px",
          fontSize: "12px",
          color: "#265BFF",
        }}
      >
        입력하신 정보가 맞지 않습니다. ({state.wrong} / 4)
      </p>
      {state.wrong === 4 ? (
        <>
          <Nav forget={true} onClick1={f_success} onClick2={f_retry} />
        </>
      ) : (
        <Nav onClick={f_check} text={"되새기기"} />
      )}
    </StyledContainer>
  );
};

const StyledInsert = styled.div`
  opacity: ${(props) => props.opacity};
  background-color: rgba(38, 91, 255, 1);
  width: 100%;
  overflow: auto;
  height: calc(var(--vh, 1vh) * 100 - 144px);
  ${flexbox("flex-start")};
  flex-direction: column;

  .notob14 {
    line-height: 20px;
  }

  .text {
    width: 90%;
    margin: 16px 0 32px 0;
    color: white;

    p {
      line-height: 20px;
    }
  }

  .form {
    width: 90%;

    .form__select {
      margin: 0 0 24px 0;
      p {
        color: white;
        margin-bottom: 10px;
      }
      select {
        width: 100%;
        height: 48px;
        border-radius: 4px;
        padding: 0 0 0 10px;
        border: 1px solid white;
        background: url(${arrow_bottom}) no-repeat 95% 50%;
        color: white;
        border-radius: 0px;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
      }
      select::-ms-expand {
            display: none;
      }
    }
  }

  .memo {
    b {
      display: block;
      color: white;
      margin-bottom: 21px;
    }

    p {
      color: white;
      margin-left: 10px;
    }
  }
`;

export default ReminderUi;
