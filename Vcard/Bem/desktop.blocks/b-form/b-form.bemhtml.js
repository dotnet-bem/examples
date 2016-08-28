block('b-form')(
    tag()('form'),

    attrs()({ method: 'post' }),

    content()(function () {
        return [
            {
                elem: 'group',
                content: [
                    { elem: 'field', name: 'name', label: 'ФИО', value: 'Иванов Иван' },
                    { elem: 'field', name: 'position', label: 'Должность', value: 'Разработчик интерфейсов' }
                ]
            },
            {
                elem: 'group',
                content: [
                    { elem: 'field', name: 'contact.phone', label: 'Рабочий телефон' },
                    { elem: 'field', name: 'contact.cell', label: 'Мобильный телефон' },
                    { elem: 'field', name: 'contact.email', label: 'Email' },
                    { elem: 'field', name: 'contact.github', label: 'Github' },
                    { elem: 'field', name: 'contact.twitter', label: 'Twitter' },
                    { elem: 'field', name: 'contact.skype', label: 'Skype' }
                ]
            },
            {
                elem: 'actions',
                content: {
                    block: 'button',
                    mods: { type: 'submit', theme: 'islands', size: 'xl', view: 'action' },
                    text: 'Сохранить'
                }
            }
        ];
    }),

    elem('label')(
        tag()('label'),
        attrs()(function() { return { for: this.ctx.id };  })
    ),

    elem('field').content()(function () {
        var id = 'field.' + this.ctx.name;

        return [
            { elem: 'label', id: id, content: this.ctx.label },
            {
                elem: 'control',
                content: {
                    block: 'input',
                    mods: { 'has-clear': true, theme: 'islands', size: 'l', width: 'available' },
                    id: id,
                    name: this.ctx.name,
                    val: this.ctx.value
                }
            }
        ];
    })
);