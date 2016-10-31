'use strict';

module.exports = function(_path) {
    return {
        context: _path,
        debug: true,
        devtool: 'source-map',
        devServer: {
            contentBase: './build',
            info: false,
            hot: false,
            inline: true,
            historyApiFallback: true
        }
    }
};