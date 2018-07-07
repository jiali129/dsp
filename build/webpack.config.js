var path = require('path')
const webpack = require('webpack')
module.exports = {
    mode:'development',
    entry:{
       bundle:path.resolve(process.cwd(),'src/main.js') 
    },
    output:{
        path:path.resolve(process.cwd(),'dist'),
        filename:'[name].js'
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
                use: ['style-loader','css-loader' ]
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
    plugins:[new webpack.HotModuleReplacementPlugin()],
    devServer:{
        port:8888,
        hot:true,
        historyApiFallback: true,//如果没有，HTML5页面会报404
        quiet:true,
        open:true
    }
}
