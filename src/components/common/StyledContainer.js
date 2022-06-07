import styled, { css } from "styled-components";
import { flexbox } from "../../styles/utils/flexbox";

export const StyledContainer = styled.div`
  ${(props) => {
    // prop 구조분해할당
    const { padding = "64px 0 0 0" } = props;
    return css`
      ${flexbox()}
      padding: ${padding};
    `;
  }}
`;
