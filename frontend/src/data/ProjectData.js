import { nanoid } from "nanoid";

export const data = [
  {
    id: nanoid(),
    title: "Pokemon-NFT",
    description:
      "App cung cấp thông tin chi tiết về các pokemon trên khắp thế giới",
    technicals: [
      {
        name: "ReactJS",
      },
      {
        name: "TypeScript",
      },

      {
        name: "Api",
      },
    ],
    image: "./assets/Image/pokemon-nft.png",
    linkCode: "https://github.com/conian250501/Pokemon-NFT",
    linkDemo: "https://pokemoncase-nft.vercel.app/",
  },

  {
    id: nanoid(),
    title: "Todolist",
    description:
      "App giúp cho người dùng có thể quản lý công việc hàng ngày và tăng hiệu suất làm việc cho người dùng hơn",
    technicals: [
      {
        name: "React JS",
      },
      {
        name: "SASS",
      },
      {
        name: "Redux",
      },
    ],
    image: "./assets/Image/Todolist.png",
    linkCode: "https://github.com/conian250501/TodoList-redux",
    linkDemo: "https://todolist-conian.vercel.app",
  },
  {
    id: nanoid(),
    title: "MoiveDigest",
    description: "Website cung cấp những bộ phim chiếu rạp hay",
    technicals: [
      {
        name: "HTML,CSS",
      },
      {
        name: "Javascript",
      },
      {
        name: "Api",
      },
    ],
    image: "./assets/Image/movie-app.png",
    linkCode: "https://github.com/conian250501/Movie-App",
    linkDemo: "https://conian250501.github.io/Movie-App/",
  },
];

export const sliderSettings = {
  // dots: true,
  arrows: false,
  slidesToShow: 3,
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
