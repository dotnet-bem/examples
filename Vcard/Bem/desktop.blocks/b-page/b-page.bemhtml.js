block('b-page')(

    elem('title').tag()('h1'),

    replace()(function () {
        return {
            block: 'page',
            title: this.ctx.title,
            head: [
                { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
                { elem: 'css', url: '/Bem/desktop.bundles/default/default.css' }
            ],
            scripts: [{ elem: 'js', url: '/Bem/desktop.bundles/default/default.js' }],
            mix: [].concat({ block: 'b-page' }).concat(this.ctx.mix),
            content: [
                this.ctx.title && {
                    block: 'b-page',
                    elem: 'title',
                    content: this.ctx.title
                },
                this.ctx.content
            ]
        };
    })
);