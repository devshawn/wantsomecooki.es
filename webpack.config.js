var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './assets/entry.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader') },
            { test: /\.pug$/, loader: 'pug-loader' },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    'file?hash=sha512&digest=hex&name=[hash].[ext]',
                    'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
                ]
            }
        ]
    },
    plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'templates/main.pug',
      title: 'Want some cookies?'
    }),
    new ExtractTextPlugin('styles.css'),
    new CopyWebpackPlugin([
      { from: './assets/sounds', to: 'sounds'}
    ])
  ]
};
