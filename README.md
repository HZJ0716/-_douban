# vue搭建 文娱类Web app
## 技术栈
* Vue.js: 轻量级框架，上手门槛低，结合MVVM模式完成数据双向绑定，操作方便。<br>
* vue-router: 页面路由控制相关，控制页面的跳转与信息传递。<br>
* ES6: ECMAScript新语法标准，项目中运用到promise,箭头函数，模块化等。<br>
* axios: 使用axios向服务端发送请求获取数据，项目数据获取自豆瓣api。<br>
* CSS3: 过渡动画的运用，增强用户交互敢。<br>
* vue-cli: vue-cli脚手架，项目搭建工具。<br>
* webpack：项目的初始化、编译、打包。<br>
* eslint：代码风格检查工具，规范代码格式。<br>
* vscode：代码编译与开发工具，可以实现多终端运行，方便快捷。<br>
* proxy: 使用代理模式进行数据跨域请求。<br>
# 实现界面
## 列表页
列表信息展示:将api接口进行代理，使用axios向豆瓣api请求数据。<br><br>
上拉加载:未使用插件，利用原生js代码通过定位对象高度信息进行判断是否要数据请求。<br><br>
路由切换:根据路由信息进行页面切换。<br><br>
## 详情页
过渡动画:使用css3样式的transform实现效果。
## FM音乐页
音乐播放:通过axios请求api获取资源，使用正则表达式筛选信息。
歌词展示:通过axios请求api获取资源，使用正则表达式筛选信息。
# 安装与运行
npm install //安装依赖

npm run dev //服务端运行 访问 http://localhost:8080

npm run build  //项目打包 
