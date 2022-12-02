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

export const ContactContainer = styled.div`
  margin-top: ${({ marginTop }) => (marginTop ? marginTop : "")};
`;
export const ContactList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: auto auto auto auto;
  gap: 24px;
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    display: grid;
    grid-template-columns: auto auto;
  }
  @media screen and (max-width: 767px) {
    display: grid;
    grid-template-columns: auto;
  }
`;
export const ContactItem = styled.li`
  /* width: 25%; */
  padding: 3rem 0;
  text-align: center;
  border: 2px solid ${blackColor};
  transition: all 0.2s ease-out;

  &:hover {
    background-color: ${primaryColor};
    box-shadow: 8px 8px 0 #000000;
    transition: all 0.2s ease-out;
  }
  @media screen and (max-width: 767px) {
    padding: 2rem 0;
  }
`;
export const ContactLink = styled.a`
  text-decoration: none;
  font-size: 2.4rem;
  color: ${textColor};
  &:hover {
    color: ${whiteColor};
  }
`;
export const ContactEmail = styled.div`
  width: 100%;
  padding: 3rem 0;
  font-size: 2.2rem;
  text-align: center;
  border: 2px solid ${blackColor};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2.4rem;
  transition: all 0.2s ease-out;

  &:hover {
    background-color: ${primaryColor};
    color: ${whiteColor};
    box-shadow: 8px 8px 0 #000;
    transition: all 0.2s ease-out;
  }
`;
