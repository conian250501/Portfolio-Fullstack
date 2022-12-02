import { nanoid } from 'nanoid';

export const dataPage = [
    {
        id: nanoid(),
        title: 'Web',
        link: '/',
        className: 'active'
    },
    {
        id: nanoid(),
        title: 'Poster',
        link: '/poster',
        className: 'active'

    },
    {
        id: nanoid(),
        title: 'UI/UX',
        link: '/Ui',
        className: 'active'

    },
]