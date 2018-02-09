//一，创建node应用
//1，引入requieed模块
var http = require("http");
//2，创建服务器
http.createServer(function (req,res) {//创建服务器
    //发送http头部，状态值200，内容类型text/plain
    res.writeHead(200,{'Content-Type':'text/plain'})
    //发送数据
    res.end('Hello World\n')
}).listen(8881) //监听端口

//二，npm使用介绍
/*
* 1，npm包管理工具
* 2，安装模块：npm install <Module Name>
* 3，全局安装 命令行中使用；本地安装 当前目录下使用
* 4，查看全局安装模块 npm list -g
* 5，查看某个模块版本号 npm list grunt
* 6，使用淘宝npm镜像 npm install -g cnpm --registry=https://registry.npm.taobao.org
* 7，npm init 初始化项目，创建package.json文件
* */

//三，package.json 属性说明
/*
* name - 包名。

version - 包的版本号。

description - 包的描述。

homepage - 包的官网 url 。

author - 包的作者姓名。

contributors - 包的其他贡献者姓名。

dependencies - 依赖包列表。如果依赖包没有安装，npm 会自动将依赖包安装在 node_module 目录下。

repository - 包代码存放的地方的类型，可以是 git 或 svn，git 可在 Github 上。

main - main 字段指定了程序的主入口文件，require('moduleName') 就会加载这个文件。这个字段的默认值是模块根目录下面的 index.js。

keywords - 关键字
* */

//四，交互式解释器（没写一行代码都有反应）repl：终端写代码
//可以运算，逻辑处理···

//五，node.js回调函数(第一个参数是err,第二个是data)
/*
* 1，阻塞代码，同步执行。回调函数执行完才能进行下一步
* 2，非阻塞代码，异步执行，不用等待回调函数执行完
* 3，node的API都有两种模式，同步就是加Sync
* */

/*
* 目录结构分析
* app.js app入口文件，get或post都是对应客户端路由访问地址，只要是为了路由端提供访问路径
* server/api/*.js  处理各种后台功能逻辑,数据库操作，比如登录注册对数据库查询
* server/module/*.js 链接数据库，建立数据表结构，每一张数据表结构就是一个js文件
* */