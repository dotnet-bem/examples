module.exports = {
    // любая нужная информация для размещения блока в песочнице
    bemjson: {
        block: 'example',
        githubUrl: 'https://yandex.ru',
        token: 'xxx'
    },

    // действия, которые нужно выполнить в начале
    init: function(container) {
        var bemjson = this.bemjson;

        modules.require(['BEMHTML', 'i-bem__dom', 'jquery'], function(bemhtml, bemdom, $){
            var domNode = $(bemhtml.apply(bemjson)).appendTo('#sandbox-container');
            bemdom.init(domNode);
        })
    }
};
