block('p-vcard').replace()(function () {

    return {
        block: 'page',
        title: 'VCard',
        head: [
            { elem: 'meta', attrs: { name: 'description', content: '' } },
            { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
            { elem: 'css', url: 'default.min.css' }
        ],
        scripts: [{ elem: 'js', url: 'default.min.js' }],
        mix: { block: 'p-vcard' },
        content: 'Hello world!'
    };
});