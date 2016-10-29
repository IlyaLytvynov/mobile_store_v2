"use strict";
const _ = require("lodash");

const _configs = {
    global: require(__dirname + "/config/global"),
    dev: require(__dirname + "/config/dev"),
    build: require(__dirname + "/config/build")
};

const _load = env => {
    if(!env) {
        throw 'Can\'t find local environment variable via process.env.NODE_ENV';
    }
    if(!_configs[env]) {
        throw 'Can\'t find environments see _config object';
    }
    var conf = _configs && _.merge(_configs[env](__dirname), _configs["global"](__dirname));
    return _configs["global"](__dirname);
};

/**
 * Export WebPack config
 * @type {[type]}
 */

module.exports = _load(process.env.NODE_ENV);