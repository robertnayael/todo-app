const webpack = require('webpack')
const merge = require('webpack-merge')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const common = require('./webpack.common.js')

const publicPath = '/todo-list/'

module.exports = merge(common, {
    output: {
        publicPath,
    },
    plugins: [
        new UglifyJSPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production'),
                'PUBLIC_PATH': JSON.stringify(publicPath)
            }
        })
    ]
})