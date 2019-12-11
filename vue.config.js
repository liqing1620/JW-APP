const path = require('path')
const webpack = require('webpack')
// 多页面打包模块配置------------start
let glob = require('glob')

//配置pages多页面获取当前文件夹下的html和js
function getEntry(globPath) {
    let entries = {}, tmp, htmls = {};

    // 读取src/pages/**/底下所有的html文件
    glob.sync(globPath + 'html').forEach(function (entry) {
        tmp = entry.split('/').splice(-3);
        htmls[tmp[1]] = entry
    })

    // 读取src/pages/**/底下所有的js文件
    glob.sync(globPath + 'js').forEach(function (entry) {
        tmp = entry.split('/').splice(-3);
        entries[tmp[1]] = {
            entry,
            template: htmls[tmp[1]] ? htmls[tmp[1]] : 'index.html', //  当前目录没有有html则以共用的public/index.html作为模板
            filename: tmp[1] + '.html'   //  以文件夹名称.html作为访问地址
        };
    });
    console.log(entries)
    return entries;
}

let pages = getEntry('./public/**/*.');

// 多页面打包模块配置------------end
function resolve(dir) {
    return path.join(__dirname, dir)
}

// vue.config.js
module.exports = {
    publicPath: '/',
    // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
    productionSourceMap: false,
    pages:pages,
    // configureWebpack: {
    //     devServer: {
    //         historyApiFallback: {
    //             verbose: true,
    //             rewrites: [
    //                 { from: /^\/EDU\/.*$/, to: '/EDU.html'},
    //                 {from: /^\/HHG\/.*$/, to: '/HHG.html'}
    //             ]
    //         }
    //     }
    // },
    chainWebpack: (config) => {
        config.resolve.alias
            .set('@$', resolve('src'))
            .set('@api', resolve('src/api'))
            .set('@assets', resolve('src/assets'))
            .set('@static', resolve('static'))
            .set('@images', resolve('static/images'))
            .set('@comp', resolve('src/components'))
            .set('@views', resolve('src/views'))
            .set('@utils', resolve('src/utils'))
            .set('@axios', resolve('src/axios'))
            .set('@router', resolve('src/router'))
            .set('@store', resolve('src/store'))
            .set('@configs', resolve('src/configs'))
            .set('@support', resolve('src/support'))
    },

    css: {
        loaderOptions: {
            less: {
                modifyVars: {
                    /* less 变量覆盖，用于自定义 ant design 主题 */

                    /*
                    'primary-color': '#F5222D',
                    'link-color': '#F5222D',
                    'border-radius-base': '4px',
                    */
                },
                javascriptEnabled: true,
            }
        }
    },
    devServer: {
        port: 8080,
        proxy: {
            '/jsma': {
                target: 'http://tlc.rongxiangjiankang.com', //请求本地 需要jeecg-boot后台项目
                ws: false,
                changeOrigin: true
            }
        }
    },

    lintOnSave: undefined
}
