import React, { useEffect, useState } from "react";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
// import './NavbarStyles.scss'
import { Container, Section } from "../../GlobalStyles";
import {
  Nav,
  NavContainer,
  NavLogo,
  NavLogoLink,
  NavIcon,
  NavMenu,
  NavItem,
  NavLink,
  NavbarMore,
  NavMenuMore,
  NavItemMore,
  NavLinkMore,
  NavMoreCv,
  NavMoreCvLink,
} from "./Navbarstyle";

// import 'bootstrap/dist/css/bootstrap.min.css';
import { data } from "../../data/NavbarData";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [show, setShow] = useState(false);
  const handleClick = (e) => {
    e.stopPropagation();
    setShow(!show);
  };

  useEffect(() => {
    window.addEventListener("click", () => {
      setShow(false);
    });
  });

  return (
    <Container>
      <Nav show={show}>
        <NavContainer>
          {/* Navbar for Desktop adn Tablet */}
          <NavLogo>
            <Link to="/" style={{ textDecoration: "none" }}>
              <NavLogoLink href="#">Conian</NavLogoLink>
            </Link>
          </NavLogo>
          <NavMenu>
            {data.map((item, index) => (
              <NavItem key={index}>
                <NavLink href={item.to} id={item.id}>
                  {item.text}
                </NavLink>
              </NavItem>
            ))}
          </NavMenu>
          <NavIcon show={show} onClick={handleClick}>
            <HiOutlineMenuAlt4
              className="bar-icon"
              style={{ cursor: "pointer" }}
            />
          </NavIcon>
        </NavContainer>

        {/* Navbar for Mobile */}
        <NavbarMore show={show} onClick={(e) => e.stopPropagation()}>
          <NavMenuMore>
            {data.map((item, index) => (
              <NavItemMore key={index}>
                <NavLinkMore href={item.to} id={item.id}>
                  {item.text}
                </NavLinkMore>
              </NavItemMore>
            ))}
            <NavMoreCv>
              <NavMoreCvLink
                href="https://www.topcv.vn/xem-cv/CABaVQNbW1xUBVEGAFVXUVQODw8EAgRdDwRcDA47e3"
                target="_blank"
              >
                DownLoad My CV
              </NavMoreCvLink>
            </NavMoreCv>
          </NavMenuMore>
        </NavbarMore>
      </Nav>
    </Container>
  );
};
