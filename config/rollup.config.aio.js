var nodeResolve = require('rollup-plugin-node-resolve');
var common = require('./rollup.js');
module.exports = {
    input: 'src/index.js',
    output: {
        file: 'dist/index.aio.js',
        format: 'umd',
        banner: common.banner,
        name: 'clone',
    },
    plugins: [
        nodeResolve({
            main: true,
            extensions: ['.js'],
        }),
    ],
};