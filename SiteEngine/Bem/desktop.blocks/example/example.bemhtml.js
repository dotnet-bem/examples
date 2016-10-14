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
                block: 'link',
                mods: { theme: 'islands', size: 'm' },
                url: this.ctx.githubUrl,
                content: 'login'
            }
        ];
    }),

    elem('title').tag()('h1'),

    elem('body').tag()('p')
);