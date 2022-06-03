import React from "react";
import styled, { css } from "styled-components";

const Input = (props) => {
  const {
    name = "",
    onChange,
    required = false,
    text = "",
    guideText = "",
    placeholder = "테스트",
    textClassName = "notob14",
    inputClassName = "notor14",
  } = props;
  return (
    <StyledInput styledProp={props.style || {}}>
      {text && <p className={textClassName}>{text}</p>}

      <input
        onChange={onChange}
        className={inputClassName}
        name={name}
        placeholder={placeholder}
        required={required}
      ></input>
      {<p className="text__guide">{guideText}</p>}
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

      .text__guide {
        margin-top: 4px;
        margin-bottom: 0;
        font-family: NoToM;
        color: #265bff;
        font-size: 12px;
        line-height: 26px;
      }
    `;
  }}
`;

export default Input;
