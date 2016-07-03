﻿block('p-vcard').replace()(function () {
    var data = {};

    data.order = ['ru', 'en'];
    data.favicons = {
        ru: '//yastatic.net/morda-logo/i/favicon_islands.ico',
        en: '//yastatic.net/morda-logo/i/favicon_comtr.ico'
    };
    data.cards = {
        ru: {
            lang: 'ru',
            name: 'Иван Иванов',
            position: 'Разработчик интерфейсов',
            address: {
                country: 'Россия',
                city: 'Москва',
                zip: '119021',
                'street-address': 'ул. Льва Толстого, д. 16'
            },
            company: {
                name: 'Яндекс',
                site: 'https://yandex.ru'
            },
            contact: {
                work: '+7 (495) 739-70-00',
                workExt: '0000',
                cell: '+7 (555) 123-45-66',
                email: 'ivanivanovich@yandex-team.ru',
                site: 'https://ivanivanovich.ru',
                github: 'ivanivanovich',
                twitter: 'ivanivanovich',
                skype: 'ivanivanovich'
            }
        },
        en: {
            lang: 'en',
            name: 'Ivan Ivanov',
            position: 'UI Developer',
            address: {
                country: 'Russia',
                city: 'Moscow',
                zip: '119021',
                'street-address': '16, Leo Tolstoy St.'
            },
            company: {
                name: 'Yandex',
                site: 'https://yandex.com'
            },
            contact: {
                work: '+7 (495) 739-70-00',
                workExt: '000',
                cell: '+7 (555) 123-45-67',
                email: 'ivanivanovich@yandex-team.ru',
                site: 'https://ivanivanovich.ru/#en',
                skype: 'ivanivanovich',
                github: 'ivanivanovich',
                twitter: 'ivanivanovich'
            }
        }
    };

    return {
        block: 'page',
        title: 'VCard',
        favicon : '//bem.info/favicon.ico',
        head: [
            { elem: 'css', url: 'default.css' },
            { elem: 'js', url: 'default.js' }
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
