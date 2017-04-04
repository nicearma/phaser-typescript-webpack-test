var path = require('path');
var phaserModule = path.join(__dirname, '/node_modules/phaser/');
var pixi = path.join(phaserModule, 'build/custom/pixi.js');
var p2 = path.join(phaserModule, 'build/custom/p2.js');

module.exports = {
    entry: './src/app.ts',
    output: {
        filename: './src/bundle.js'
    },
    resolve: {
        modules: [
            'node_modules'
        ],
        alias: {
            'pixi.js': pixi,
            'p2': p2,
        },
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: ['.ts', '.tsx', '.js'] // note if using webpack 1 you'd also need a '' in the array as well
    },
    module: {
        loaders: [ // loaders will work with webpack 1 or 2; but will be renamed "rules" in future
            // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
            {test: /\.ts$/, loader: 'ts-loader'},
            {test: /pixi.js/, loader: "script-loader"},
            {test: /p2.js/, loader: "script-loader"},
        ]
    }
};
