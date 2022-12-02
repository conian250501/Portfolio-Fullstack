import React, { useRef } from "react";
import { BsArrowLeft, BsArrowRight, BsCodeSlash } from "react-icons/bs";
import { GiNinjaStar } from "react-icons/gi";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { data, sliderSettings } from "../../../data/ProjectData";
import { Section, SectionName, SectionHeading } from "../../../GlobalStyles";
import {
  SectionSlider,
  ImageWrapper,
  CarouselImg,
  SliderContent,
  SliderHeading,
  ProjectTechnical,
  ProjectTechnicalItem,
  ButtonContainer,
  ButtonDemo,
  ButtonCode,
  IconContainer,
  PageContainer,
  PageList,
  PageItem,
} from "./ProjectStyles";

export const Project = ({ id }) => {
  const sliderRef = useRef(null);
  return (
    <>
      <Section
        id={id}
        width={"1440px"}
        maxWidth={"100%"}
        marginTop={"12rem"}
        margin={"0 auto"}
      >
        <SectionName
          align="center"
          justify="space-between"
          border={"3px solid #333"}
        >
          <GiNinjaStar className="icon__darts" />
          <SectionHeading>Feature Work</SectionHeading>
          <GiNinjaStar className="icon__darts" />
        </SectionName>

        {/* Button Prev and Next */}
        <IconContainer>
          <div className="left" onClick={() => sliderRef?.current?.slickPrev()}>
            <BsArrowLeft className="btn-prev" />
          </div>
          <PageContainer>
            <PageList>
              <PageItem className="active">
                <Link to="/">Web</Link>
              </PageItem>
              <PageItem>
                <Link to="/poster">Poster</Link>
              </PageItem>
              <PageItem>
                <Link to="/Ui">UI/UX</Link>
              </PageItem>
            </PageList>
          </PageContainer>
          <div
            className="right"
            onClick={() => sliderRef?.current?.slickNext()}
          >
            <BsArrowRight className="btn-next" />
          </div>
        </IconContainer>

        {/* Carousel */}
        <SectionSlider {...sliderSettings} ref={sliderRef}>
          {data.map((img, index) => (
            <motion.div
              key={img.id}
              transition={{
                duration: 0.3 * (index + 2),
              }}
              initial={{
                opacity: 0,
                y: "300px",
              }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <ImageWrapper>
                <CarouselImg src={img.image} />
              </ImageWrapper>
              <SliderContent className="slider-content">
                <SliderHeading
                  className="SliderHeading"
                  color={"#000"}
                  fontSize="2.4rem"
                  marginBottom={".2rem"}
                >
                  {img.title}
                </SliderHeading>
                <ProjectTechnical>
                  {img.technicals.map((item, index) => (
                    <ProjectTechnicalItem key={index}>
                      {item.name}
                    </ProjectTechnicalItem>
                  ))}
                </ProjectTechnical>
              </SliderContent>
              {/* Button  */}
              <ButtonContainer marginTop={"2.4rem"}>
                <ButtonCode
                  href={img.linkCode}
                  target="_blank"
                  width={"calc(50% - 16px)"}
                  padding={"1.6rem 0"}
                  // border={'3px solid #333'}

                  fontSize={"2rem"}
                  fontWeight={"500"}
                >
                  <BsCodeSlash style={{ fontSize: "3.2rem", color: "black" }} />
                </ButtonCode>
                <ButtonDemo
                  href={img.linkDemo}
                  target="_blank"
                  width={"calc(50% - 16px)"}
                  padding={"2rem 0"}
                  fontSize={"2rem"}
                  fontWeight={"500"}
                  color={"#fff"}
                >
                  View
                </ButtonDemo>
              </ButtonContainer>
            </motion.div>
          ))}
        </SectionSlider>
      </Section>
    </>
  );
};
