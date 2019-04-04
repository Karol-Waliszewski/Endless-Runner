const path = require('path');

module.exports = {
    entry: {
        'bundle.js': './src/index.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name]'
    },
    watch: true,
}