import styled from "styled-components";

const backgroundColor = "#e5e5e5";
const bgColor = "#151313";
const textColor = "#051130";
const primaryColor = "#3a2bba";
const secondary = "#e0f954";
const whiteColor = "#fff";
const blackColor = "#000";

export const AboutContainer = styled.div`
  padding-top: 120px;
  display: flex;
  /* align-items: center; */
  justify-content: space-between;
  z-index: 1;
  @media screen and (max-width: 767px) {
    flex-direction: column;
    padding-top: 70px;
  }
`;
export const AboutItem = styled.div`
  flex: 1 0 60%;
  margin-top: 5%;
  overflow: hidden;
  @media (min-width: 1024px) and (max-width: 1439px) {
    /* flex: 1 0 60%; */
    height: fit-content;
    margin-top: 0;
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    margin-top: 0;
    flex: 1 0 60%;
    height: fit-content;
  }
  @media screen and (max-width: 767px) {
    flex: 1 0 100%;
  }
`;

export const AboutButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 2.4rem 3.8rem;
  border: 2px solid ${blackColor};
  background-color: ${secondary};
  transition: all 0.25s linear;
  .right-icon,
  .left-icon {
    color: ${blackColor};
    font-size: 5rem;
    transition: all 0.25s linear;
  }
  &:hover {
    background-color: ${secondary};
    box-shadow: 12px 12px 1px rgba(0, 0, 0, 1);
    transition: all 0.25s linear;
  }
  .left-icon:hover,
  .right-icon:hover {
    transition: all 0.5s linear;
    animation: 0.6s rotate linear infinite;
  }

  .btn-text {
    font-family: "Syne", sans-serif;
    font-size: 3.4rem;
    font-weight: 800;
    text-transform: uppercase;
    color: ${textColor};
    /* text-shadow: 
            -1px -1px 0 #000, 
            1px -1px 0 #000, 
            -1px 1px 0 #000,
            1px 1px 0 #000, 
            3px 3px 0 #000; */
  }
  a {
    text-decoration: none;
    color: ${textColor};
  }
  @font-face {
    font-family: "GulfsDisplay";
    src: url(../../../public/assets/fonts/GulfsDisplay-SemiExpanded.ttf);
    font-weight: normal;
    font-style: normal;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @media screen and (min-width: 1024px) and (max-width: 1439px) {
    padding: 2.4rem 2.2rem;
    font-size: 1.8rem;
    .right-icon,
    .left-icon {
      font-size: 4rem;
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    padding: 1.2rem 3rem;
    font-size: 1.8rem;
    /* text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
        1px 1px 0 #000, 4px 3px 0 #000; */
    .right-icon,
    .left-icon {
      font-size: 4rem;
    }
    .right-icon {
      margin-left: 2rem !important;
    }
    .left-icon {
      margin-right: 2rem !important;
    }
    .btn-text {
      font-size: 2rem;
    }
  }

  @media screen and (max-width: 767px) {
    width: 100%;
    font-size: 1.6rem;
    padding: 1.6rem 0;
    /* text-shadow: 
        -1px -1px 0 #000, 
        1px -1px 0 #000, 
        -1px 1px 0 #000,
        1px 1px 0 #000, 
        3px 3px 0 #000; */
    .right-icon,
    .left-icon {
      font-size: 4rem;
    }
    .right-icon {
      margin-left: 2rem !important;
    }
    .left-icon {
      margin-right: 2rem !important;
    }
    .btn-text {
      font-size: 2rem;
    }
  }
`;
export const AboutHeading = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  margin: 3.2rem 0 2rem;

  @media (min-width: 1024px) and (max-width: 1439px) {
    font-size: 3.6rem;
    margin: 1rem 0;
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    font-size: 2.6rem;
    margin-bottom: 0.8rem;
  }
  @media screen and (max-width: 767px) {
    width: 80%;
    font-size: 3rem;
    margin-bottom: 0.6rem;
    margin-top: 2.4rem;
  }
`;
export const AboutSubtitle = styled.h3`
  font-size: 2.8rem;
  font-weight: bold;
  margin-bottom: 24px;
  overflow: hidden;
  @media (min-width: 1024px) and (max-width: 1439px) {
    width: 90%;
    margin-bottom: 16px;
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    width: 85%;
    font-size: 2.4rem;
  }
  @media screen and (max-width: 767px) {
    font-size: 2rem;
  }
`;
export const AboutDescription = styled.p`
  width: 92%;
  font-size: 2.4rem;
  font-weight: lighter;
  font-style: italic;
  line-height: 1.4;
  margin-top: 3.6rem;

  @media (min-width: 1024px) and (max-width: 1439px) {
    width: 90%;
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    width: 83%;
    font-size: 1.6rem;
  }
  @media screen and (max-width: 767px) {
    width: 100%;
    font-size: 1.8rem;
  }
`;
export const AboutLink = styled.a`
  display: flex;
  align-items: center;
  width: 100%;
  color: ${textColor};
  font-size: 2rem;
  font-weight: lighter;
  font-style: italic;
  letter-spacing: 2px;
  margin-top: 8rem;
  /* text-decoration: none; */
  transition: all 0.25s linear;

  .arrow-icon {
    padding-top: 5px;
    margin-left: 3px;
    transition: all 0.25s linear;
  }

  &:hover {
    .arrow-icon {
      margin-left: 24px;
    }
  }

  @media (min-width: 1024px) and (max-width: 1439px) {
    margin-top: 1.2rem;
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    margin-top: 2rem;
    font-size: 2rem;
  }
  @media screen and (max-width: 767px) {
    margin-top: 5rem;
    margin-bottom: 6rem;
  }
`;

export const AboutMoveDown = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 20px;
  width: 3.5rem;
  height: 3.5rem;
  background-color: #000;
  color: #fff;
  transition: all 0.25s linear;
  .down-icon {
    font-size: 25px;
  }
  &:hover {
    background-color: #ffffff;
    color: #000;
    box-shadow: 4px 4px 1px #000;
    border: 2px solid #000;
    transition: all 0.25s linear;
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    margin-top: 10px;
    width: 2.4rem;
    height: 2.4em;
    .down-icon {
      font-size: 20px;
    }
  }
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const AboutImage = styled.div`
  position: relative;
  height: 500px;
  width: 500px;
  /* border-bottom-left-radius: 60rem; */
  border-bottom-right-radius: 40rem;
  flex: 1 0 35%;
  overflow: hidden;
  .loader-5 {
    position: absolute;
    top: -35px;
    left: 35px;
    transform: translate(-50%, -50%);
    z-index: -1;
    height: 380px;
    width: 380px;
    -webkit-animation: loader-5-1 2s cubic-bezier(0.77, 0, 0.175, 1) infinite;
    animation: loader-5-1 2s cubic-bezier(0.77, 0, 0.175, 1) infinite;
  }
  @-webkit-keyframes loader-5-1 {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }
  @keyframes loader-5-1 {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  .loader-5::before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: auto;
    margin: auto;
    width: 60px;
    height: 60px;
    background: ${whiteColor};
    border-radius: 50%;
    border: 2px solid ${blackColor};
    -webkit-animation: loader-5-2 2s cubic-bezier(0.77, 0, 0.175, 1) infinite;
    animation: loader-5-2 2s cubic-bezier(0.77, 0, 0.175, 1) infinite;
  }
  @-webkit-keyframes loader-5-2 {
    0% {
      -webkit-transform: translate3d(0, 0, 0) scale(1);
    }
    50% {
      -webkit-transform: translate3d(40px, 0, 0) scale(0.3);
    }
    100% {
      -webkit-transform: translate3d(0, 0, 0) scale(1);
    }
  }
  @keyframes loader-5-2 {
    0% {
      transform: translate3d(0, 0, 0) scale(1);
    }
    50% {
      transform: translate3d(40px, 0, 0) scale(0.3);
    }
    100% {
      transform: translate3d(0, 0, 0) scale(1);
    }
  }
  .loader-5::after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: auto;
    bottom: 0;
    right: 0;
    margin: auto;
    width: 60px;
    height: 60px;
    background: ${whiteColor};
    border-radius: 50%;
    border: 2px solid ${blackColor};
    -webkit-animation: loader-5-3 2s cubic-bezier(0.77, 0, 0.175, 1) infinite;
    animation: loader-5-3 2s cubic-bezier(0.77, 0, 0.175, 1) infinite;
  }
  @-webkit-keyframes loader-5-3 {
    0% {
      -webkit-transform: translate3d(0, 0, 0) scale(1);
    }
    50% {
      -webkit-transform: translate3d(-40px, 0, 0) scale(0.3);
    }
    100% {
      -webkit-transform: translate3d(0, 0, 0) scale(1);
    }
  }
  @keyframes loader-5-3 {
    0% {
      transform: translate3d(0, 0, 0) scale(1);
    }
    50% {
      transform: translate3d(-40px, 0, 0) scale(0.3);
    }
    100% {
      transform: translate3d(0, 0, 0) scale(1);
    }
  }
  .loader-5 span {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    height: 380px;
    width: 380px;
  }
  .loader-5 span::before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    bottom: auto;
    right: 0;
    margin: auto;
    width: 60px;
    height: 60px;
    background: ${whiteColor};
    border: 2px solid ${blackColor};
    border-radius: 50%;
    -webkit-animation: loader-5-4 2s cubic-bezier(0.77, 0, 0.175, 1) infinite;
    animation: loader-5-4 2s cubic-bezier(0.77, 0, 0.175, 1) infinite;
  }
  @-webkit-keyframes loader-5-4 {
    0% {
      -webkit-transform: translate3d(0, 0, 0) scale(1);
    }
    50% {
      -webkit-transform: translate3d(0, 40px, 0) scale(0.3);
    }
    100% {
      -webkit-transform: translate3d(0, 0, 0) scale(1);
    }
  }
  @keyframes loader-5-4 {
    0% {
      transform: translate3d(0, 0, 0) scale(1);
    }
    50% {
      transform: translate3d(0, 40px, 0) scale(0.3);
    }
    100% {
      transform: translate3d(0, 0, 0) scale(1);
    }
  }
  .loader-5 span::after {
    content: "";
    display: block;
    position: absolute;
    top: auto;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    width: 60px;
    height: 60px;
    background: ${whiteColor};
    border: 2px solid ${blackColor};
    border-radius: 50%;
    -webkit-animation: loader-5-5 2s cubic-bezier(0.77, 0, 0.175, 1) infinite;
    animation: loader-5-5 2s cubic-bezier(0.77, 0, 0.175, 1) infinite;
  }
  @-webkit-keyframes loader-5-5 {
    0% {
      -webkit-transform: translate3d(0, 0, 0) scale(1);
    }
    50% {
      -webkit-transform: translate3d(0, -40px, 0) scale(0.3);
    }
    100% {
      -webkit-transform: translate3d(0, 0, 0) scale(1);
    }
  }
  @keyframes loader-5-5 {
    0% {
      transform: translate3d(0, 0, 0) scale(1);
    }
    50% {
      transform: translate3d(0, -40px, 0) scale(0.3);
    }
    100% {
      transform: translate3d(0, 0, 0) scale(1);
    }
  }

  @media (min-width: 1024px) and (max-width: 1439px) {
    flex: 1 0 40%;
    width: 400px;
    height: 400px;
    .loader-5 {
      position: absolute;
      top: -29px;
      left: 42px;
      transform: translate(-50%, -50%);
      z-index: -1;
      height: 280px;
      width: 280px;
      -webkit-animation: loader-5-1 2s cubic-bezier(0.77, 0, 0.175, 1) infinite;
      animation: loader-5-1 2s cubic-bezier(0.77, 0, 0.175, 1) infinite;
    }
    .loader-5::before {
      margin: auto;
      width: 50px;
      height: 50px;
    }

    .loader-5::after {
      width: 50px;
      height: 50px;
    }

    .loader-5 span {
      height: 280px;
      width: 280px;
    }
    .loader-5 span::before {
      width: 50px;
      height: 50px;
    }

    .loader-5 span::after {
      width: 50px;
      height: 50px;
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    flex: 1 0 40%;
    width: 300px;
    height: 300px;
    .loader-5 {
      position: absolute;
      top: -28px;
      left: 20px;
      transform: translate(-50%, -50%);
      z-index: -1;
      height: 230px;
      width: 230px;
      -webkit-animation: loader-5-1 2s cubic-bezier(0.77, 0, 0.175, 1) infinite;
      animation: loader-5-1 2s cubic-bezier(0.77, 0, 0.175, 1) infinite;
    }
    .loader-5::before {
      margin: auto;
      width: 30px;
      height: 30px;
    }

    .loader-5::after {
      width: 30px;
      height: 30px;
    }

    .loader-5 span {
      height: 230px;
      width: 230px;
    }
    .loader-5 span::before {
      width: 30px;
      height: 30px;
    }

    .loader-5 span::after {
      width: 30px;
      height: 30px;
    }
  }
  @media screen and (max-width: 767px) {
    margin-top: 180px;
    flex: 1 0 100%;
    height: 440px;
    width: 100%;
    .loader-5 {
      position: absolute;
      top: -6%;
      left: 0%;
      transform: translate(-50%, -50%);
      z-index: -1;
      height: 330px;
      width: 330px;
      -webkit-animation: loader-5-1 2s cubic-bezier(0.77, 0, 0.175, 1) infinite;
      animation: loader-5-1 2s cubic-bezier(0.77, 0, 0.175, 1) infinite;
    }
    .loader-5::before {
      margin: auto;
      width: 30px;
      height: 30px;
    }

    .loader-5::after {
      width: 30px;
      height: 30px;
    }

    .loader-5 span {
      height: 330px;
      width: 330px;
    }
    .loader-5 span::before {
      width: 30px;
      height: 30px;
    }

    .loader-5 span::after {
      width: 30px;
      height: 30px;
    }
  }
`;
export const AboutImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  /* transform: translateX(-20px); */
  transition: all 0.25s ease-out;

  @media screen and (min-width: 768px) and (max-width: 1023px) {
  }
  @media screen and (max-width: 767px) {
  }
`;
export const AboutSocial = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 2rem;
  font-weight: 400;
  margin-top: 60px;
  @media screen and (min-width: 1024px) and (max-width: 1439px) {
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    font-size: 1.6rem;
  }
  @media screen and (max-width: 767px) {
    text-align: center;
  }
`;

export const AboutSocialItem = styled.a`
  position: relative;
  text-decoration: none;
  color: ${textColor};
  &::before {
    content: "";
    position: absolute;
    bottom: 0;

    width: 0;
    height: 2px;
    background-color: #151313;
    transition: all 0.3s ease-out;
  }

  &:hover::before {
    width: 100%;
    transition: all 0.3s ease-out;
  }

  @media screen and (max-width: 767px) {
    font-size: 1.6rem;
    &::before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 0;
      height: 2px;
      background-color: #151313;
      transition: all 0.3s ease-out;
    }
  }
`;
