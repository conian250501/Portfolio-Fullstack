import styled from "styled-components";

const backgroundColor = "#e5e5e5";
const bgColor = "#151313";
const textColor = "#051130";
const primaryColor = "#3a2bba";
const secondary = "#e0f954";
const whiteColor = "#fff";
const blackColor = "#000";

export const SectionName = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${secondary};
  padding: ${({ padding }) => (padding ? padding : "")};
  border: ${({ border }) => (border ? border : "")};
  @media screen and (max-width: 767px) {
    padding: 1.6rem 5%;
  }
  .icon__darts {
    font-size: 6rem;
    cursor: pointer;
  }
  .icon__darts:hover {
    animation: rotate 0.6s linear infinite;
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
    .icon__darts {
      font-size: 4rem;
    }
  }
`;

export const SectionHeading = styled.h1`
  font-size: 5rem;
  font-weight: bold;

  text-transform: uppercase;
  color: #fff;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000, 6px 4px 0 #000;
  user-select: none;

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    font-size: 3.5rem;
  }
  @media screen and (max-width: 767px) {
    font-size: 2.4rem;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
      1px 1px 0 #000, 3px 3px 0 #000;
  }
`;
export const SectionImage = styled.div``;

export const ImageWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-areas:
    "img-1 img-2 img-3 img-3"
    "img-1 img-4 img-5 img-6";
  gap: 2.4rem;

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    grid-template-areas:
      "img-1 img-1 img-3 img-3"
      "img-2 img-2 img-4 img-4"
      "img-5 img-5 img-6 img-6";
  }

  @media screen and (max-width: 767px) {
    grid-template-areas:
      "img-1 img-1 img-1 img-1"
      "img-2 img-2 img-2 img-2"
      "img-3 img-3 img-3 img-3"
      "img-4 img-4 img-4 img-4"
      "img-5 img-5 img-5 img-5"
      "img-6 img-6 img-6 img-6";

    .poster__img-container-1,
    .poster__img-container-2,
    .poster__img-container-3,
    .poster__img-container-4,
    .poster__img-container-5,
    .poster__img-container-6 {
      height: auto;
    }
  }

  .poster__img-container-1 {
    width: 100%;
    /* height: 400px; */
    border: 2px solid ${blackColor};
    cursor: pointer;
    grid-area: img-1;
  }
  .poster__img-container-2 {
    width: 100%;
    height: 400px;
    border: 2px solid ${blackColor};
    cursor: pointer;
    grid-area: img-2;
  }
  .poster__img-container-3 {
    width: 100%;
    height: 400px;
    border: 2px solid ${blackColor};
    cursor: pointer;
    grid-area: img-3;
    @media screen and (min-width: 768px) and (max-width: 1023px) {
      height: auto;
    }
  }
  .poster__img-container-4 {
    width: 100%;
    height: 400px;
    border: 2px solid ${blackColor};
    cursor: pointer;
    grid-area: img-4;
  }
  .poster__img-container-5 {
    width: 100%;
    height: 400px;
    border: 2px solid ${blackColor};
    cursor: pointer;
    grid-area: img-5;
    @media screen and (min-width: 768px) and (max-width: 1023px) {
      height: auto;
    }
  }
  .poster__img-container-6 {
    width: 100%;
    height: 400px;
    border: 2px solid ${blackColor};
    cursor: pointer;
    grid-area: img-6;
    @media screen and (min-width: 768px) and (max-width: 1023px) {
      height: auto;
    }
  }
`;
export const CarouselImg = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
  transition: all 0.2s ease-out;
  &:hover {
    transform: scale(1.1);
    transition: all 0.2s ease-out;
  }
`;

// Page title
export const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1.6rem 0;
`;
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
export const SliderContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  /* transform: translateY(10%); */
  width: 100%;
  /* height: fit-content; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  padding: 4px 24px;
  background-color: rgba(0, 0, 0, 0.7);
  transition: 0.25s linear;
  @media screen and (min-width: 768px) and (max-width: 1023px) {
  }
  @media screen and (max-width: 767px) {
  }
`;
export const SliderHeading = styled.h1`
  color: ${({ color }) => (color ? color : "#051130")};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "")};
  margin-bottom: ${({ marginBottom }) => (marginBottom ? marginBottom : "")};
  /* text-shadow: 3px 4px 0 #000; */
  transform: translateY(20px);
  transition: 0.25s linear;
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    transform: translateY(12px);
  }
  @media screen and (max-width: 767px) {
  }
`;
export const SliderDescription = styled.p`
  color: ${({ color }) => (color ? color : "#051130")};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "")};
  width: ${({ width }) => (width ? width : "")};
  transform: translateY(50px);
  text-shadow: 3px 4px 0 #000;
  transition: 0.25s linear;
  /* white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; */
`;

// Load more

export const PosterLoadMore = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  font-size: 2.4rem;
  cursor: pointer;
`;

export const LoadMoreContent = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.2rem 8rem;
  background-color: ${primaryColor};
  border: 2px solid transparent;

  transition: all 0.2s linear;
  .load-more {
    color: #fff;
    font-size: 3.2rem;
    transition: all 0.2s linear;
  }
  &:hover {
    box-shadow: 6px 6px 0 rgba(0, 0, 0, 1);
    background-color: ${whiteColor};
    border: 2px solid ${blackColor};
    transition: all 0.2s linear;
  }
  &:hover .load-more {
    color: ${blackColor};
  }
`;
