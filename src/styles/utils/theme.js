import { css } from "styled-components";

// text-styles
const fontSizes = {
  H1: "30px",
  H2: "20px",
  SubTitle1: "15px",
  SubTitle2: "12px",
  Body1: "15px",
  Body2: "12px",
  Caption: "10px",
};

const H1 = css`
  font-size: ${fontSizes.H1};
  font-family: "NotoB";
  font-weight: 700;
`;

const H2 = css`
  font-size: ${fontSizes.H2};
  font-family: "NotoB";
  font-weight: 700;
`;

const SubTitle1 = css`
  font-size: ${fontSizes.SubTitle1};
  font-family: "NotoB";
`;

const SubTitle2 = css`
  font-size: ${fontSizes.SubTitle2};
  font-family: "NotoB";
`;

const Body1 = css`
  font-size: ${fontSizes.Body1};
  font-family: "NotoR";
`;

const Body2 = css`
  font-size: ${fontSizes.Body2};
  font-family: "NotoR";
`;

const Caption = css`
  font-size: ${fontSizes.Caption};
  font-family: "NotoR";
`;

// colors
const colors = {
  black1: "rgb(0,0,0)",
  black2: "rgb(18,18,18)",
  gray1: "rgba(51, 51, 51, 1)",
  gray2: "rgb(77,77,78)",
  gray3: "rgba(130, 130, 130, 1)",
  gray4: "rgba(189, 189, 189, 1)",
  gray5: "#E0E0E0",
  gray6: "#F2F2F2",
  midGray: "rgb(248,248,248)",
  lightGray: "rgb(252,252,252)",

  orange: "#F47F38",
  yellow: "#FFBF00",
  pink1: "#E83F6F",
  pink2: "#F49FB7",
  red: "#EB5757",
  blue1: "rgba(47, 128, 237, 1)",
  blue2: "#2D9CDB",
  blue3: "rgba(86, 204, 242, 1)",
  white: "rgb(255,255,255)",
};

const boxShadows = {
  dropShadow: `drop-shadow(0px -4px 15px rgba(0, 0, 0, 0.1))`,
};

// layout z-index
// 10 단위로 지정하되, 예외 변수가 발생하면 1 단위 값 설정
const zIndex = {
  header_nav_level: 30,
  header_back_level: 30,

  home_level: 20,

  footer_level: 60,

  sidebar_level: 50, // 더보기 첫 번째 화면
  sidebar_sub_level: 70, // 더보기 환경설정, 내정보
  alert_level: 100,
};

const theme = {
  fontSizes,
  H1,
  H2,
  SubTitle1,
  SubTitle2,
  Body1,
  Body2,
  Caption,

  colors,

  boxShadows,

  zIndex,
};

export default theme;
