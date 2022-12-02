import React from "react";
import {
  BsArrowRight,
  BsChevronDoubleDown,
  BsChevronDown,
} from "react-icons/bs";
import { GiNinjaStar } from "react-icons/gi";
import { motion } from "framer-motion";
import { Typewriter, useTypewriter, Cursor } from "react-simple-typewriter";

import { Container, Section } from "../../GlobalStyles";
import {
  AboutContainer,
  AboutItem,
  AboutButton,
  AboutHeading,
  AboutSubtitle,
  AboutDescription,
  AboutLink,
  AboutImage,
  AboutImg,
  AboutSocial,
  AboutSocialItem,
  AboutMoveDown,
} from "./AboutStyles";

import { data } from "../../data/AboutData";

const About = ({ id }) => {
  const handleScroll = () => {
    window.scrollTo(0, 750);
  };
  const { text } = useTypewriter({
    words: ["Minh Tai", "ConianGuys", "Minh Tai"],
    loop: 2,
    delaySpeed: 5000,
  });
  return (
    <Section width={"1440px"} maxWidth={"100%"} margin={"0 auto"}>
      <AboutContainer id={id}>
        {/* content */}
        <AboutItem id={data.id}>
          <motion.div
            className="button"
            transition={{
              duration: 1.4,
              // ease: "easeIn",
            }}
            initial={{
              x: "-700px",
            }}
            animate={{ x: 0 }}
          >
            <AboutButton>
              <GiNinjaStar
                className="left-icon"
                style={{ marginRight: "32px" }}
              />
              <h1 className="btn-text">
                <a
                  href="https://www.topcv.vn/xem-cv/CABaVQNbW1xUBVEGAFVXUVQODw8EAgRdDwRcDA47e3"
                  target="_blank"
                  rel="noreferrer"
                >
                  Welcome
                </a>
              </h1>
              <GiNinjaStar
                className="right-icon"
                style={{ marginLeft: "32px" }}
              />
            </AboutButton>
          </motion.div>
          <AboutHeading>
            Hello, my name is {text}
            <Cursor cursorStyle="_" />
          </AboutHeading>
          <motion.div>
            <AboutSubtitle>
              <Typewriter
                words={["I’m Front-end Developer, UI/UX and Poster Desginer"]}
                loop={1}
                typeSpeed={70}
              />
            </AboutSubtitle>
          </motion.div>
          <motion.div
            initial={{ x: "400px", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeIn" }}
          >
            <AboutDescription>
              "As a <strong>creative</strong>, logical thinker and skilled in{" "}
              <strong>graphic software</strong> and
              <strong> programming languages</strong>, I will solve your
              problems. Take a look at work below and feel free to contact me
              with any questions!"
            </AboutDescription>
          </motion.div>
          <AboutLink
            href="https://www.linkedin.com/in/minh-tai-a14134228/"
            target="_blank"
          >
            {data.link}
            <BsArrowRight
              className="arrow-icon"
              style={{ lineHeight: "0", fontSize: "30px" }}
            />
          </AboutLink>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <AboutMoveDown onClick={handleScroll}>
              <BsChevronDown className="down-icon first-icon" />
            </AboutMoveDown>
          </motion.div>
        </AboutItem>

        {/* Image */}
        <motion.div
          initial={{ x: "500px" }}
          animate={{ x: 0 }}
          transition={{ duration: 1.2 }}
        >
          <AboutImage>
            <AboutImg src={data.image} />
            <div className="loader-5 center">
              <span></span>{" "}
            </div>
          </AboutImage>
          <AboutSocial>
            <AboutSocialItem
              href="https://www.instagram.com/conianguys/"
              target={"_blank"}
            >
              <motion.div
                initial={{ y: "100px", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeIn" }}
              >
                Instagram
              </motion.div>
            </AboutSocialItem>
            <AboutSocialItem
              href="https://www.behance.net/imconianguys"
              target={"_blank"}
            >
              <motion.div
                initial={{ y: "100px", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.2, ease: "easeIn" }}
              >
                Behance
              </motion.div>
            </AboutSocialItem>
            <AboutSocialItem
              href="https://github.com/conian250501"
              target={"_blank"}
            >
              <motion.div
                initial={{ y: "100px", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.4, ease: "easeIn" }}
              >
                Github
              </motion.div>
            </AboutSocialItem>
          </AboutSocial>
        </motion.div>
      </AboutContainer>
    </Section>
  );
};

export default About;
