import React from "react";
import styled, { css } from "styled-components";
import { flexbox } from "../../styles/utils/flexbox";

const Nav = (props) => {
  const {
    text = "",
    onClick,
    onClick1,
    onClick2,
    className = "notom18",
    forget = false,
  } = props;
  return (
    <StyledNav styledProp={props.style || {}}>
      {forget ? (
        <div className="forget">
          <button onClick={onClick1} className={className}>
            그만하기
          </button>
          <button onClick={onClick2} className={className}>
            다시하기
          </button>
        </div>
      ) : (
        <button onClick={onClick} className={className}>
          {text}
        </button>
      )}
    </StyledNav>
  );
};

const StyledNav = styled.div`
  ${(props) => {
    // prop 구조분해할당
    const {
      width = "100%",
      height = "80px",
      color = `white`,
      backgroundColor = "#265BFF",
    } = props.styledProp;

    return css`
      width: ${width};
      height: ${height};
      position: fixed;
      left: 0;
      bottom: 0;

      button {
        background-color: ${backgroundColor};
        color: ${color};
        width: 100%;
        height: ${height};
      }

      .forget {
        ${flexbox()}
        button:first-child {
          background-color: #afb0b3;
          height: 80px;
        }
      }
    `;
  }}
`;

export default Nav;
