import { Article as ArticleProps } from '@common/types';

export const articlePropsValue: ArticleProps = {
    id: 'asdfasf',
    author: {
        id: '123',
        subscriptions: [],
        nickname: 'Yohan', 
        fullName: 'Super Yohan', 
        rating: 0,
        registrationDate: new Date(),
        publications: [],
        links: ['https://google.com', 'https://mathir.com']
    },
    hub: {
        id: '123',
        name: 'Hub-hub-dap-dap',
        creationDate: new Date(),
        subscribers: [],
        members: [],
        publications: [],
        rating: 0,
        tags: [],
        about: 'asdfa',
        links: ['https://google.com', 'https://somehing.com']
    },
    category: 'administration',
    previewContent: '<p>Let all these things just sort of happen. Learn when to stop. Be careful. You can always add more </p>',
    content:"<p>Let all these things just sort of happen. Learn when to stop. Be careful. You can always add more - but you can't take it away. There isn't a rule. You just practice and find out which way works best for you. Use what you see, don't plan it.</p<p>Be brave. If you don't think every day is a good day - try missing a few. You'll see. It takes dark in order to show light. Nothing wrong with washing your brush. That's a son of a gun of a cloud. Let's build an almighty mountain.</p><p>You create the dream - then you bring it into your world. Don't be bashful drop me a line. This is the way you take out your flustrations. Everyone is going to see things differently - and that's the way it should be. Let your heart be your guide.</p><p>And maybe a little bush lives there. I thought today we would do a happy little picture. Every highlight needs it's own personal shadow. Just make little strokes like that. We artists are a different breed of people. We're a happy bunch. Play with the angles.</p><p>Use your imagination, let it go. Fluff that up. A fan brush can be your best friend. Isn't that fantastic that you can make whole mountains in minutes? It's amazing what you can do with a little love in your heart. If it's not what you want - stop and change it. Don't just keep going and expect it will get better.</p><p>No pressure. Just relax and watch it happen. The least little bit can do so much. You can spend all day playing with mountains. We want to use a lot pressure while using no pressure at all. Trees live in your fan brush, but you have to scare them out. It's important to me that you're happy.</p><p>Isn't it great to do something you can't fail at? Let your heart take you to wherever you want to be. We'll make some happy little bushes here. We'll play with clouds today. Just take out whatever you don't want. It'll change your entire perspective. Let's put some happy little clouds in our world.</p>",
    rating: 0,
    status: 'published',
    title: 'Like a powerful article!',
    tags: ['computer', 'node.js', 'nest.js'],
    publicationDate: new Date(),
    viewsNumber: 123,
    comments: [
        {   
            author: {
                nickname: 'adsf',
                fullName: 'adsfadfasdf'
            }, 
            text: 'asdfasdf', 
            creationDate: new Date(), 
            rating: 12
        },
        {   
            author: {
                nickname: 'adsf'
            },
            text: 'asdfasdf', 
            creationDate: new Date(), 
            rating: -3
        },
        {   
            author: {
                nickname: 'adsf'
            }, 
            text: 'asdfasdf', 
            creationDate: new Date(), 
            rating: 0
        }
    ]
}
