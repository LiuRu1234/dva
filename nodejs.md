# node.js
nodejs.cn
www.npmjs.com
前端 后端
* 看代码在哪运行
    * 浏览器里面运行的代码
    * 服务器里面运行的代码
* node.js 后端语言
    * 前端自动化
    * web服务器
#### 软件 环境变量
* 软件
.当前目录
..上一个目录
cd 改变目录
* 环境变量
    * 我的电脑-> 属性- > 高级系统设置 -> 环境变量
1. 用户 -> Path
2. 系统 -> Path
* 如何解决既不是内部命令也不是外部命令？
dir dir.exe
qq qq.exe qq.cmd qq.bat 都是可执行文件
> 分号英文 应用 cmd需要重启
### javascript node
1. 新的机制
2. 操作文件 （前端自动化）
3. 操作网路 （web服务器）

### API
* node.js引入的新机制
1. module  （模块机制）
2. global (全局变量和函数)
3. buffer （新的数据类型）
4. event  （全新的事件机制）

5. os path fs （操作系统，路径，文件系统）
6. querystring url http （查询字符串，网络路径，http）

### module 模块机制
* 同一目录下的：const a=require('./m.js');
* node_modules文件夹：const fs=require('fs');
1. 内置模块
2. node_modules文件夹下的文件
3. node_modules文件夹下的文件夹（文件夹里的文件必须叫index.js）
### package 包
* explorer程序能够接收参数，系统命令
* explorer http://www.baidu.com可以打开百度window系统
* open http://www.baidu.com可以打开百度，苹果系统
#### 包管理工具 npm
* Node Package Manager npm
### 上传包到npmjs.com
* npm init初始化，对包进行描述
    * name:
    * version: 版本号
    * description:描述，自动打开浏览器，访问自己的局域网ip
    * main:"index.js"入口文件
* npm login
    * 账号密码
* npm publish
    * 上传
### 使用npmjs.com
* 进入当前文件
* npm install openo
### 小程序
* request
* wallpaper壁纸包
* dependencies依赖项
* package.json
    * index.js中开头\#!/usr/bin/env node
    * "bin":{
        "huanbizhi":"./index.js"
    },

### npm的命令
* x代表各种各样的包

* npm init 
* npm install x
* npm install -g x 安装全局
* npm install x --save 记录到.json里dependencies，核心文件里需要的
* npm install x --save-dev 记录到开发包里devDependencies，辅助文件需要的
* npm install 安装本项目的所有依赖项
* npm uninstall 卸载

* npm run y
* npm (run) start

* npm login
* npm publish

脚本"scripts": {
    "test": "node-sass",
    "upload":"git add * && git commit -m 'aa' && git push",
    "yule":"explorer http://www.sina.com",
    "qq":"qq",
    "start":"node index.js"
  },
 
* reactAPP中npm run bulid就是devDependencies

### global (全局变量和函数)
* react没有window
1. module.exports
2. require()
3. console.log(__dirname) 文件目录
4. console.log(__filename) 文件目录+文件名
5. setImmediate()
6. clearImmediate()
7. process.argv

#### 同步异步
* setImmediate(()=>{}) 等价于 setTimeout(()=>{},0);
    * 一般处理为异步的函数有：
    * 时间相关的函数
    * 事件相关的函数
    * 网络请求相关的函数
* 将函数处理为异步函数
```js
function sum(x,fn) {
    setImmediate(()=>{
        let o=0;
        for(var i=0;i<=x;i++){
            o+=i;
        }
        fn(o);
    })
}
sum(100,(data)=>{
    console.log(data);
})
console.log(1)
```
##### process.argv

### fs
* const fs=require('fs');

## Buffer数据类型
* 文件的原始存储方式（字节）
* 每个字节是由八位的0和1组成

## 2017.10.11
```js
const events=require('events');
class O extends events{
    constructor(){
        super();
        setImmediate(()=>{
            this.emit('load','ok');
        })
    }
}
const o=new O();
o.on('load',(data)=>{
    console.log(data);
})
```
### 流
* const stream = require('stream');
* 可读流 事件data end  方法pipe
* 可写流 事件finish    方法write
> let r=fs.createReadStream('1.mp4');
  let w=fs.createWriteStream('2.mp4');

* pipe管道(可读流通过管道直接进入可写流)，这一行等价于以下3行
```js
 w.on('pipe',()=>{
    console.log('拷贝完毕')
 })
 r.pipe(w);

r.on('data',(chunck)=>{
    w.write(chunck);
})
r.on('end',()=>{
    console.log("读取完毕")
})
w.on('finish',()=>{
    console.log("写入完毕")
})
```

### os
* Operation System
* const os=require('os');
1. os.tmpDir(); 存放临时性软件
2. os.homedir(); 根目录

3. os.platform(); darwin linux win32 调兼容
4. os.cpus(); 电脑CPU

5. os.freemem(); 剩余内存
6. os.totalmem(); 总共内存

7. os.getNetworkInterfaces(); 获取本地局域网的IP

```js
const child_process=require('child_process');
if(os.platform()=='darwin'){
    child_process.spawnSync('open',['http://www.baidu.com']);
}else{
    child_process.spawnSync('explorer',['http://www.baidu.com'])
}
```
### PATH
* const path=require('path');
* 构建路径
1. path.resolve(); 把相对路径转化为绝对路径
2. path.join(); 连接和修正两个路径，接收任意多个参数
* 解析路径
3. path.basename(__filename); 一个路径中的文件名
4. path.dirname(); 一个路径中的目录名
5. path.extname(); 文件扩展名

6. path.format(); 对象构造路径，为了是代码更有可读性
7. path.parse(); 路径读取为对象

```js
const path=require('path');
const c=(data)=>{console.log(data)}

c(path.resolve('../'));
c(path.join(os.homedir(),'Desktop','12.txt'));

c(path.basename(__filename));
c(path.dirname(__filename));
c(path.extname(__filename));

c(path.format({
    dir:'C:\',
    base:'2.txt'
}));
c(path.parse(__filename));
c(path.parse(__filename).name);
```

### fs 文件系统
* const fs=require('fs');
1. 异步
// 查看文件状态
> fs.stat(__filename,(err,data)=>{
    console.log(data)
    console.log(data.isDirectory())
    console.log(data.isFile())
})
2. 同步
> console.log(fs.statSync(__filename));
3. 链接版本，可以创建快捷方式，异步
> fs.lstat(__filename,(err,data)=>{
    console.log(data)
})
4. 链接版本，可以创建快捷方式，同步
> fs.lstatSync(__filename)
5. 低端文件描述符版本，异步
> let i=fs.openSync(__filename,'r')
  fs.fstat(i,(err,data)=>{
      console.log(data)
  });
6. 低端文件描述符版本，同步
> let i=fs.openSync(__filename,'r')
fs.fstatSync(i);

#### fs操作
* 文件操作
1. fs.writeFile(); 写文件
2. fs.unlink(); 删除文件
3. fs.readFile(); 读文件
4. fs.appendFile(); 追加文件
5. fs.createReadStream('1.txt').pipe(fs.createWriteStream('2.txt')); 拷贝文件

6. fs.stat(); 查看文件状态的
7. fs.rename(); 重命名和剪切
8. fs.existsSync(); 没有异步版,判断文件是否存在
* 目录操作
9. fs.readdir(); 读取目录,只能读一层,遍历需要自己写
10. fs.rmdir(); 移除目录

11. fs.watchFile();监测某一个文件里的变动

## queryString&url&http
### url 统一资源定位符
> https://www.baidu.com/s?wd=liuru
> 协议，IP地址 域名，端口号，资源/s 查询字符串
* 一个url代表了一台机器上的某个资源
* const url=require('url');
    * url.format({
        protocal:'http',
        host:'www.baidu.com',
        pathname:'/s',
        search:'wd=12'
    });  格式化，把字符串转化为对象
    * url.parse();
* querystring.stringify({
    
})


### 
服务器 apache wamp

### http
* http.createServer();
* http.request();
* 基于两个包
    * request
    * express
* Networks
    * Headers头信息
        * gengenal 概览
        * response headers 回应
        * request headers 请求头信息


##### 在文档中对应的哪一类
* server http.Server
* res可写流  http.severResponce
    * 回主体
    * res.end
    * 回文件
    * res.write
    
    * 设置头信息
    * res.setHeader
        * text/html  text/plain  image/jpeg
* req  http.IncomingMesssage
```js
console.log(req.headers);
    console.log(req.httpVersion);
    console.log(req.method);
    console.log(req.rawHeaders);
    console.log(req.socket.remoteAddress);//拿到对方的局域网的IP地址
    console.log(req.url);
```
## express&cocket.io
### express
* 中间件
```js
function x(req,res,next) {
    if(path.extname(req.url)==".css"){
        res.sendFile(path.resolve("./public/"+req.url))
    }else{
        next();
    }
}
function y(req,res,next) {
    console.log(req.socket.remoteAddress);
    next();
}
sever.use(x);
sever.use(y);
```
* express内置中间件
    * sever.use(express.static('./public'));
    * public下所有文件文件夹都可以通过/访问







* 热门包cheerio 快速从html中找到自己想要的任何东西，遵循jQuery的规则
* request
* express
* socket.io

* npm install nodemon -g监测文件改动，自动重启浏览器
    * "start":"nodemon index.js"

* http://www.expressjs.com.cn/

### socket.io包
* https://socket.io/
* 可以解读两种协议http socket协议
* socket.io 一种构建在http之上的协议
* 轮询 长连接，用于推送信息
    * 长连接的本质原因还是轮询

服务端
io.on(‘connection’,function(socket));//监听客户端连接,回调函数会传递本次连接的socket

io.sockets.emit(‘String’,data);//给所有客户端广播消息

io.sockets.socket(socketid).emit(‘String’, data);//给指定的客户端发送消息

socket.on(‘String’,function(data));//监听客户端发送的信息

socket.emit(‘String’, data);//给该socket的客户端发送消息

广播消息

//给除了自己以外的客户端广播消息
socket.broadcast.emit("msg",{data:"hello,everyone"}); 
//给所有客户端广播消息
io.sockets.emit("msg",{data:"hello,all"});
分组

socket.on('group1', function (data) {
        socket.join('group1');
});
socket.on('group2',function(data){
        socket.join('group2');
 });
客户端发送

socket.emit(‘group1’)，就可以加入group1分组；
socket.emit(‘group2’)，就可以加入group2分组；

一个客户端可以存在多个分组（订阅模式）

踢出分组

socket.leave(data.room);

对分组中的用户发送信息

//不包括自己
socket.broadcast.to('group1').emit('event_name', data);
//包括自己
io.sockets.in('group1').emit('event_name', data);
broadcast方法允许当前socket client不在该分组内

获取连接的客户端socket

io.sockets.clients().forEach(function (socket) {
    //.....
})
获取分组信息

//获取所有房间（分组）信息
io.sockets.manager.rooms
//来获取此socketid进入的房间信息
io.sockets.manager.roomClients[socket.id]
//获取particular room中的客户端，返回所有在此房间的socket实例
io.sockets.clients('particular room')
另一种分组方式

io.of('/some').on('connection', function (socket) {
    socket.on('test', function (data) {
        socket.broadcast.emit('event_name',{});
    });
});
客户端

var socket = io.connect('ws://103.31.201.154:5555/some')
socket.on('even_name',function(data){
   console.log(data);
})
客户端都链接到ws://103.31.201.154:5555 但是服务端可以通过io.of(‘/some’)将其过滤出来。

另外，Socket.IO提供了4个配置的API：io.configure, io.set, io.enable, io.disable。其中io.set对单项进行设置，io.enable和io.disable用于单项设置布尔型的配置。io.configure可以让你对不同的生产环境（如devlopment，test等等）配置不同的参数。

客户端
建立一个socket连接

var socket = io(“ws://103.31.201.154:5555”);

监听服务消息

socket.on('msg',function(data){
    socket.emit('msg', {rp:"fine,thank you"}); //向服务器发送消息
    console.log(data);
});
socket.on(“String”,function(data)) 监听服务端发送的消息 Sting参数与服务端emit第一个参数相同

监听socket断开与重连。

socket.on('disconnect', function() {
    console.log("与服务其断开");
});


socket.on('reconnect', function() {
    console.log("重新连接到服务器");
});
客户端socket.on()监听的事件：
connect：连接成功
connecting：正在连接
disconnect：断开连接
connect_failed：连接失败
error：错误发生，并且无法被其他事件类型所处理
message：同服务器端message事件
anything：同服务器端anything事件
reconnect_failed：重连失败
reconnect：成功重连
reconnecting：正在重连
当第一次连接时，事件触发顺序为：connecting->connect；当失去连接时，事件触发顺序为：disconnect->reconnecting（可能进行多次）->connecting->reconnect->connect。


## webpack 前端自动化工具
### 准备工作及原理
* 一个express 包
* 2个js文件
    * react.js
    * react-dom.js

* http://www.bootcdn.cn/
* http://babeljs.io/  将es6转成es5
> npm install -g babel-cli
> npm install babel-preset-es2015 --save-dev
> npm install babel-preset-react --save-dev

* babel index.jsx --out-file index.js
* babel ./public/js/index.jsx --out-file ./public/js/index.js --presets=es2015,react 将es6转为es5
* 可在.json中的script写入，已便于后期多次变更生成es5

## webpack
* 更高级的babel(es6 jsx 单个对单个的转换)
* webpack es6 jsx 一些有限的node.js 语法
009开发文件夹
自动生成服务器文件夹
#### webpack 运行必须安装的四个包
* npm install -g webpack
* npm install webpack --save-dev
* npm install -g webpack-dev-server
* npm install webpack-dev-server --save-dev
* npm install react --save-dev
* npm install react-dom --save-dev
#### 运行转换为目的js文件
* webpack b.js r.js
* "build":"webpack ./app.js ../008/public/js/index.js"
    * 配置文件webpack.config.js
    * npm install babel-loader --save-dev
    * npm install babel-core --save-dev
    
    * npm install css-loader --save-dev //转换成字符串
    * npm install style-loader --save-dev //创建style标签
    ```js
      const path=require('path');
      module.exports={
          'entry':'./app.js',//从哪儿开始打包
          'output':{
              path:path.resolve('../myapp/public/js'),
              filename:'index.js'
          },
          module:{
              rules:[
                  {
                      test:/.js$/,
                      // use:'babel-loader'//把符合条件的先转化为浏览器能够运行的之后再合并,每用一个loader,npm就需要安装一个loader
                      use:[
                          {
                              loader:'babel-loader',
                              options:{
                                  presets:['es2015','react']
                              }
                          }
                      ]
                  },
                  {
                      test:/.css$/,
                      use:[
                          {loader:'style-loader'},
                          {loader:'css-loader'}
                      ]
                  }
              ]
          }
      };
    ```
### 压缩生成的index.js
#### plugins插件（周边流程）
* webpack内置压缩js
* 合图的

```js
plugins:[
        new webpack.DefinePlugin({
          'process.env': {
            'NODE_ENV': JSON.stringify('production')
          }
        }),//减少不必要的代码
        new webpack.optimize.UglifyJsPlugin()//内置文件压缩js
    ]
```
* 马彦龙博客
* http://nate-river.github.io/blog
* http://nate-river.github.io/jquery
* http://nate-river.github.io/css3

### 组件化开发好处
* 能复用最好，但不是最主要的
* 多人协作
* 提高开发效率

* import React, { Component } from 'react';//node.js尚未实时，webpack支持
* const React=require('react');
  const Component=React.Component;
* 导出对象直接加花括号即可
### 开启预览服务器
* "start":"webpack-dev-server"
* 不用build即可实时更新变化
* 加一个假服务器，实现预览功能

* jzip实现节省服务器开销
* devServer:{
          compress: true,
          port: 9000,//假路径
          publicPath:'/js'
      },
* 不作任何改动的index.html就可以拷贝到目标文件中  

### 图片的3种使用方式
* 配置项需要加loader
    * npm install file-loader --save-dev
    * npm install url-loader --save-dev
1. img标签 
    * import img from './1.jpg';
    * <img src={img} alt=""/>
> 图片base64编码

2. background
    * background:url(/logo.jpg);
    
* webpack更多的配置项网址
* https://webpack.js.org/configuration/

### 准确查找错误代码所在位置
* 配置项devtool: "inline-source-map",
* 完成后记得去掉

### 自动生成index.html
* npm install html-webpack-plugin --save-dev
* const HtmlWebpackPlugin = require('html-webpack-plugin');
* 插件 new HtmlWebpackPlugin()
* npm install html-loader --save-dev

### header里展示好几个栏目
* server.get('/data',(req,res)=>{
      res.json(['a','b','c'])
  })

create-react-app
vue

## create-react-app
* babel-eslint要求代码规整
* chalk 输出字体颜色不同
* 基于包开发的
##### npm run eject 弹射出
* config 配置文件
    * 前三个js设置一些变量的
    * webpack.config.dev 预览
    * webpack.config.prod 打包
    * webpackDevServer.config dev-server的配置
* scripts 脚本
    * build 打包
    * start 开启服务
    * test 测试文件，一般不使用

### 蚂蚁金福
* http://ant.design/index-cn 已经写好的react
* npm install antd --save 在react中使用蚂蚁金福中的组件，快速组装页面
### 路由
```js
 constructor(){
        super();
        this.state={
            hash:"#/"
        }
    }
    componentDidMount(){
        window.location.href="#/"
        window.onhashchange=()=>{
            this.setState({
                hash:window.location.hash
            })
        }
    }
    render(){
            let o;
             switch (this.state.hash){
             case "#/":o=(
             <div>
             <h1>首页</h1>
             <a href="#/a"><A/></a>
             <a href="#/b"><B/></a>
             </div>
             );break;
             case "#/a":o=<A/>;break;
             case "#/b":o=<B/>;break;
             }
            return(
                <div>
                    {o}
                </div>
            )
    
        }
```
* https://reacttraining.com/react-router/

* npm install react-router-dom --save
* 先判断开头的，符合就显示，所以必须加精准的exact
* exact 精准的访问到/
    * <Route exact path="/" component={Home}/>

* 每一个标签都有一个ref,当变成真实DOM就会调用ref，会传一个参数，DOM本身

* 生成的前台
* npm install mysql --save
### mysql
```js
const con=mysql.createConnection({
    host:'localhost',
    port:3306,
    user:'root',
    password:'',
    database:'waimai'
});
 con.query('select * from user',(err,data)=>{
     console.log(data)
 })

 con.query('insert into user (name,password) values(?,?)',['c','d'],(err,data)=>{
     console.log(data.insertId)
 })
 con.query('update user set name=?,password=? where id=?',['c','d',2],(err,data)=>{
     console.log(data.affectedRows)
 })
 con.query('delete from user where id=?',[5],(err,data)=>{
     console.log(data.affectedRows)
 })
```

* php include()   sendFile
* php echo       res.json
* 后台：构造一个符合http协议的字符串传递给服务器


### cookie
* 不设置过期时间，关闭浏览器过期
* 会自动跟随每一次http请求
    * res.cookie('test','1',{expire:})
* 自动获取cookie中的数据
* npm install cookie-parser --save
* var cookieParser = require('cookie-parser');
* server.use(cookieParser());

* cookie隔离
    * /imgs/1.png
### session 
* session 是一个更安全的cookie（浏览器关闭的时候销毁）
* 信息并没有存储在cookie中，而是保存在了服务器中
* 出去的cookie中存储的仅仅是用户标识

* npm install express-session --save
* var session = require('express-session');
* server.use(session({
      secret: 'keyboard cat',
      resave: false,
      saveUninitialized: true
  }))
* 取值赋值都在req身上
### fetch
* 默认情况下不会带着已有的cookie
* credentials:'include'让fetch请求带上cookie
```js
fetch('/get_user',{
        credentials:'include'
    }).then(res=>res.json())
        .then(data=>{
            console.log(data)
        })
```

vw：viewpoint width，视窗宽度，1vw等于视窗宽度的1%。
vh：viewpoint height，视窗高度，1vh等于视窗高度的1%。
vmin：vw和vh中较小的那个。
vmax：vw和vh中较大的那个。
vw, vh, vmin, vmax：IE9+局部支持，chrome/firefox/safari/opera支持，ios safari 8+支持，android browser4.4+支持，chrome for android39支持


### post
* 把post发过来的解析
* npm install body-parser --save

### 一个url 代表一个资源
1. /  index.html                资源 页面（用户键入url敲回车）
2. /user [{id:1,name:'a'},...]  api接口 application interface
3. /index.js                    静态资源

### 数据库-视图
drop view if exists abc;
create view abc as
select
g.id as gid,g.name,g.pic,g.price,
c.id as cid,c.name as cname,
s.id as sid,s.name as sname,s.pic as spic,
u.id as uid,u.name as uname
from goods as g,cate as c,store as s,user as u
where
g.cate_id=c.id
and
c.store_id=s.id
and
s.uid=u.id


drop view if exists cs;
create view cs as
select
c.id as cid,c.name as cname,
c.pic as cpic,s.id as sid,
s.name as sname,s.pic as spic
from singer_cate as c,singer as s where s.cid=c.id

drop view if exists csge;
create view csge as
select
c.id as cid,c.name as cname,c.pic as cpic,
s.id as sid,s.name as sname,s.pic as spic,
ge.id as geid,ge.pic as gepic,title,musician,author,content
from singer_cate as c,singer as s,song as ge where s.cid=c.id and ge.sid=s.id

drop view if exists cg;
create view cg as
select
c.id as cid,c.name as cname,
g.id as gid,g.name as gname,price,pic
from goods_cate as c,goods as g where g.cid=c.id



drop view if exists abd;

create view abd as
select
c.id as cid,c.name as cname,
s.id as sid,s.name as sname,
u.id as uid,u.name as uname
from cate as c,store as s,user as u
where
c.store_id=s.id
and
s.uid=u.id

1. 后台的页面访问权限(跳转慢的问题)   ok
2. 退出 （销毁session）
3. 个人信息的修改，
4. 密码更改密码需要旧密码
5. 店铺图片的上传（引入中间件）  ok
6. 店铺信息的修改  ok
7. 添加分类  ok
8. 分类管理：删除，更新  ok
9. 添加商品  ok
10. 商品删除，更新  ok


vim世界上最快的编辑器没有之一

###  上传图片
x-www-urlencoded   提交默认表单
application/json   fetch
multipart/form-data  需要中间件multer
* 中间件 处理文件
* npm install multer --save

### babel-plugin-import
* npm install babel-plugin-import --save-dev
* 需要哪个包打包哪个,不会造成生成过多不必要的文件
* prod.js中的151行,添加如下内容，详情可查看npmjs.com
```js
"plugins": [["import", {
                    "libraryName": "antd",
                    "style": true,   // or 'css'
                }]],
```

## create-react-app中的打包
1. 消除warning
2. path.js里最下面改build路径appBuild: resolveApp('../myapp/public'),
3. build.js 49行fs.emptyDirSync(paths.appBuild);注释掉可防止build中的文件丢掉
4. babel-plugin-import操作

# node.js
* 前端自动化 ->react
* 小程序
* 服务器 ->SPA(single page application)


- 移动端全站布局（html+css）
1. php + jquery 企业网站
2. react 新闻APP
3. node.js + react + vue ( 外卖平台 )
4. node.js + react + vue (点歌系统)
*  ktv 单人完成，（node.js+ antd后台）（ node.js + vue 前台）

### 外卖平台
1. 外卖页面（商家列表）
2. 点餐页面（主点餐流程的元素和隐藏元素）
3. 登陆注册页面
4. 确认订单页面
5. 收货地址列表页
6. 收货地址新增页面
7. 收货地址编辑页
8. 订单列表页
9. 订单详情页
10. 我的页面（我的地址）
11. 账户信息


# vue.js 基础
* 对es6语法支持性不好
### vue 和 react 的区别
1. react  state props
    vue    data 
2. 指令
* 数据放到data中
* v-for="v in newList" 循环
* v-on:click="" 事件  
* 所有调用的函数放到methods中

* react和vue 虚拟DOM比对算法，能够保证页面最小代价更新界面

* this 代表整个页面
### vue中什么时候是字符串，什么时候是变量
* 出现在指令和双花括号里面的全是表达式

## vue 路由
```js
const router={
    '#/':index,
    '#/me':me
}
var app=new Vue({
    el:'#app',
    data:{
        hash:window.location.hash
    },
    mounted(){
        window.onhashchange=()=>{
            this.hash=window.location.hash
        }
        window.location.href="#/"
    },
    render:function (h) {
        return h(router[this.hash])
    }
})
```
v-on:mousedown.prevent
computed: 计算
mounted 时间

v-bind:class=""变成表达式

安装vue.js插件 代码适合vue

* 将vue转为html格式
配置vue环境
1. npm install -g vue-cli
2. vue init webpack . 
3. (回答问题 NO:eslint unit test e2e)
4. npm install
5. webpack.base.config.js  congig/index.js  webpack.prod.config.js
6. 跟踪打包流程 entry main.js  router/index.js  App.vue
7. components:{APP} scoped
8. @ ->src ../



vue-cli
* base.js output->path index.js assetsRoot换build路径
* 增加loader base.js
* 增加插件 pro.con.js

style scoped 
* 此样式只对该组件中生效

main.js入口文件

router index.js制作多页面

# 前后台的vue的连接
1. 配路由
2. index.vue 发送请求
3. config/index.js代理
```js
proxyTable: {
      '/api':{
          target:'http:localhost:8000'
      },
        '/upload':{
            target:'http:localhost:8000'
        }
    }
```
4. index.js后台获取数据库的数据
