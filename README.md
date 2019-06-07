# vue-with-webpack4-and-babel7
A Vue Project with Webpack 4 and Babel 7

```
git clone https://github.com/koomox/vue-with-webpack4-and-babel7.git
```

### 热更新          
使用 `webpack-dev-middleware` 和 `webpack-hot-middleware` 配合使用实现页面的热加载，刷新浏览器功能。          
`webpack-dev-middleware` 首先对更改的文件进行监控，编译。         
`webpack-hot-middleware` 是用来进行页面热重载。而这些文件资源并不会出现在真实的路径里，而是保存在内存中，如果文件改变，`webpack-dev-middleware` 就不再去请求旧的文件，而是延迟请求直到新的文件编译完成。