import React, { useRef } from "react";
import { data } from "../../../data/PosterData";
import { GiNinjaStar, Gi3DGlasses } from "react-icons/gi";
import { GrMore } from "react-icons/gr";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { Section, SectionName, SectionHeading } from "../../../GlobalStyles";

import {
  SectionImage,
  ImageWrapper,
  CarouselImg,
  PageContainer,
  PageList,
  PageItem,
  LoadMoreContent,
  PosterLoadMore,
} from "./PosterPageStyles";

const PosterPage = ({ id }) => {
  return (
    <>
      <Section
        id={id}
        width={"1440px"}
        maxWidth={"100%"}
        marginTop={"12rem"}
        margin={"0 auto"}
        paddingBottom={"3rem"}
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
        <PageContainer>
          <PageList>
            <PageItem>
              <Link to="/">Web</Link>
            </PageItem>
            <PageItem className="active">
              <Link to="/poster">Poster</Link>
            </PageItem>
            <PageItem>
              <Link to="/Ui">Ui/Ux</Link>
            </PageItem>
          </PageList>
        </PageContainer>

        {/* Carousel */}
        <SectionImage>
          <ImageWrapper className="image__wrapper">
            {data.map((img, index) => (
              <motion.div
                key={index}
                className={img.className}
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
                <Link to={`/poster/${img.id}`}>
                  <CarouselImg className={index} src={img.image} />
                </Link>
              </motion.div>
            ))}
          </ImageWrapper>
        </SectionImage>
        {/* <Link to="/posterListing">
          <PosterLoadMore>
            <LoadMoreContent>
              <Gi3DGlasses
                className="load-more"
                //   style={{ fontSize: "3.2rem", color: "white" }}
              />
            </LoadMoreContent>
          </PosterLoadMore>
        </Link> */}
      </Section>
    </>
  );
};

export default PosterPage;
