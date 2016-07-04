modules.define('vcard-form', ['i-bem__dom', 'control'], function (provide, BEMDOM, Control) {

    provide(BEMDOM.decl({ block: this.name, baseBlock: Control }, {

        onSetMod: {
            'js': {
                'inited': function () {
                    this.toggleInputs();
                }
            }
        },

        getLang: function() {
            return (this._langRadioGroup || (this._langRadioGroup = this.findBlockInside('lang', 'radio-group'))).getVal();
        },

        toggleInputs: function () {
            this
                .findBlocksInside(this.elem(this.getLang() === 'ru' ? 'en' : 'ru'), 'input')
                .map(function (input) {
                    input.elem('control').prop('disabled', true);
                });

            this
                .findBlocksInside(this.elem(this.getLang()), 'input')
                .map(function (input) {
                    input.elem('control').prop('disabled', false);
                });

            return this;
        }

    }, {
        
        live: function () {
            this.liveInitOnBlockInsideEvent('change', 'radio-group', function (e, data) {
                this
                    .toggleInputs()
                    .setMod('tab', this.getLang());
            }, this)
        }

    }));

});
