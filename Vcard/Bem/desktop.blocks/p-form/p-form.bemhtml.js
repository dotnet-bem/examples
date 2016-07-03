block('p-form').replace()(function () {
    var filds = {
            'name': 'ФИО',
            'position': 'Должность',
            'country': 'Страна', 
            'city': 'Город', 
            'zip-code': 'Индекс',
            'street': 'Улица',
            'company-name': 'Кампания', 
            'site': 'Сайт',
            'contact-work': 'Рабочий телефон',
            'contact-email': 'email', 
            'github': '', 
            'twitter': '', 
            'skype': ''
        };

/*
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

    */

    return {
        block: 'page',
        title: 'VCardForm',
        head: [
            { elem: 'meta', attrs: { name: 'description', content: '' } },
            { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
            { elem: 'css', url: 'default.min.css' }
        ],
        //scripts: [{ elem: 'js', url: '/Bem/desktop.bundles/default/default.css' }],
        mix: { block: 'p-vcard' },
        content: [
            {
                block: 'radio-group',
                mods: { theme: 'islands', size: 'm' },
                name: 'lang',
                val: 'ru',
                options: [
                    { val: 'ru', text: 'ru' },
                    { val: 'en', text: 'en' }
                ]
            },
            {
                block: 'vcard-form',
                mods: { tab: 'ru' },
                content: [
                    {
                        elem: 'ru',
                        content: Object.keys(filds).map(function (fildName) {
                            return {
                                block: 'input',
                                mods: { 'has-clear': true },
                                mix: {
                                    block: 'vcard-form',
                                    elem: 'input',
                                    mods: { name: fildName }
                                },
                                val: '',
                                name: fildName,
                                placeholder: filds[fildName] || fildName
                            }
                        })
                    },
                    {
                        elem: 'en',
                        content: Object.keys(filds).map(function (fildName) {
                            var placeholder = fildName.replace(/-/g, ' ');

                            placeholder = placeholder.charAt(0).toUpperCase() + placeholder.slice(1);

                            return {
                                block: 'input',
                                mods: { 'has-clear': true },
                                mix: {
                                    block: 'vcard-form',
                                    elem: 'input',
                                    mods: { name: fildName }
                                },
                                val: '',
                                name: fildName,
                                placeholder: placeholder
                            }
                        })
                    }
                ]
            }
        ]
    };
});