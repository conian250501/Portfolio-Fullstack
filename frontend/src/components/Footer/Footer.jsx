import React from "react";
import { RiEye2Line } from "react-icons/ri";
import { motion } from "framer-motion";

import {
  Footer,
  FooterContainer,
  FooterLogo,
  FooterMenu,
  FooterMenuItem,
  FooterSocialLink,
  IconContainer,
} from "./FooterStyles";

import { dataMenu, dataLink, dataPolicy } from "../../data/FooterData";

Footer.propTypes = {};

export const Footers = (props) => {
  return (
    <Footer
      width={"1440px"}
      maxWidth={"100%"}
      minWidth={"100%"}
      marginTop={"12rem"}
      margin={"0 auto"}
      // marginBottom={'4rem'}
      borderTop={"1px solid #000000"}
      backgroundColor={"white"}
    >
      <motion.div
        transition={{
          duration: 0.5,
        }}
        initial={{
          opacity: 0,
          y: "-100px",
        }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <FooterContainer>
          <FooterLogo href="#">Conian</FooterLogo>
          <FooterMenu>
            {dataMenu.map((item) => (
              <FooterMenuItem key={item.id}>
                <FooterSocialLink href={item.link}>
                  {item.title}
                </FooterSocialLink>
              </FooterMenuItem>
            ))}
          </FooterMenu>
          <FooterMenu>
            {dataLink.map((item) => (
              <FooterMenuItem key={item.id}>
                <FooterSocialLink href={item.link}>
                  {item.title}
                </FooterSocialLink>
              </FooterMenuItem>
            ))}
          </FooterMenu>
          <FooterMenu>
            {dataPolicy.map((item) => (
              <FooterMenuItem key={item.id}>{item.title}</FooterMenuItem>
            ))}
            <IconContainer>
              <RiEye2Line className="eyes__icon" />
              <RiEye2Line className="eyes__icon" />
            </IconContainer>
          </FooterMenu>
        </FooterContainer>
      </motion.div>
    </Footer>
  );
};
