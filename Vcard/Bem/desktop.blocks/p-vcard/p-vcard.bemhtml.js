block('p-vcard').replace()(function () {
    var data = {};

    data.order = ['ru'];
    data.favicons = {
        ru: '//yastatic.net/morda-logo/i/favicon_islands.ico',
        en: '//yastatic.net/morda-logo/i/favicon_comtr.ico'
    };
    data.cards = {
        ru: this.ctx.data
    };

    return {
        block: 'page',
        title: 'VCard',
        favicon : '//bem.info/favicon.ico',
        head: [
            { elem: 'css', url: '/Bem/desktop.bundles/default/default.css' },
            { elem: 'js', url: '/Bem/desktop.bundles/default/default.js' }
        ],
        mix: { block: 'p-vcard' },
        content: {
            block: 'p-vcard',
            elem: 'content',
            content: {
                block: 'card',
                order: data.order,
                cards: data.cards,
                favicons: data.favicons
            }
        }
    };
});
