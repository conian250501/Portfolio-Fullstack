import styled, { createGlobalStyle } from "styled-components";

export const backgroundColor = "#e5e5e5";
export const bgColor = "#151313";
export const textColor = "#051130";
export const primaryColor = "#3a2bba";
export const secondary = "#e0f954";
export const whiteColor = "#fff";
export const blackColor = "#000";

const GlobalStyle = createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
		  scroll-behavior: smooth;
      cursor: none;
       
    }
    html{
      font-size: 62.5%;
		  font-family: 'Montserrat', sans-serif;
		  background-color: #e5e5e5;
    }
    body{
      text-rendering: optimizeSpeed ;
    }

	
`;

export const Container = styled.div`
  width: 1440px;
  max-width: 100%;
`;

export const Section = styled.div`
  padding: 0 4.8rem;
  padding-bottom: ${({ paddingBottom }) =>
    paddingBottom ? paddingBottom : ""};
  margin: ${({ margin }) => (margin ? margin : "")};
  margin-top: ${({ marginTop }) => (marginTop ? marginTop : "")};
  margin-bottom: ${({ marginBottom }) => (marginBottom ? marginBottom : "")};
  position: ${({ position }) => (position ? position : "")};
  width: ${({ width }) => (width ? width : "auto")};
  min-width: ${({ minWidth }) => (minWidth ? minWidth : "auto")};
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "auto")};
  height: ${({ height }) => (height ? height : "auto")};
  max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : "auto")};
  min-height: ${({ minHeight }) => (minHeight ? minHeight : "auto")};
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : ""};
  overflow: hidden;
  @media screen and (max-width: 767px) {
    padding: 0 1.6rem;
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    padding: 0 3.2rem;
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: ${({ justify }) => (justify ? justify : "")};
  align-items: ${({ align }) => (align ? align : "")};
  gap: ${({ gap }) => (gap ? gap : "")};
  padding: ${({ padding }) => (padding ? padding : "")};
  margin: ${({ margin }) => (margin ? margin : "")};
  position: ${({ position }) => (position ? position : "")};
  width: ${({ width }) => (width ? width : "auto")};
  min-width: ${({ minWidth }) => (minWidth ? minWidth : "auto")};
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "auto")};
  height: ${({ height }) => (height ? height : "auto")};
  max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : "auto")};
  min-height: ${({ minHeight }) => (minHeight ? minHeight : "auto")};
  flex-wrap: ${({ wrap }) => (wrap ? wrap : "")};
`;
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${({ justify }) => (justify ? justify : "")};
  align-items: ${({ align }) => (align ? align : "")};
  gap: ${({ gap }) => (gap ? gap : "")};
  padding: ${({ padding }) => (padding ? padding : "")};
  margin: ${({ margin }) => (margin ? margin : "")};
  position: ${({ position }) => (position ? position : "")};
  width: ${({ width }) => (width ? width : "auto")};
  min-width: ${({ minWidth }) => (minWidth ? minWidth : "auto")};
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "auto")};
  height: ${({ height }) => (height ? height : "auto")};
  max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : "auto")};
  min-height: ${({ minHeight }) => (minHeight ? minHeight : "auto")};
`;

export const SectionName = styled.div`
  @font-face {
    font-family: "GulfsDisplay";
    src: url(../../../public/assets/fonts/GulfsDisplay-SemiExpanded.ttf);
    font-weight: normal;
    font-style: normal;
  }
  font-family: "Syne", sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${secondary};
  padding: 2rem 15%;
  border: 2px solid ${blackColor};

  .icon__darts {
    font-size: 6rem;
    cursor: pointer;
  }
  .icon__darts:hover {
    animation: rotate 0.5s linear infinite;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @media screen and (max-width: 767px) {
    padding: 1.6rem 5%;
    .icon__darts {
      font-size: 4rem;
    }
  }
`;

export const SectionHeading = styled.h1`
  font-size: 4.2rem;
  margin-bottom: 6px;
  text-transform: uppercase;
  color: ${textColor};
  /* text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000, 5px 4px 0 #000; */
  user-select: none;

  @media screen and (min-width: 1024px) and (max-width: 1440px) {
    font-size: 3rem;
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    font-size: 3rem;
    text-align: center;
  }
  @media screen and (max-width: 767px) {
    font-size: 2.4rem;
    text-align: center;
    /* text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
      1px 1px 0 #000, 3px 3px 0 #000; */
  }
`;

export default GlobalStyle;
