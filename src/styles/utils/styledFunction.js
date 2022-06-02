// 100vh 브라우저 대응
export const setOneVh = () => {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
};

export const setVariableMargin = (value, parents) => {
  // (마진값 % 부모박스 가로너비) * 100
  return (value / parents) * 100 + "%";
};
