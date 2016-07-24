block('p-vcard-form').replace()(function() {
    return  {
        block: 'b-page',
        title: 'Форма',
        mix: { block: 'p-vcard-form' },
        content: [
            { block: 'b-page-title', content: 'Виртуальная визитка' },
            { block: 'b-form' }
        ]   
    }
});