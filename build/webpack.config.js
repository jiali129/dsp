const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const base = require('./webpack.base.js')
module.exports =merge(base,{ //base从后往前覆盖
    mode:'development',
    plugins:[new webpack.HotModuleReplacementPlugin()],
    devServer:{
        port:8888,
        hot:true,
        historyApiFallback: true,//如果没有，HTML5页面会报404
        quiet:true,
        open:true,
        noInfo:true
    },
    devtool:'eval-source-map'
})
