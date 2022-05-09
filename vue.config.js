const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production' ?  '/my-app/' : '/', //部署应用包时的基本url， 假如域名：https://www.my-app.com/my-app/，则设置 publicPath 为 /my-app/， 默认： ‘/’
  outputDir: 'dist', //当运行 vue-cli-service build 时生成的生产环境构建文件的目录
  indexPath: 'myHtml.html', //指定生成的html
  pages: {
    index: {
      // page 的入口
      entry: 'src/main.ts',
      // 模板来源
      template: 'public/index.html',
      // 在 dist/index.html 的输出
      filename: 'index.html',
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'Index Page',
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    // 当使用只有入口的字符串格式时，
    // 模板会被推导为 `public/subpage.html`
    // 并且如果找不到的话，就回退到 `public/index.html`。
    // 输出文件名会被推导为 `subpage.html`。
    subpage: 'src/subpage/main.ts'
  },
  // 调整 webpack 配置最简单的方式就是在 vue.config.js 中的 configureWebpack 选项提供一个对象：
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
      console.log(config)
    } else {
      // 为开发环境修改配置...
    }
  },
  // 是一个函数，会接收一个基于 webpack-chain 的 ChainableConfig 实例。允许对内部的 webpack 配置进行更细粒度的修改。
  chainWebpack: () => {
    // console.log(config)
  },
  // 配合 CSS > CSS Modules
  css: {
    loaderOptions: {
        sass: {
            additionalData: `@import "@/css/variables.scss";`
        },
        scss: {
            additionalData: `@import "@/css/variables.scss";`
        }
    }
  },
  // 所有 webpack-dev-server 的选项都支持
  devServer: {
    port: '3333',
    open: true,
    // 如果你想要更多的代理控制行为，也可以使用一个 path: options 成对的对象。完整的选项可以查阅 http-proxy-middleware 。
    // https://webpack.js.org/configuration/dev-server/
    proxy: {

    }
  },





})
