import React from "react";
import styled, { css } from "styled-components";

const Nav = (props) => {
  const { text = "", onClick, className = "notom18" } = props;
  return (
    <StyledNav styledProp={props.style || {}} onClick={onClick}>
      <button className={className}>{text}</button>
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
        height: 100%;
      }
    `;
  }}
`;

export default Nav;
