import React from "react";
import styled, { css } from "styled-components";

const Input = (props) => {
  const {
    required = true,
    text = "",
    placeholder = "테스트",
    textClassName = "notob14",
    inputClassName = "notor14",
  } = props;
  return (
    <StyledInput styledProp={props.style || {}}>
      {text && <p className={textClassName}>{text}</p>}

      <input
        className={inputClassName}
        placeholder={placeholder}
        required={required}
      ></input>
    </StyledInput>
  );
};

const StyledInput = styled.div`
  ${(props) => {
    // prop 구조분해할당
    const {
      margin = "0 0 24px 0",
      // p
      textColor = "#434D54",

      // input
      width = "100%",
      height = "48px",
      border = `1px solid #E1E4E6`,
      inputPadding = "0 0 0 10px",
      borderRadius = "4px",
    } = props.styledProp;

    return css`
      margin: ${margin};
      .notob14 {
        line-height: 22px;
      }
      p {
        color: ${textColor};
        margin-bottom: 10px;
      }
      input {
        width: ${width};
        border: ${border};
        height: ${height};
        padding: ${inputPadding};
        border-radius: ${borderRadius};
      }

      input::placeholder {
        font-weight: 400 !important;
        color: #a9afb3;
      }
    `;
  }}
`;

export default Input;
