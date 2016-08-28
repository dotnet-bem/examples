block('b-vcard')(
    content()(function() {
        return [
            {
                elem: 'logo'
            },
            {
                elem: 'info',
                content: [
                    {
                        elem: 'title',
                        content: [
                            { elem: 'name', content: 'Ivanov Ivan' },
                            { elem: 'position', content: 'Frontend developer' }
                        ]   
                    },
                    {
                        elem: 'contact',
                        content: [
                            {
                                elem: 'line',
                                label: 'Тел.',
                                content: '+7 (495) 126-12-03'
                            },
                            {
                                elem: 'line',
                                label: 'Моб.',
                                content: '+7 962 126-96-72'
                            },
                            {
                                elem: 'gap'
                            },
                            {
                                elem: 'line',
                                url: 'mailto:dima117a@yandex-team.ru',
                                content: 'dima117a@yandex-team.ru'
                            },
                            {
                                elem: 'gap'
                            },
                            {
                                elem: 'line',
                                label: 'Skype',
                                url: 'skype:dima117a?chat',
                                content: 'dima117a'
                            },
                            {
                                elem: 'line',
                                url: 'https://github.com/dima117',
                                content: 'github.com/dima117'
                            },
                            {
                                elem: 'line',
                                url: 'https://twitter.com/dima117',
                                content: 'twitter.com/dima117'
                            }
                        ]
                    }
                ]
            }
        ];
    }),

    elem('name').tag()('h1'),

    elem('line').content()(function() {
        return [
            this.ctx.label && this.ctx.label + ':&nbsp;',
            this.ctx.url
                ? {
                    block : 'link',
                    mods : { theme : 'islands', size : 'm' },
                    url : this.ctx.url,
                    content : this.ctx.content
                }
                : this.ctx.content
        ];
    })
);