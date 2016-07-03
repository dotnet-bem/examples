block('p-form').replace()(function () {
    var filds = {
        'name': 'ФИО',
        'position': 'Должность',
        'address.country': 'Страна',
        'address.city': 'Город',
        'address.zip': 'Индекс',
        'address.street-address': 'Улица',
        'company.name': 'Кампания',
        'company.site': 'Сайт',
        'contact.work': 'Рабочий телефон',
        'contact.email': 'email',
        'contact.github': '',
        'contact.twitter': '',
        'contact.skype': ''
    };

    var getName = function (name) {
        return name.toLowerCase().replace(/\./g, '-');
    }

    var getPlaceholder = function (placeholder) {
        placeholder = placeholder
            .replace(/-/g, ' ')
            .replace(/\./g, ' ')

        placeholder = placeholder.charAt(0).toUpperCase() + placeholder.slice(1);

        return placeholder;
    }

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
            { elem: 'css', url: '/Bem/desktop.bundles/default/default.css' }
        ],
        scripts: [{ elem: 'js', url: '/Bem/desktop.bundles/default/default.js' }],
        mix: { block: 'p-form' },
        content: [
            {
                block: 'vcard-form',
                mods: { tab: 'ru' },
                js: true,
                tag: 'form',
                attrs: { action: '/', method: 'post' },
                content: [
                    {
                        block: 'radio-group',
                        mods: { theme: 'islands', size: 'm' },
                        mix: { block: 'vcard-form', elem: 'lang' },
                        name: 'lang',
                        val: 'ru',
                        options: [
                            { val: 'ru', text: 'На родном языке' },
                            { val: 'en', text: 'На английском' }
                        ]
                    },
                    {
                        elem: 'ru',
                        content: Object.keys(filds).map(function (fildName) {
                            return {
                                block: 'input',
                                mods: { 'has-clear': true },
                                mix: {
                                    block: 'vcard-form',
                                    elem: 'input',
                                    elemMods: { name: getName(fildName) }
                                },
                                val: '',
                                name: fildName,
                                placeholder: getPlaceholder(filds[fildName] || fildName)
                            }
                        })
                    },
                    {
                        elem: 'en',
                        content: Object.keys(filds).map(function (fildName) {
                            return {
                                block: 'input',
                                mods: { 'has-clear': true },
                                mix: {
                                    block: 'vcard-form',
                                    elem: 'input',
                                    elemMods: { name: getName(fildName) }
                                },
                                val: '',
                                name: fildName,
                                placeholder: getPlaceholder(fildName)
                            }
                        })
                    },
                    {
                        block: 'button',
                        mods: { type: 'submit' },
                        text: 'Жмак'
                    }
                ]
            }
        ]
    };
});