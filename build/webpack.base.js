var path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
module.exports = {
    entry:{
       bundle:path.resolve(process.cwd(),'src/main.js') 
    },
    output:{
        path:path.resolve(process.cwd(),'dist'),
        filename:'[name].js',
        chunkFilename:"[name][hash].js"
    },
    module:{
        rules:[
            {
                test:/\.(jsx|js)$/,
                use:['babel-loader'],
                exclude:/node_modules/
            },
            {    
                test: /\.css$/,
                use: [{
                    loader:MiniCssExtractPlugin.loader,
                    options:{
                        //you cam specify a publicPath here
                    }
                },'css-loader' ]
            },
            {    
                test: /\.(gif|png|jpg|woff|woff2|eot|ttf|otf|svg)$/,
                use: ['file-loader']
            }
        ]
    },
    resolve:{
        alias:{
            "@":path.resolve(process.cwd(),"src")
        },
        extensions:['.js','.jsx']
    },
    plugins:[
        new webpack.DefinePlugin({
           chunkPath:JSON.stringify('plan')
        }),
        new MiniCssExtractPlugin({
            filename:"[name].css",
            chunkFilename:"[id].css"
        })
    ]   
}