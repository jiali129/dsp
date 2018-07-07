var path = require('path')
const webpack = require('webpack')

module.exports = {
    mode:'production',
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
                test: /\.(gif|png|jpg|woff|woff2|eot|ttf|otf)$/,
                use: ['url-loader','file-loader' ]
            }
        ]
    },
    resolve:{
        alias:{
            "@":path.resolve(process.cwd(),"src")
        },
        extensions:['.js','.jsx']
    },
    plugins:[]
   
}