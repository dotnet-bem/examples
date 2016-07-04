block('p-form').replace()(function () {
    var filds = {
        'name': 'ФИО',
        'position': 'Должность',
        'address.country': 'Страна',
        'address.city': 'Город',
        'address.zip': 'Индекс',
        'address.streetAddress': 'Улица',
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
//                    {
//                        block: 'radio-group',
//                        mods: { theme: 'islands', size: 'm' },
//                        mix: { block: 'vcard-form', elem: 'lang' },
//                        name: 'lang',
//                        val: 'ru',
//                        options: [
//                            { val: 'ru', text: 'На родном языке' },
//                            { val: 'en', text: 'На английском' }
//                        ]
//                    },
                    {
                        elem: 'hidden-input',
                        attrs: {
                            type: 'hidden',
                            name : 'lang',
                            value : 'ru',
                        }
                    },
                    {
                        elem: 'ru',
                        content: Object.keys(filds).map(function (fildName) {
                            return {
                                block: 'input',
                                mods: { 'has-clear': true, theme: 'islands', size: 'm' },
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
                                mods: { 'has-clear': true, theme: 'islands', size: 'm' },
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
                        mods: { type: 'submit', theme: 'islands', size: 'm' },
                        text: 'Жмак'
                    }
                ]
            }
        ]
    };
});