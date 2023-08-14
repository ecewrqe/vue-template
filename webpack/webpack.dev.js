/* eslint-disable no-undef */
const webpack = require('webpack');
// const { defineConfig } = require('@vue/cli-service')
module.exports = {
    mode: 'development',
    devtool: 'cheap-module-source-map',
    plugins: [
        new webpack.DefinePlugin({
            'process.env.name': 'Vishwas',
            // 'process.env.BASE_URL': '/'
        })
        
    ]
}