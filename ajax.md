## ajax
* Asynchronous JavaScript and XML
* 异步的js和xml
## 功能
* 一种用于快速的创建动态网页的技术
## 特点
* 通过javaScript来实现对DOM信息的获取和操作，通过xhr对象发送请求接收响应，通过xml/json/string这些格式进行信息的传递
## 相对于传统数据及交互方式的特点
* 不需要刷新或者跳转网页
* 数据的更新会更快捷
* 用户的体验会更好
* 节省网页所用带宽
# 实例化一次请求所需要的步骤
1. 实例化ajax对象
*  var xhr=new XMLHttpRequest();
*  ie6 new ActiveXObject("Microsoft.XMLHttp");
> 兼容 var xhr=window.XMLHttpRequest?new XMLHttpRequest():new ActiveXObject("Microsoft.XMLHttp");

2. 配置数据
* get 速度快，安全性略低  xhr.open("get",url?name=zhangsan,true);
    * 接收3个参数，发送方式，发送地址?查询字符串，是否异步，默认值true异步(同时触发多个请求)；false 同步， 一个一个的触发
    * 对象传入 data:{a:1,b:2}；转为data:a=1&b=2;
    ```angularjs
    if(typeof data==="object"){
                var str="";
                for (var i in data){
                    str+=i+"="+data[i]+"&";
                }
                data=str.slice(0.-1);
            }
    ```  
* post 数据量无限制 xhr.open("post",url,true);
3. 发送数据
* get xhr.send();  
* post xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xhr.send("name=zhangsan"); 设置一个请求头信息
4. 接收响应
* 通用方式： onreadystatechange 当ajax状态改变的时候触发的事件
    * 0 还没有开始请求
    * 1 请求已经配置完成
    * 2 响应开始
    * 3 响应在进行当中
    * 4 响应已经完成
* readyStyle 状态
* status 状态 是否成功请求到了数据
   * 200 成功
   * 304 当前数据在浏览器的缓存当中有直接从缓存中获取
   * 403 forbidden 禁止访问
   * 404 not found 未找到
   * 500 服务器问题
* xhr.responseText 接收响应过来的文本信息  xhr.responseXML
* onload
    * 指定接收的类型 xhr.responseType=""text/document/json/blob/arraybuffer"
    * xhr.response
    
```angularjs
xhr.onreadystatechange=function () {
            if(xhr.readyState===4){
                if(xhr.status==200){
                    var r=xhr.responseText;
                    var obj=eval("("+r+")")//以字符串进行解析
                    console.log(obj);
                }
            }
        }
```

## AJAX与jQuery
```angularjs
$.ajax("demo.php",{
        data:{a:1,b:2},
        dataType:"json",
        success:function (arr) {
            console.log(arr);
        }
    });//保存在函数上的方法
    $.ajax({
        url:"demo.php",
        data:{a:1,b:2},
        dataType:"json",
        success:function (arr) {
            console.log(arr);
        }
    });
    $.get("demo.php",{a:1,b:2},function (arr) {
        console.log(arr);
    },"json");

    $("input").click(function () {
        $.getScript("demol.js");
    });
```
### AJAX 数据获取遵循同域原则
* 协议相同
* 域名相同
* 端口号相同
### 解决跨域问题
## jsonp
> json with padding

核心：通过script标签引入的文件没有跨域问题


* 原生对象变jquery对象
$(div)
* jquery对象变原生对象
[0]
.get(0)
* 清除queue
    ````angularjs
    $("div").queue(function () {
            $(this).dequeue();
        })
        $("div").clearQueue()
    ````
### jquery插件
* 插件机制 扩展jquery的方法
#### 两种表现形式
> $.fn=$.prototype

* 扩展到jquery对象上
    ```angularjs
    $.fn.extend({aa:function () {
        alert(1)
    }})
    $("div").aa();
    ```    
* 扩展到jquery函数上
    ```angularjs
      $.extend({bb:function () {
        alert(2)
    }})
    $.bb();
    ```
