import React, { useRef } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { GiNinjaStar } from "react-icons/gi";
import { motion } from "framer-motion";

import { Section, SectionName, SectionHeading } from "../../GlobalStyles";
import {
  SectionSlider,
  ImageWrapper,
  CarouselImg,
  SliderBackground,
  SliderContent,
  SliderHeading,
  SliderDescription,
  IconContainer,
} from "./SkillsStyles.jsx";

import { data, sliderSettings } from "../../data/SkillsData";

export const Skills = ({ id }) => {
  const sliderRef = useRef(null);
  return (
    <Section
      id={id}
      width={"1440px"}
      maxWidth={"100%"}
      marginTop={"24rem"}
      marginBottom={"4rem"}
      margin={"0 auto"}
    >
      <SectionName
        align="center"
        justify="space-between"
        border={"3px solid #333"}
      >
        <GiNinjaStar className="icon__darts" />
        <SectionHeading>Skills</SectionHeading>
        <GiNinjaStar className="icon__darts" />
      </SectionName>
      {/* Button Prev and Next */}
      <IconContainer>
        <div className="left" onClick={() => sliderRef?.current?.slickPrev()}>
          <BsArrowLeft className="btn-prev" />
        </div>
        <div className="right" onClick={() => sliderRef?.current?.slickNext()}>
          <BsArrowRight className="btn-next" />
        </div>
      </IconContainer>

      {/* Carousel */}
      <SectionSlider {...sliderSettings} ref={sliderRef}>
        {data.map((img, index) => (
          <motion.div
            key={index}
            transition={{
              duration: 0.3 * (index + 2),
            }}
            initial={{
              opacity: 0,
              y: "200px",
            }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <ImageWrapper>
              <CarouselImg src={img.image} />
              <SliderBackground className="SliderBackground"></SliderBackground>
              <SliderContent>
                <SliderHeading
                  className="SliderHeading"
                  color={"#fff"}
                  fontSize="2rem"
                  marginBottom={"2.4rem"}
                >
                  {img.title}
                </SliderHeading>
                <SliderDescription
                  className="SliderDescription"
                  color={"#fff"}
                  fontSize="1.2rem"
                  width={"80%"}
                >
                  {img.description}
                </SliderDescription>
              </SliderContent>
            </ImageWrapper>
          </motion.div>
        ))}
      </SectionSlider>
    </Section>
  );
};
