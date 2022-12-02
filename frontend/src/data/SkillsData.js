import { nanoid } from 'nanoid';

export const data = [
    {
        id: nanoid(),
        title: 'ReactJS',
        description: 'Framework của Javascript để Xây dựng website, app một cách gọn gàng và dễ bảo trì hơn ',
        image: './assets/Image/react-logo.png'
    },
    {
        id: nanoid(),
        title: 'Sass/Bootstrap',
        description: 'Framework của CSS để xây dựng các style cho dự án đẹp và tinh tế hơn ',
        image: './assets/Image/bootstrap-logo.png'
    },
    {
        id: nanoid(),
        title: 'UI/UX design',
        description: 'Các phầm mềm hỗ trợ cho việc design 2d và ui/ux desgin cho dự án',
        image: './assets/Image/graphic-logo.png'
    },
    {
        id: nanoid(),
        title: 'Motion Graphic',
        description: 'Phần mềm tạo các chuyển động animation và intro motion cho Dự án',
        image: './assets/Image/AE-logo.png'
    }

]

export const sliderSettings = {
    // dots: true,
    arrows: false,
    slidesToShow: 4,
    focusOnselect: false,
    accessability: false,
    // infinite: false,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
            },
        },

        {
            breakpoint: 960,
            settings: {
                slidesToShow: 2,
            },
        },
        {
            breakpoint: 425,
            settings: {
                slidesToShow: 1,
            },
        }

    ],
}