block('todo-item')(

  tag()('li'),

  js()(true),

  content()(function () {
      return [
        {
            block: 'checkbox',
            mods: { theme: 'islands', size: 'm', checked: this.mods.done },
            mix: { block: this.block, elem: 'trigger' },
            text: applyNext()
        },
        {
            block: 'button',
            mods: { theme: 'islands', size: 's' },
            mix: { block: this.block, elem: 'delete' },
            text: 'Удалить'
        }
      ];
  })
);
