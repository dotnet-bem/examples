block('p-vcard-form')(
    
    replace()(function () {
        return  {
            block: 'b-page',
            title: 'Форма',
            mix: { block: 'p-vcard-form' },
            content: [
                { block: 'p-vcard-form', elem: 'title', content: 'Виртуальная визитка' },
                { block: 'b-form' }
            ]   
        }
    }),

    elem('title').tag()('h1')    
);
