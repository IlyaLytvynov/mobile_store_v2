const path = require('path');
const webpack = require("webpack");
const HtmlPlugin    = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const TextPlugin  = require('extract-text-webpack-plugin');

module.exports = _path => {
    //define local variables
    var dependencies = Object.keys(require(_path + '/package').dependencies);
    var rootAssetPath = _path + 'app';

    console.log(_path);
    console.log(dependencies);
    return {
        //enter point
        entry: {
            application: _path + "/app/app.js",
            vendors: dependencies
        },

        output: {
            path: path.join(_path, "build", "assets"),
            filename: path.join("js", "[name].bundle.[chunkhash].js"),
            chunkFilename: "[id].bundle.[chunkhash].js",
            publicPath: "/"
        },

        resolve: {
            extensions: ['', '.js'],
            modulesDirectories: ['node_modules']
        },

        module: {
            loaders: [
                { loader: 'babel',
                    test: /\.js$/,
                    query: {
                        presets: ['es2015'],
                        ignore: ['node_modules']
                    },
                },
                {
                    test: /\.styl$/,
                    loader: TextPlugin.extract('style-loader', 'css-loader!autoprefixer-loader?browsers=last 5 version!stylus-loader')
                }
            ]
        },

        plugins: [
            // new webpack.optimize.CommonsChunkPlugin('vendors', 'assets/js/vendors.[hash].js'),
            // Этот файл будет являться "корневым" index.html
            // new Manifest(path.join(_path + '/config', 'manifest.json'), {
            //     rootAssetPath: rootAssetPath,
            //     ignorePaths: ['.DS_Store']
            // }),
            new CleanWebpackPlugin(["build"], {
                root: _path,
                verbose: true,
                dry: false
            }),
            new webpack.NoErrorsPlugin(),
            new HtmlPlugin({
                title: 'Test',
                chunks: ['application', 'vendors'],
                filename: 'index.html',
                template: path.join(_path, 'app', 'index.ejs'),
                inject: true
            })
        ]
    }
};