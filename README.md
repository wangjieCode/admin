## 值班系统web版
> commit时注明修改/增加的功能
### 说明
* 技术栈： vue vuex vue-router element-ui axios(没有特殊需求不要添加多余插件)
* 克隆后下载依赖： npm/yarn(cnpm容易丢包**慎用**) install
* 启动项目：yarn serve (vue-cli3.x版本脚手架)
### 注意
* 网络请求的函数放在server文件夹下，不要在组件中导入axios，
* 异步函数统一使用async await
* element-ui组件在plugins文件下按需导入