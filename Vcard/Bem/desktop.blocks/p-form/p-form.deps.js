({
    mustDeps: [
        { block: 'page' },
        { block: 'vcard-form' },
        {
            block: 'radio-group',
            mods: { theme: 'islands', size: 'm' }
        },
        {
            block: 'button',
            mods: { theme: 'islands', size: 'm' }
        },
        {
            block: 'input',
            mods: { 'has-clear': true, theme: 'islands', size: 'm' }
        },
        { block: 'i-bem', elem: 'dom', mods: { init: 'auto' } }
    ]
})