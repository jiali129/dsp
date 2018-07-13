一、手动搭建webpack;入口出口
externals:资源的引用就是下载的包不在build里面打包出去，而是单独引用
1.本项目中用到antd，但是用antd不能光用它，还得把它的关联项一起用，有react,react-dom,moment
2.webpack抽取csswebpack3 （extract-text-webpack-plugin）跟webpack4(mini-css-extract-plugin)不一样   
tree shaking也可以做css的优化，进一步减少包的大小