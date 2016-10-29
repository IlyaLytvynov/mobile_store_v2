'use strict';

/**
 * Production config
 */
module.exports = function(_path) {
    console.log(_path);
    return {
        context: _path,
        debug: true,
        devtool: 'cheap-source-map',
        output: {
            publicPath: '/'
        }
    }
}