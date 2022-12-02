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

export const Nav = styled.nav`
  position: fixed;
  width: 100%;
  height: 0;
  z-index: 9999;
`;
export const NavContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  border: 2px solid #000;
  padding: 1.5rem 4.8rem;

  @media screen and (max-width: 767px) {
    align-items: center;
    padding: 1.6rem 1.6rem;
    z-index: 1;
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    padding: 1.5rem 3.2rem;
  }
`;
export const NavLogo = styled.div`
  /* font-family: 'Syne', sans-serif; */
`;
export const NavLogoLink = styled.a`
  color: ${textColor};
  font-size: 4rem;
  font-weight: 700;
  text-transform: uppercase;
  text-decoration: none;
  user-select: none;
  cursor: pointer;
  transition: all 0.2s linear;
  @media screen and (max-width: 767px) {
    font-size: 2.6rem;
  }
`;
export const NavMenu = styled.ul`
  font-family: "Space Grotesk", sans-serif;
  list-style: none;
  @media screen and (max-width: 767px) {
    display: none;
  }
`;
export const NavItem = styled.li`
  display: inline-block;
  margin-left: 8.6rem;
  padding-left: 0;
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    margin-left: 4.8rem;
  }
`;

export const NavLink = styled.a`
  position: relative;
  font-size: 2rem;
  font-weight: 400;
  text-decoration: none;
  color: #051130;
  border-bottom: 0px solid #051130;
  border-width: 0;
  transition: 0.25s linear;
  cursor: pointer;
  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 1.5px;
    background: #051130;
    transition: 0.25s linear;
  }
  &:hover::before {
    width: 100%;
    transition: 0.25s linear;
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    font-size: 1.6rem;
  }
`;
export const NavIcon = styled.div`
  display: none;
  .bar-icon {
    width: 35px;
    height: 35px;
    background: ${({ show }) => (show ? "#3a2bba" : "#fff")};
    border: ${({ show }) => (show ? "3px solid #000" : "")};
    color: ${({ show }) => (show ? "#FFf" : "#051130")};
  }

  @media screen and (max-width: 767px) {
    line-height: 0;
    font-size: 3.2rem;
    display: block;
  }
`;

// ==== Navbar for Mobile ====
export const NavbarMore = styled.div`
  display: none;
  z-index: 999;

  @media screen and (max-width: 767px) {
    display: block;
    width: 100%;
    border: 2px solid #151313;
    background: #fff;
    padding: 1.6rem 1.6rem;
    transform: ${({ show }) => (show ? "translateY(0)" : "translateY(-300px)")};
    transition: all 0.3s ease-out;
    z-index: ${({ show }) => (show ? "10" : "-1")};
  }
`;
export const NavMenuMore = styled.ul`
  @media screen and (max-width: 767px) {
    list-style: none;
  }
`;
export const NavItemMore = styled.li`
  @media screen and (max-width: 767px) {
    padding-left: 0;
    margin-bottom: 2rem;
    text-align: center;
  }
`;

export const NavLinkMore = styled.a`
  @media screen and (max-width: 767px) {
    font-size: 2rem;
    letter-spacing: 0.5px;
    text-decoration: none;
    color: #051130;
    &::before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 1.5px;
      background: #051130;
      transition: 0.25s linear;
    }
    &:hover::before {
      width: 100%;
      transition: 0.25s linear;
    }
  }
`;

export const NavMoreCv = styled.div`
  text-align: center;
  padding: 1.6rem 2.4rem;
  background: #3a2bba;
`;

export const NavMoreCvLink = styled.a`
  color: #fff;
  font-size: 1.6rem;
  cursor: pointer;
  user-select: none;
  text-decoration: none;
`;
