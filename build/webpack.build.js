const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const base = require('./webpack.base.js')
module.exports =merge(base,{
    mode:'production',
    plugins:[],
    externals:{
        "react":"React",
        "react-dom":"ReactDOM",
        "moment":"moment",
        "antd":"antd" 
    }
   
})