block('b-vcard')(
    content()(function () {
        var vcard = this.ctx.vcard || {},
            contact = vcard.contact || {};

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
                            vcard.name && { elem: 'name', content: vcard.name },
                            vcard.position && { elem: 'position', content: vcard.position }
                        ]   
                    },
                    {
                        elem: 'contact',
                        content: [
                            contact.phone && {
                                elem: 'line',
                                label: 'Тел.',
                                content: contact.phone
                            },
                            contact.cell && {
                                elem: 'line',
                                label: 'Моб.',
                                content: contact.cell
                            },
                            (contact.phone || contact.cell) && {
                                elem: 'gap'
                            },
                            contact.email && {
                                elem: 'line',
                                url: 'mailto:' + contact.email,
                                content: contact.email
                            },
                            contact.email && {
                                elem: 'gap'
                            },
                            contact.skype && {
                                elem: 'line',
                                label: 'Skype',
                                url: 'skype:' + contact.skype + '?chat',
                                content: contact.skype
                            },
                            contact.github && {
                                elem: 'line',
                                url: 'https://github.com/' + contact.github,
                                content: 'github.com/' + contact.github
                            },
                            contact.twitter && {
                                elem: 'line',
                                url: 'https://twitter.com/' + contact.twitter,
                                content: 'twitter.com/' + contact.twitter
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