module.exports = {
    baseUrl: 'dev',
    bundles: 'Bem/test.bundles',
    levels: ['desktop.blocks'],
    enbArgs: ['--dir', 'Bem'],
    defaultTarget: '?.sandbox.html',
    targets: {
        '?.min.js': ['js', 'bemhtml.js'],
        '?.sandbox.js': ['sandbox.js'],
        '?.min.css': ['css']
    }
};
