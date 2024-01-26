export const posts = [
    {
        id: '1',
        type: 'poll',
        content: `PROTOTURK'un paylaştığı videoları seviyor musunuz?
Bu anket ders esnasında sorulmuştur.`,
            poll: {
                voted: false,
                votes: 12,
                answers: [
                    {
                        id: 1,
                        text: 'Evet',
                        vote: 8
                    },
                    {
                        id: 2,
                        text: 'Hayır',
                        vote: 1
                    },
                    {
                        id: 3,
                        text: 'Yaaani',
                        vote: 3
                    }
                ],
            },
        account: {
            avatar: 'https://pbs.twimg.com/profile_images/1200814302820753410/AhAh3xlU_400x400.png',
            username: 'prototurkcom',
            fullName: './prototurk'
        },
        stats: {
            comments: 43535,
            repost: 3434,
            like: 96946,
            view: 903453
        }
    },
    {
        id: '2',
        type: 'photo',
        content: `Toplu günaydın, ben her sabah spora devam ama her gün post atmıyorum artık, max 4 günde bir atarım çünkü en fazla 4 foto paylaşılıyormuş 🤣`,
        photos: [
            'https://pbs.twimg.com/media/F7VBIvaW0AIZyiX?format=jpg&name=large',
            'https://pbs.twimg.com/media/F7VBIvZXEAAIpEM?format=jpg&name=large',
            'https://pbs.twimg.com/media/F7VBIvaW0AAyXEr?format=jpg&name=large',
            'https://pbs.twimg.com/media/F7VBIvaWAAAWUsx?format=jpg&name=large',
        ],
        account: {
            avatar: 'https://pbs.twimg.com/profile_images/1721055670932324352/MG7ym5tG_x96.jpg',
            username: 'tayfunerbilen',
            fullName: 'Tayfun Erbilen'
        },
        stats: {
            comments: 43535,
            repost: 3434,
            like: 96946,
            view: 903453
        }
    },
    {
        id: '3',
        type: 'photo',
        content: `Imagination Land!`,
        photos: [
            'https://pbs.twimg.com/media/F7ZIK8KWgAAP8pH?format=jpg&name=900x900'
        ],
        account: {
            avatar: 'https://pbs.twimg.com/profile_images/1683325380441128960/yRsRRjGO_400x400.jpg',
            username: 'elonmusk',
            fullName: 'Elon Musk',
            verified: true
        },
        stats: {
            comments: 6573535,
            repost: 343434,
            like: 366946,
            view: 23453453
        }
    },
    {
        id: '4',
        content: `Less than a week since OpenAI started rolling out ChatGPT vision.

And people have been busy executing god-like tasks.

35 truly mind-boggling examples:

(29th is my favorite)`,
        account: {
            avatar: 'https://pbs.twimg.com/profile_images/1696215555148046336/xCMn27ZY_400x400.jpg',
            username: 'sairahul1',
            fullName: 'Sai Rahul',
            verified: true
        },
        stats: {
            comments: 25,
            repost: 12,
            like: 99,
            view: 2341
        }
    },
    {
        id: '5',
        type: 'photo',
        content: `İstanbul'da Cumhuriyet'in 100. yılına özel, 100 gün boyunca Yerebatan Sarnıcı, Şerefiye Sarnıcı, Miniatürk ve Panorama 1453 Tarih Müzesi ücretsiz ziyaret edilebilecek.`,
        photos: [
            'https://pbs.twimg.com/media/F7bpqaKXkAAopDd?format=jpg&name=900x900',
            'https://pbs.twimg.com/media/F7bptMoXYAA7TpB?format=jpg&name=900x900',
        ],
        account: {
            avatar: 'https://pbs.twimg.com/profile_images/1707827931895017472/1-bUbTT3_400x400.jpg',
            username: 'Darkwebhaber',
            fullName: 'DarkWeb Haber'
        },
        stats: {
            comments: 234234,
            repost: 2324,
            like: 1134124,
            view: 111144
        }
    },
    {
        id: '6',
        type: 'photo',
        content: `OpenAI's latest DALL-E 3 model is officially available free to try on Bing.

The quality is insane, comparable to Midjourney.

This prompt is going viral- mimicking a creepy iPhone capture that looks insanely realistic.

Prompt in ALT tag + more examples in thread:`,
        photos: [
            'https://pbs.twimg.com/media/F7aKxHhaAAAnHlS?format=jpg&name=large',
            'https://pbs.twimg.com/media/F7bptn2XkAAuPFn?format=jpg&name=900x900',
            'https://pbs.twimg.com/media/F7bpua1WEAAwz7C?format=jpg&name=900x900'
        ],
        account: {
            avatar: 'https://pbs.twimg.com/profile_images/1711152452735774720/Cotttl-n_x96.jpg',
            username: 'rowancheung',
            fullName: 'Rowan Cheung',
            verified: true
        },
        stats: {
            comments: 99999,
            repost: 999999,
            like: 999999,
            view: 99999999
        }
    }
]