import React, { useRef } from "react";
import { BsArrowLeft, BsArrowRight, BsBehance } from "react-icons/bs";
import { GiNinjaStar } from "react-icons/gi";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { data, sliderSettings } from "../../../data/UiPageData.js";
import { Section, SectionName, SectionHeading } from "../../../GlobalStyles";

import {
  ButtonDemo,
  CarouselImg,
  SectionSlider,
  ImageWrapper,
  SliderHeading,
  SliderDescription,
  ButtonContainer,
  IconContainer,
  PageContainer,
  PageList,
  PageItem,
  Card,
  CardContent,
} from "./UiPageStyles.jsx";

const UiPage = ({ id }) => {
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
          padding="1.6rem 15%"
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
              <PageItem>
                <Link to="/">Web</Link>
              </PageItem>
              <PageItem>
                <Link to="/poster">Poster</Link>
              </PageItem>
              <PageItem className="active">
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
              key={index}
              className="img-container"
              transition={{
                duration: 0.2 * (index + 2),
              }}
              initial={{
                opacity: 0,
                y: "-100px",
              }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <ImageWrapper>
                <CarouselImg src={img.image} />
                <Card className="slider-content">
                  <CardContent>
                    <SliderHeading
                      className="SliderHeading"
                      color={"#000"}
                      fontSize="2.4rem"
                      marginBottom={"1.2rem"}
                    >
                      {img.title}
                    </SliderHeading>
                    <SliderDescription
                      className="SliderDescription"
                      color={"#000"}
                      fontSize="1.8rem"
                      width={"90%"}
                    >
                      {img.description}
                    </SliderDescription>
                  </CardContent>
                  <ButtonContainer>
                    <ButtonDemo
                      href={img.link}
                      width={"100%"}
                      padding={"0.6rem 2rem"}
                      color={"#fff"}
                      target="_blank"
                    >
                      <BsBehance style={{ fontSize: "3rem" }} />
                    </ButtonDemo>
                  </ButtonContainer>
                </Card>
              </ImageWrapper>
              {/* Button  */}
            </motion.div>
          ))}
        </SectionSlider>
      </Section>
    </>
  );
};

export default UiPage;
