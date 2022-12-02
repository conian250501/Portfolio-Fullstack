import styled from "styled-components";
import Slider from "react-slick";


const backgroundColor = '#e5e5e5';
const bgColor = '#151313';
const textColor = '#051130';
const primaryColor = '#3a2bba';
const secondary = '#e0f954';
const whiteColor = '#fff';
const blackColor = '#000';



export const SectionSlider = styled(Slider)`
    width: 100%;
  .slick-track {
    position: relative;
    display: flex;
    align-items: center;
    width:100%;

}
  .slick-slide {
    margin-left: 8px;
    margin-right: 8px;
    
  }
  .slick-list {
    overflow: hidden;
    margin: 0 -8px;
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  /* height: 320px; */
  display: flex !important;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  /* margin-top: 4.8rem; */
  outline: none;
  position: relative;
  transition: 0.25s linear;
  cursor: pointer;

  &:hover .SliderBackground {
    /* display: block; */
    opacity: 1;
    transition: 0.25s ease-out;
    height: 35%;
  }
  &:hover .SliderHeading {
    transform: translateY(20px);
    opacity: 1;
    transition: 0.25s linear;
  }
  &:hover .SliderDescription {
    transform: translateY(0);
    opacity: 1;
    transition: 0.25s linear;
  }

  
  &::before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 20px;
    height: 20px;
    border-left: 3px solid #000;
    border-top: 3px solid #000;
  }
  &::after{
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 20px;
    height: 20px;
    border-right: 3px solid #000;
    border-top: 3px solid #000;
  }

  @media screen and (max-width: 767px){
    /* width:352px; */
  }

`;
export const CarouselImg = styled.img`
  position: relative;
  width: 100%;
  height: 320px;
  border: 3px solid #151313;
  object-fit: cover;
  


  @media screen and (min-width: 768px) and (max-width: 1023px) {
    height: 320px;
  }
  @media screen and (max-width: 767px) {
      width: 100%;
    height: 320px;
  }
`;

export const IconContainer = styled.div`
  /* position: absolute; */
  display: flex;
  justify-content: space-between;
  align-items: center;
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
    margin: 16px 0;
    transition: all 0.2s linear;

  }
  .left {
    top: 0;
      &:hover {
          box-shadow:4px 4px 0 #000;
          transition: all 0.2s linear;
      }
  }
  .right {
    /* right: 48px; */
    &:hover {
          box-shadow:-4px 4px 0 #000;
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

export const SliderBackground = styled.div`
  position: absolute;
  top: 90%;
  left: 50%;
  width: 100%;
  height: 20%;
  transform: translate(-50%, -50%);
  background-color: rgba(0,0,0,0.7);
  transition: 0.25s ease-out;
`;

export const SliderContent = styled.div`
   position: absolute;
  bottom: -105px;
  left: 24px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: fle;
  overflow: hidden;
  transition: 0.25s linear;

`;
export const SliderHeading = styled.h1`
  color: ${({ color }) => (color ? color : "#051130")};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "")};
  margin-bottom: ${({ marginBottom }) => (marginBottom ? marginBottom : "")};
  transform: translateY(60px);
  text-shadow: 3px 4px 0 #000;
  transition: 0.25s linear;

`;
export const SliderDescription = styled.p`
  color: ${({ color }) => (color ? color : "#051130")};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "")};
  width: ${({ width }) => (width ? width : "")};
  transform: translateY(50px);
  text-shadow: 3px 4px 0 #000;
  /* opacity: 0; */
  transition: 0.25s linear;

`;

export const ButtonContainer = styled.div`
  margin-top: ${({ marginTop }) => (marginTop ? marginTop : "")};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const ButtonCode = styled.a`
  position: relative;
  width: ${({ width }) => (width ? width : "")};
  padding: ${({ padding }) => (padding ? padding : "")};
  border: ${({ border }) => (border ? border : "0px")};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "")};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : "")};
  color: ${({ color }) => (color ? color : "")};
  outline: none;
  background: transparent;
  text-transform: uppercase;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    border-top: 2px solid #151313;
    border-left: 2px solid #151313;
    width: 10%;
    height: 30%;
    transition: 0.25s ease-out;
  }
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    border-bottom: 2px solid #151313;
    border-right: 2px solid #151313;
    width: 10%;
    height: 30%;
    transition: 0.25s ease-out;
  }

  &:hover::before,
  &:hover::after {
    height: 98.2%;
    width: 98.2%;
    transition: 0.25s ease-out;
  }
`;

export const ButtonDemo = styled.a`
  width: ${({ width }) => (width ? width : "")};
  padding: ${({ padding }) => (padding ? padding : "")};
  border: ${({ border }) => (border ? border : "")};
  background: ${({ background }) => (background ? background : "")};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "")};
  color: ${({ color }) => (color ? color : "")};
  outline: none;
  background: #151313;
  text-transform: uppercase;
  text-align: center;
  text-decoration: none;
  transition: 0.25s ease-out;
  &:hover {
    background-color: #3a2bba;
    transition: 0.2s ease-out;
  }
`;
