import { nanoid } from "nanoid";

export const data = [
  {
    id: nanoid(),
    title: "Playstation-UI",
    description: "User Interface about app playstation game",
    image: "./assets/Image/playstationApp.png",
    link: "https://www.behance.net/gallery/142301207/UI-case-study-Portfolio-Website-%28Ui-design%29",
  },

  {
    id: nanoid(),
    title: "Portfolio-Website",
    description: "User Interface Casestudy about portfolio website",

    image: "./assets/Image/portfolio.png",
    link: "https://www.behance.net/gallery/139882539/Playstation-App-%28Ui-Design%29",
  },
];
export const sliderSettings = {
  // dots: true,
  arrows: false,
  slidesToShow: 2,
  focusOnselect: false,
  accessability: false,
  infinite: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },

    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};
