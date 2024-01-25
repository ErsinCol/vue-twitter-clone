import {defineAsyncComponent} from "vue";

export const trends = [
    {
        id: 1,
        title: 'Sports',
        topic: {
            type: 'query',
            value: 'ALLAH BELANIZI VERSİN',
        },
        postCount: 11000,
    },
    {
        id: 2,
        title: 'Trending in Turkey',
        topic: {
            type: 'tag',
            value: 'EpsteinClientList',
        },
        postCount: 53700,
    },
    {
        id: 3,
        title: 'Sports',
        topic: {
            type: 'query',
            value: 'Penaltı',
        },
        postCount: 67200,
    },
    {
        id: 4,
        title: 'Sports',
        topic: {
            type: 'query',
            value: 'Zorbay Küçük',
        },
        postCount: 19100,
    },
    {
        id: 5,
        title: 'Sports',
        topic: {
            type: 'query',
            value: 'Okan',
        },
        postCount: 22400,
    },
    {
        id: 6,
        title: 'Business',
        topic: {
            type: 'query',
            value: 'Dolar 30',
        },
        postCount: 20400,
    },
    {
        id: 7,
        title: 'Trending in Turkey',
        topic: {
            type: 'tag',
            value: 'RegaipKandili',
        },
        postCount: 5109,
    },
    {
        id: 8,
        title: 'Business',
        topic: {
            type: 'tag',
            value: 'astor',
        },
        postCount: 4967,
    },
    {
        id: 9,
        title: 'Sports',
        topic: {
            type: 'tag',
            value: 'SVSvsGS',
        },
        postCount: 34300,
    },
    {
        id: 10,
        title: 'Sports',
        topic: {
            type: 'query',
            value: 'ZAHA',
        },
        postCount: 14100,
    },
]

export const recommendedUsers = [
    {
        id: '1',
        username: 'PesindeyizApp',
        fullname: 'Peşindeyiz',
        avatar: 'https://pbs.twimg.com/profile_images/1565461691135148033/hLUp5RH4_x96.jpg',
        verified: true
    },
    {
        id: '2',
        username: 'SportsCenter',
        fullname: 'Sports Center',
        avatar: 'https://pbs.twimg.com/profile_images/1604943357750419465/wk5BAmKG_x96.png',
        verified: false,
    },
    {
        id: '3',
        username: 'lemarcasports',
        fullname: 'Le Marca Sports',
        avatar: 'https://pbs.twimg.com/profile_images/1736655442942550016/msM14oDk_x96.jpg',
        verified: true
    }
]

export const colors = [
    {
        primary: '#1d9bf0',
        secondary: '#8ecdf8'
    },
    {
        primary: '#ffd400',
        secondary: '#ffea80'
    },
    {
        primary: '#f91880',
        secondary: '#fc8cc0'
    },
    {
        primary: '#7856ff',
        secondary: '#bcabff'
    },
    {
        primary: '#ff7a00',
        secondary: '#ffbd80'
    },
    {
        primary: '#00ba7c',
        secondary: '#80ddbe'
    }
]

export const fontSizes = [14,15,16,18,19]