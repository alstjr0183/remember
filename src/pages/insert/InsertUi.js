import React from "react";
import { StyledContainer } from "../../components/common/StyledContainer";
import Header from "../../components/header/Header";
import styled from "styled-components";
import Nav from "./../../components/nav/Nav";
import { flexbox } from "./../../styles/utils/flexbox";
import Input from "../../components/input/Input";
import {
  FormControl,
  MenuItem,
  Select,
} from "../../../node_modules/@mui/material/index";
import arrow_bottom from "../../images/common/arrow-bottom.svg";

const InsertUi = ({
  state,
  a_select,
  f_required,
  f_save,
  f_handleInputChange,
}) => {
  const { nameError, dayError, timeError } = state;

  const border = "1px solid #E1E4E6";
  const errorBorder = "1px solid #265BFF";

  const nameBorder = nameError ? errorBorder : border;
  const dayBorder = dayError ? errorBorder : border;
  const timeBorder = timeError ? errorBorder : border;
  return (
    <StyledContainer>
      <Header
        back={true}
        title="일정 등록하기"
        className="notom18"
        style={{ color: "#434D54" }}
      />
      <StyledInsert>
        <div className="text ">
          <b className="notob14">내용을 키워드로 입력해 주세요.</b>
          <p className="notor14">
            키워드 중심으로 일정의 제목과 위치를 입력해 주세요. <br />
            키워드 단위로 기억할 경우 기억 효율이 극대화 됩니다.
          </p>
        </div>
        <form onSubmit={f_save} className="form">
          <Input
            name="name"
            guideText={state.nameMessage}
            onChange={f_handleInputChange}
            placeholder="일정을 입력해 주세요."
            text="일정"
            style={{ border: nameBorder }}
          />
          <div className="form__select">
            <p className="notob14">요일</p>
            <select className="notor14">
              <option value="" disabled selected hidden>
                요일을 선택해주세요.
              </option>
              {a_select.map((item, idx) => (
                <option key={idx}>{item.text}</option>
              ))}
            </select>
          </div>

          {/* <StyledFormControl style={{ border: "none" }} fullWidth>
            <StyledSelect
              className="notor15"
              style={{ height: "48px" }}
              name="day"
              value={state.day}
              // onChange={(e) => {
              //   f_handleInputChange(e, state, setState);
              // }}
            >
              {a_select.map(({ text }, index) => (
                <MenuItem key={index} value={text}>
                  {text}
                </MenuItem>
              ))}
            </StyledSelect>
          </StyledFormControl> */}

          <Input
            name="time"
            guideText={state.timeMessage}
            onChange={f_handleInputChange}
            style={{ border: timeBorder }}
            placeholder="HH:MM"
            text="시간"
          />
          <Input
            name="memo"
            onChange={f_handleInputChange}
            placeholder="위치 또는 메모할 내용을 입력해주세요."
            text="메모"
          />
          <Nav onClick={f_required} text={"등록하기"} />
        </form>
      </StyledInsert>
    </StyledContainer>
  );
};

const StyledFormControl = styled(FormControl)`
  .css-1yk1gt9-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root.Mui-focused
    .MuiOutlinedInput-notchedOutline {
    border: 1px solid #e1e4e6;
  }
`;

const StyledSelect = styled(Select)`
  margin-bottom: 24px;

  fieldset {
    border-color: 1px solid #e1e4e6 !important;
  }
  div {
    padding: 16.5px 10px;
  }
`;

const StyledInsert = styled.div`
  width: 100%;
  overflow: auto;
  height: calc(100vh - 144px);
  ${flexbox("flex-start")};
  flex-direction: column;

  .notob14 {
    line-height: 20px;
  }

  .text {
    width: 90%;
    margin: 16px 0 32px 0;

    b {
      color: #265bff;
    }

    p {
      line-height: 20px;
      color: #878d91;
    }
  }

  .form {
    width: 90%;

    .form__select {
      margin: 0 0 24px 0;
      p {
        color: #434d54;
        margin-bottom: 10px;
      }
      select {
        width: 100%;
        height: 48px;
        border-radius: 4px;
        padding: 0 0 0 10px;
        border: 1px solid #e1e4e6;
        background: url(${arrow_bottom}) no-repeat 95% 50%;
        /* color: red; */
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
`;

export default InsertUi;
