'use strict'
const path = require('path')
const webpack = require('webpack')
const config = require('../config')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

function resolve (dir) {
    return path.join(__dirname, '..', dir)
}

module.exports = {
    context: path.resolve(__dirname, '../'),
    entry: {
        app: './src/main.js'
    },
    output: {
        path: config.build.assetsRoot,
        filename: '[name].bundle.js',
        publicPath: process.env.NODE_ENV === 'production'
            ? config.build.assetsPublicRoot
            : config.dev.assetsPublicRoot
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            '@': resolve('src'),
            'static': path.resolve(__dirname, '../static')
        }
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    process.env.NODE_ENV !== 'production'
                        ? 'vue-style-loader'
                        : MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /.\js$/,
                loader: 'babel-loader',
                include: [resolve('src'), resolve('test')]
            },
            {
                test: /.\vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        
                    }
                }
            }
        ]
    },
    // https://vue-loader.vuejs.org/en/configurations/extract-css.html extract-css回去看下文档
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'style.css'
        })
    ]
}