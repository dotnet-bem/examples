block('todo')(

  tag()('main'),

  js()(true),

  content()(function () {
      return [
        {
            elem: 'form',
            content: [
              {
                  block: 'input',
                  mods: { theme: 'islands', size: 'm' },
                  mix: { block: this.block, elem: 'text' }
              },
              '&nbsp;',
              {
                  block: 'button',
                  mods: { theme: 'islands', view: 'action', size: 'm' },
                  mix: { block: this.block, elem: 'add' },
                  text: 'Добавить'
              }
            ]
        },
        {
            block: 'todo-list',
            items: this.ctx.items
        }
      ];
  }),

  elem('list').tag()('ul'),

  elem('item').tag()('li')
);
