import styled from "styled-components";
import Slider from "react-slick";
import {
  backgroundColor,
  bgColor,
  textColor,
  primaryColor,
  secondary,
  whiteColor,
  blackColor,
} from "../../../GlobalStyles";

export const SectionSlider = styled(Slider)`
  overflow: hidden;
  width: 100%;
  .slick-track {
    display: flex;
  }
  .slick-slide {
    outline: none;
  }
  .slick-list {
    margin: 0 -0.8rem;
  }
`;

export const ImageWrapper = styled.div`
  /* width: 100%; */
  display: flex !important;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 0 0.8rem;

  outline: none;
  position: relative;
  transition: 0.25s linear;
  cursor: pointer;
  overflow: hidden;
`;
export const CarouselImg = styled.img`
  position: relative;
  width: 100%;
  height: 430px;
  border: 2px solid #151313;
  object-fit: cover;
  transition: all 0.2s ease-out;
  overflow: hidden;

  @media screen and (min-width: 1024px) and (max-width: 1439px) {
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    height: 360px;
  }
  @media screen and (max-width: 767px) {
    height: 360px;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 16px 0;
  .left,
  .right {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 35px;
    height: 35px;
    background: #ffffff;
    border: 2px solid #000;
    cursor: pointer;
    font-size: 2rem;
    z-index: 10;
    transition: all 0.2s linear;
    cursor: pointer;
  }
  .left {
    &:hover {
      box-shadow: 4px 4px 0 #000;
      transition: all 0.2s linear;
    }
  }
  .right {
    &:hover {
      box-shadow: -4px 4px 0 #000;
      transition: all 0.2s linear;
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    .right {
      right: 32px;
    }
  }
  @media screen and (max-width: 767px) {
    .right {
      right: 18px;
    }
  }
`;

// Page title
export const PageContainer = styled.div``;
export const PageList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  li.active {
    border: 1px solid ${blackColor};
    background-color: ${primaryColor};
  }
  li.active a {
    color: ${whiteColor};
  }
`;
export const PageItem = styled.li`
  font-size: 1.8rem;
  margin-left: 2.4rem;
  padding: 0.4rem 0.8rem;
  cursor: pointer;
  a {
    color: ${textColor};
    text-decoration: none;
  }

  @media screen and (max-width: 767px) {
    font-size: 1.6rem;
  }
`;

export const Card = styled.div`
  width: 100%;
  height: fit-content;
  align-items: start;
  background-color: rgba(255, 255, 255);
  border: 2px solid #151313;
  padding: 1rem 2rem;
  transition: 0.25s linear;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 1024px) and (max-width: 1439px) {
    flex-direction: column;
    align-items: flex-start;
  }
  @media screen and (max-width: 767px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const CardContent = styled.div`
  width: 100%;
`;
export const SliderContent = styled.div``;
export const SliderHeading = styled.h1`
  color: ${({ color }) => (color ? color : "#051130")};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "")};
  margin-bottom: ${({ marginBottom }) => (marginBottom ? marginBottom : "")};
  margin-top: 1rem;
  transition: 0.25s linear;
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    /* transform: translateY(12px); */
  }
  @media screen and (max-width: 767px) {
  }
`;
export const SliderDescription = styled.p`
  color: ${({ color }) => (color ? color : "#051130")};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "")};
  width: ${({ width }) => (width ? width : "")};
  /* text-shadow: 3px 4px 0 #000; */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ProjectTechnical = styled.div`
  width: 100%;
  height: 50px;
  font-size: 16px;
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  z-index: 10;
  /* margin-top: 1rem; */
  cursor: pointer;
`;

export const ProjectTechnicalItem = styled.span`
  color: ${whiteColor};
  font-size: 1.4rem;
  font-weight: 600;
  padding: 0.8rem 1.6rem;
  background-color: ${blackColor};
  transition: all 0.2s linear;
  &:not(:first-child) {
    margin-left: 1.6rem;
  }

  &:hover {
    background-color: ${whiteColor};
    color: ${blackColor};
    border: 2px solid ${blackColor};
    box-shadow: 4px 4px 0 rgba(0, 0, 0);
    transition: all 0.2s linear;
  }
`;

export const ButtonContainer = styled.div`
  margin-top: ${({ marginTop }) => (marginTop ? marginTop : "")};
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 1024px) and (max-width: 1439px) {
    width: 100%;
    margin-top: 1rem;
  }
  @media screen and (max-width: 767px) {
    width: 100%;
    margin-top: 1rem;
  }
`;

export const ButtonDemo = styled.a`
  width: ${({ width }) => (width ? width : "")};
  padding: ${({ padding }) => (padding ? padding : "")};
  border: ${({ border }) => (border ? border : "")};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "")};
  color: ${({ color }) => (color ? color : "")};
  line-height: 0;
  outline: none;
  background: ${primaryColor};
  text-align: center;
  text-decoration: none;
  transition: 0.25s ease-out;
  border: 2px solid transparent;

  &:hover {
    background-color: ${whiteColor};
    color: ${blackColor};
    border: 2px solid ${blackColor};
    box-shadow: 4px 4px 0 #000;
    transition: 0.2s ease-out;
  }

  @media (min-width: 1024px) and (max-width: 1439px) {
    padding: 1rem 2rem;
  }
  @media screen and (max-width: 767px) {
    padding: 1rem 2rem;
  }
`;
