import styled from "styled-components";
import {
  backgroundColor,
  bgColor,
  textColor,
  primaryColor,
  secondary,
  whiteColor,
  blackColor,
} from "../../GlobalStyles";

export const Footer = styled.footer`
  padding: 0rem 5.6rem;
  padding-top: 2.4rem;
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
  border-top: ${({ borderTop }) => (borderTop ? borderTop : "")};
  @media screen and (max-width: 767px) {
    padding: 2.4rem 1.6rem;
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    padding: 2.4rem 3.2rem;
  }
`;
export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  @media screen and (max-width: 767px) {
    flex-wrap: wrap;
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: auto auto;
    gap: 24px;
  }
  @media screen and (min-width: 1024px) and (max-width: 1440px) {
  }
`;
export const FooterLogo = styled.a`
  font-size: 2.4rem;
  font-weight: 700;
  color: ${textColor};
  text-transform: uppercase;
  text-decoration: none;
  border: 2px solid ${bgColor};
  padding: 2rem 8rem;
  transition: all 0.2s ease-out;

  &:hover {
    background-color: ${whiteColor};
    color: ${textColor};
    box-shadow: 8px 8px 0 #000;
    transition: all 0.25s ease-out;
  }
  @media screen and (max-width: 767px) {
    text-align: center;
    width: 100%;
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
  }

  @media screen and (min-width: 1024px) and (max-width: 1440px) {
  }
`;
export const FooterMenu = styled.ul`
  font-family: "Space Grotesk", sans-serif;
  position: relative;
  list-style: none;
  height: fit-content;
  &::before {
    content: "";
    position: absolute;
    left: -120px;
    top: 0;
    height: 12rem;
    border-left: 1px solid rgba(0, 0, 0, 0.4);
  }

  @media screen and (max-width: 767px) {
    &::before {
      display: none;
    }
    width: 100%;
    text-align: center;
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    &::before {
      display: none;
    }
  }
  @media screen and (min-width: 1024px) and (max-width: 1440px) {
    &::before {
      position: absolute;
      left: -45px;
    }
  }
`;

export const FooterMenuItem = styled.li`
  position: relative;
  width: fit-content;
  color: ${textColor};
  font-size: 1.8rem;
  margin-bottom: 1.6rem;
  letter-spacing: 1px;
  cursor: pointer;
  font-weight: 400;
  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    width: 0;
    height: 1px;
    background-color: #151313;
    transition: all 0.3s ease-out;
  }
  &:hover::before {
    width: 100%;
    transition: all 0.3s ease-out;
  }
  @media screen and (max-width: 767px) {
    width: 100%;
    margin-top: 1.6rem;
    &::before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translate(-50%, -50%);
      height: 1px;
      background-color: #151313;
      transition: all 0.3s ease-out;
    }
    &:hover::before {
      width: 30%;
      transition: all 0.3s ease-out;
    }
  }
`;

export const FooterSocialLink = styled.a`
  color: ${textColor};
  font-weight: 400;
  text-decoration: none;
`;

export const IconContainer = styled.div`
  .eyes__icon {
    font-size: 2.4rem;
  }
  @media screen and (max-width: 767px) {
    text-align: center;
  }
`;
