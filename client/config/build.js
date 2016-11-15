'use strict';
const path = require("path");

module.exports = function(_path) {
    console.log(_path);
    return {
        context: _path,
        debug: true,
        devtool: 'cheap-source-map',
        output: {
            publicPath: path.resolve('/')
        }
    }
};