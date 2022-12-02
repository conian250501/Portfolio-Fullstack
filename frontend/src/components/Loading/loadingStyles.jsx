import styled from "styled-components";

export const LoadingContainer = styled.div`
  position: fixed;
  z-index: 9999999;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #3a2bba;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: ${({ loading }) => (loading ? "" : "translate(150%, 0) ")};
  transition: ${({ loading }) => (loading ? "" : "all 0.45s linear")};
`;
export const LoadingIcon = styled.div`
  .icon {
    color: rgb(255, 255, 255);
    font-size: 80px;
    animation: rotateIcon 0.8s linear infinite;
  }
  @media screen and (max-width: 767px) {
    .icon {
      font-size: 60px;
    }
  }
  @keyframes rotateIcon {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(90deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
