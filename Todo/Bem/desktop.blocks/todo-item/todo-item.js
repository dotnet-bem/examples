modules.define(
    'todo-item',
    ['i-bem__dom', 'control', 'jquery', 'dom'],
    function (provide, BEMDOM, Control, $, dom) {

        provide(BEMDOM.decl({ block: this.name, baseBlock: Control }, {

            onSetMod: {
                'js': {
                    'inited': function () {
                        this._trigger = this.findBlockOn('trigger', 'checkbox');
                        this._delete = this.findBlockOn('delete', 'button');

                        this._trigger.on('change', function (_, state) {
                            this._toggleItem(state);
                        }, this);

                        this._delete.on('click', function () {
                            this._deleteItem();
                        }, this);
                    }
                },
            },

            _toggleItem: function (state) {
                var _this = this;
                var xhr = $.ajax({
                    url: _this.params.state,
                    method: 'GET',
                    data: { done: state }
                });

                xhr.success(function () {
                    _this.setMod('done', state);
                });
            },

            _deleteItem: function () {
                var _this = this;
                var xhr = $.ajax({
                    url: _this.params.delete,
                    method: 'GET'
                });

                xhr.success(function () {
                    _this._delete.un('click');
                    _this._trigger.un('change');
                    BEMDOM.destruct(_this.domElem);
                });
            }

        }));

    });
