1. 安装webstorm
2. 安装node 配置环境
3. 安装react
npm install -g create-react-app
create-react-app my-app

cd my-app
npm start

npm install react-router --save
npm install react-router-dom --save
npm install -g react-router-dom

4. 安装git
$ git clone http://....git
* 将远程版本库克隆到本地
$ git status 必须在有.git文件夹的地方操作，用来进行查看当前文件状态，是否有被修改的有被删除的
$ dir
$ cd liu+tab键进入
$ cd ../跳出
$ git add index.html 提交
$ git add * 将需要提交的修改内容进行添加
$ git commit -m "描述" 将修改提交到本地的版本库
$ git push 将本地的内容提交到远程
$ git pull 将远程的内容拉取到本地
###### 问题
* 先同步再提交 先pull再push
* 如果因为有冲突发布不了 可以先把自己做了修改的部分复制出去，然后删掉自己的版本库重新克隆 ，再把修改加进去提交
5. 安装less
npm install -g less
###### 搭建less
* basic.less 默认样式
* tools.less 混合模式（可以不传参数，也可以传一个或多个参数；利用循环）
* var.less 定义变量的声明
* import.less 导入需要的文件
* index.less 导入@import "import.less";
###### 注释
* less中的注释双斜杠，同js，less中注释不会被编译到css中
* /* */在css中也可以看到此注释
> &代表本元素

& &-left 后代选择器
&>&-left 子代选择器


(function(){
    var designWidth=750;
    var fontSize=100;
    function resize(){
        var width=document.documentElement.clientWidth;
        var bili=width/designWidth>1?1:width/designWidth;
        document.querySelector("html").style.fontSize=fontSize*bili+"px";
    }
    resize();
    window.onresize=resize;
})();
