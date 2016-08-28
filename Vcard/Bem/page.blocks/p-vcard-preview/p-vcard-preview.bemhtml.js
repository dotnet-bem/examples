block('p-vcard-preview').replace()(function () {
    return {
        block: 'b-page',
        title: 'Просмотр',
        mix: { block: 'p-vcard-preview' },
        content: [
            { block: 'b-vcard', vcard: this.ctx.vcard }
        ]
    }
});