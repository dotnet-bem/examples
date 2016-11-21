modules.define(
  'checkbox',
  ['i-bem__dom'],
  function (provide, BEMDOM) {

      provide(BEMDOM.decl(this.name, {

          _onChange: function () {
              this.__base.apply(this, arguments);
              this.emit('change', this.elem('control').prop('checked'));
          }

      }));

  });
