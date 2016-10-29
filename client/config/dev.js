'use strict';

/**
 * Devconfig
 */
module.exports = function(_path) {
    console.log("33");
    return {
        context: _path,
        debug: true,
        devtool: 'eval',
        devServer: {
            contentBase: './build',
            info: true,
            hot: false,
            inline: true
        }
    }
};