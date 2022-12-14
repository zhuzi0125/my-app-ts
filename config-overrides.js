const { override, addDecoratorsLegacy, addBabelPlugin, addWebpackPlugin } = require('customize-cra');

const SentryWebpackPlugin = require("@sentry/webpack-plugin");
module.exports = override(
    // 开启babel装饰器插件的两种方法
    // 直接使用 addDecoratorsLegacy() 或 使用 addBabelPlugin() 添加
    addDecoratorsLegacy(),

    // addBabelPlugin 用来配置添加babel插件的 
    // 这里以 @babel/plugin-proposal-decorators 插件为例， 这个插件是用来支持 es7 装饰器语法的
    // addBabelPlugin(
    //   ["@babel/plugin-proposal-decorators", { "legacy": true }]
    // )

    /**配置sentry sourcemap上传 */
    addWebpackPlugin(new SentryWebpackPlugin({
        org: "zhuzi",
        project: "my-app-ts",
        //url:'http://localhost:3000/',
        // Specify the directory containing build artifacts
        include: "./build",
        ignore: ["node_modules", "config-overrides.js"],
        // configFile: "sentry.properties",//configFile: "sentry.properties"， 这是用来替代第二步的.sentryclirc文件。
        // Auth tokens can be obtained from https://sentry.io/settings/account/api/auth-tokens/
        // and needs the `project:releases` and `org:read` scopes
        authToken: '3380564dbe29454d8122582d8eaaced9b59c4f4d51cd4d37a87ed82a280eaff2',
        
        // Optionally uncomment the line below to override automatic release name detection
        // release: process.env.RELEASE,
    }),)
)

//https://juejin.cn/post/6883029207014703117 装饰器语法
//https://blog.csdn.net/lfy_wybss/article/details/122079178


//sentry sourcemap定位
//https://segmentfault.com/a/1190000022829713?utm_source=tag-newest