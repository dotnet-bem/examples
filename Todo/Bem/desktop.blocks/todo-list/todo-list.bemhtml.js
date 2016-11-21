block('todo-list')(

  tag()('ul'),

  content()(function () {
      return this.ctx.items.map(function(item) {
          return {
              block: 'todo-item',
              js: { id: item.id, delete: item.urlDelete, state: item.urlSetState },
              mods: { done: item.done },
              content: item.text
          };
      });
  })
)
