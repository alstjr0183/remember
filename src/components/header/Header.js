import React from "react";
import styled, { css } from "styled-components";
import theme from "../../styles/utils/theme";
import { flexbox } from "../../styles/utils/flexbox";
const { fontSizes, colors } = theme;

const Header = (props) => {
  const { title } = props;
  return (
    <StyledHeader className={props.className} styledProp={props.style || {}}>
      {title}
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  ${(props) => {
    // prop 구조분해할당
    const {
      width = "100%",
      height = "64px",
      color = `${colors.black1}`,
      backgroundColor = "white",
      borderBottom = "1px solid rgba(67, 77, 84, 0.05);",
    } = props.styledProp;

    return css`
      ${flexbox()};
      width: ${width};
      position: fixed;
      top: 0;
      height: ${height};
      color: ${color};
      background-color: ${backgroundColor};
      border-bottom: ${borderBottom};
    `;
  }}
`;

export default Header;
