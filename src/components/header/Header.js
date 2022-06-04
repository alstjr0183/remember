import React from "react";
import styled, { css } from "styled-components";
import theme from "../../styles/utils/theme";
import { flexbox } from "../../styles/utils/flexbox";
import arrow_left from "../../images/common/arrow-left.svg";
import { useNavigate } from "../../../node_modules/react-router-dom/index";
const { fontSizes, colors } = theme;

const Header = (props) => {
  const navi = useNavigate();
  const { title, back = false } = props;
  return (
    <StyledHeader className={props.className} styledProp={props.style || {}}>
      {back && (
        <figure
          onClick={() => {
            navi(-1);
          }}
        >
          <img src={arrow_left} alt="뒤로가기"></img>
        </figure>
      )}
      <div>{title}</div>
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
      opacity = "1",
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
      opacity: ${opacity};
      figure {
        ${flexbox()}
        position:absolute;
        left: 16px;
      }
    `;
  }}
`;

export default Header;
