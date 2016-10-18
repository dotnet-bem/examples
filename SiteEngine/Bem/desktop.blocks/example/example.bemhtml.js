block('example')(
    content()(function() {
        return [
            {
                elem: 'title',
                content: this.ctx.token || '-'
            },
            {
                elem: 'body',
                content: 'Lorem ipsum dolor sit amet, mea nisl antiopam id, explicari maiestatis has no.'
            },
            {
                elem: 'test-controls',
                content: [
                    {
                        block: 'link',
                        mods: { theme: 'islands', size: 'm' },
                        url: this.ctx.githubUrl,
                        content: 'login'
                    },
                    {
                        block: 'input',
                        mods: { theme: 'islands', size: 'm' }
                    }
                ]
            }
        ];
    }),

    elem('title').tag()('h1'),

    elem('body').tag()('p')
);
