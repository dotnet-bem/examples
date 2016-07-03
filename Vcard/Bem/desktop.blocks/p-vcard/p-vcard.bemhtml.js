block('p-vcard').replace()(function () {
    var data = {};

    data.order = [];
    data.favicond = {
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
        head: [
            { elem: 'meta', attrs: { name: 'description', content: '' } },
            { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
            { elem: 'css', url: '/Bem/desktop.bundles/default/default.css' }
        ],
        scripts: [{ elem: 'js', url: '/Bem/desktop.bundles/default/default.js' }],
        mix: { block: 'p-vcard' },
        content: {
            block: 'card',
            order: data.order,
            cards: data.cards,
            favicons: data.favicons
        }
    };
});