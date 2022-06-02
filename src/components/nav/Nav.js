import React from "react";
import styled, { css } from "styled-components";
import theme from "./../../styles/utils/theme";

const Nav = (props) => {
  const { text = "", onClick } = props;
  return (
    <StyledNav styledProp={props.style || {}} onClick={onClick}>
      <button className="notom18">{text}</button>
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
      backgroundColor = theme.colors.blueDark,
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
