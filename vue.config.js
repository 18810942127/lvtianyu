const CompressionWebpackPlugin = require("compression-webpack-plugin");
const productionGzipExtensions = /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i;
module.exports = {
    productionSourceMap: false,
    publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
    chainWebpack: config => {
        config.plugins.delete('prefetch');
    },
    devServer: {
        port: 3002,
        proxy: {
            '/ys/*': {
                target: 'http://learnmachineservice.devel.ys.cn',
                changeOrigin: true,
                pathRewrite: {
                    '^/ys': '/ys'
                }
            }
        }
    },
    lintOnSave: false,
    configureWebpack: config => {
        const plugins = [];

        // Begin 生成 gzip 压缩文件
        plugins.push(
            new CompressionWebpackPlugin({
                filename: "[path].gz[query]",
                algorithm: "gzip",
                test: productionGzipExtensions,
                threshold: 10240,
                minRatio: 0.8
            })
        );
        // End 生成 gzip 压缩文件
        
        config.plugins = [...config.plugins, ...plugins];
    }
};
