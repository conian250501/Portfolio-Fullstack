import { Box } from "@mui/system";
import { nanoid } from "@reduxjs/toolkit";
import Slider from "react-slick";
import {
  NextArrow,
  PrevArrow,
} from "~/components/ArrowSlickCustom/ArrowSlickCustom";
import { Content, SlideItem } from "./carouselStyles";

type Props = {};

const Carousels = (props: Props) => {
  const images = [
    {
      id: nanoid(),
      title: "Curry-1",
      link: "/assets/images/banner-3.jpg",
    },
    {
      id: nanoid(),
      title: "Curry-2",
      link: "/assets/images/banner-1.jpg",
    },
    {
      id: nanoid(),
      title: "Curry-3",
      link: "/assets/images/banner-2.jpg",
    },
    {
      id: nanoid(),
      title: "Curry-4",
      link: "/assets/images/banner-4.jpg",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <Slider {...settings}>
      {images.map((image) => (
        <SlideItem key={image.id}>
          <Box component="div" className="background_hover"></Box>
          <img src={image.link} alt="" />
          <Content className="content">{image.title}</Content>
        </SlideItem>
      ))}
    </Slider>
  );
};

export default Carousels;
