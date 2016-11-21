﻿var levels = require('../levels'),
    enbBemTechs = require('enb-bem-techs'),
    techs = {
        fileProvider: require('enb/techs/file-provider'),
        fileMerge: require('enb/techs/file-merge'),
        stylus: require('enb-stylus/techs/stylus'),
        browserJs: require('enb-js/techs/browser-js'),
        bemhtml: require('enb-bemxjst/techs/bemhtml'),
        borschik: require('enb-borschik/techs/borschik'),
        // DEV ONLY ------------------------------------------------------------
        // bemjsonToHtml: require('enb-bemxjst/techs/bemjson-to-html'),
        // bemjsonToBemdecl: require('enb-bem-techs/').bemjsonToBemdecl
        // ---------------------------------------------------------------------
    };

module.exports = function (config) {
    var isProd = process.env.YENV === 'production';

    config.nodes('*.bundles/*', function (nodeConfig) {
        nodeConfig.addTechs([
            // essential
            [techs.fileProvider, { target: '?.bemdecl.js' }],

            // DEV ONLY --------------------------------------------------------
            // [techs.fileProvider, { target: '?.bemjson.js' }],
            // [techs.bemjsonToBemdecl],
            // -----------------------------------------------------------------

            [enbBemTechs.levels, { levels: levels }],
            [enbBemTechs.files],
            [enbBemTechs.deps],

             // css
            [techs.stylus, {
                target: '?.css',
                sourcemap: false,
                autoprefixer: {
                    browsers: ['ie >= 10', 'last 2 versions', 'opera 12.1', '> 2%']
                }
            }],

            // bemhtml
            [techs.bemhtml, { sourceSuffixes: ['bemhtml', 'bemhtml.js'] }],

            // DEV ONLY --------------------------------------------------------
            // [techs.bemjsonToHtml],
            // -----------------------------------------------------------------

            // js
            [techs.browserJs, { includeYM: true }],
            [techs.fileMerge, {
                target: '?.js',
                sources: ['?.browser.js', '?.bemhtml.js']
            }],

            // optimization
            [techs.borschik, { source: '?.js', target: '?.min.js', minify: isProd }],
            [techs.borschik, { source: '?.css', target: '?.min.css', minify: isProd }]

        ]);

        nodeConfig.addTargets([/*'?.html', */'?.bemhtml.js', '?.min.css', '?.min.js']);
    });
};
