'use strict'
const path = require('path')

module.exports = {
    dev: {
        assetsPublicRoot: '/',
        cssSourceMap: false
    },
    build: {
        index: path.resolve(__dirname, '../dist/index.html'),
        assetsRoot: path.resolve(__dirname, '../dist'),
        assetsPublicRoot: './',
        productSourceMap: false
    }
}