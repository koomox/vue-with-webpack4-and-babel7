# vue-with-webpack4-and-babel7

A Vue Project with Webpack 4 and Babel 7

```sh
git clone https://github.com/koomox/vue-with-webpack4-and-babel7.git
```

update Dependencies

```sh
yarn upgrade
```

install Dependencies

```sh
yarn init
yarn add @babel/cli @babel/core @babel/preset-env babel-loader --dev
yarn add clean-webpack-plugin html-webpack-plugin --dev
yarn add vue vue-router vue-loader vue-template-compiler --dev
yarn add css-loader vue-style-loader --dev
yarn add webpack webpack-cli --dev
yarn add webpack-dev-server webpack-dev-middleware webpack-hot-middleware --dev
```

### 依赖

Node.js: [Link](https://nodejs.org/en/download/)  
Express.js: [Link](https://expressjs.com/en/starter/installing.html)  
Yarn: 项目使用 yarn 管理 [Link](https://github.com/yarnpkg/yarn/)  
Webpack: 使用 webpack 构建 [Link](https://webpack.js.org/)  
Vue.js: [Link](https://vuejs.org/v2/guide/installation.html#NPM)  
Babel 7: [Link](https://babeljs.io/docs/en/usage)  
webpack-dev-middleware: [Link](https://github.com/webpack/webpack-dev-middleware)  
webpack-hot-middleware: [Link](https://github.com/webpack-contrib/webpack-hot-middleware/)

### 热更新

使用 `webpack-dev-middleware` 和 `webpack-hot-middleware` 配合使用实现页面的热加载，刷新浏览器功能。  
`webpack-dev-middleware` 首先对更改的文件进行监控，编译。  
`webpack-hot-middleware` 是用来进行页面热重载。而这些文件资源并不会出现在真实的路径里，而是保存在内存中，如果文件改变，`webpack-dev-middleware` 就不再去请求旧的文件，而是延迟请求直到新的文件编译完成。
