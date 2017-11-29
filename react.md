## react
facebook
* 用于构建用户界面的 JAVASCRIPT 库
### 特点
* 声明式
  React 可以非常轻松地创建用户交互界面。为你应用的每一个状态设计简洁的视图，在数据改变时 React 也可以高效地更新渲染界面。
  
  以声明式编写UI，可以让你的代码更加可靠，且方便调试。
* 组件化
  创建好拥有各自状态的组件，再由组件构成更加复杂的界面。
  
  无需再用模版代码，通过使用JavaScript编写的组件你可以更好地传递数据，将应用状态和DOM拆分开来。
  
### 
type="text/babel"
babel
 browser.js
将es6转义为es5
将JSX转化成JS

### JSX
* js的语法拓展
#### 元素
*　最外层必须是一对儿标签 虚拟DOM
* 元素之间可以互相嵌套
<div></div>

#### 渲染 render
将虚拟DOM转化为真实的DOM
ReactDOM.render(虚拟DOM，真实的DOM作为一个容器);
#### JSX {}
解析javaScript表达式(值 可以用来求值的) 
可以写 运算 三元表达式
不能写 if(){} for(){}
### 添加样式
const ele=<div className="box"></div>

### 添加事件
* 事件名 驼峰命名法 函数
function aa(){}
const ele=<div className="box" onClick={aa}></div>

### 添加行内样式
const ele=<div className="box" onClick={aa} style={{width:20,height:30}}></div>

## 组件 Component
* 组件使你可以将 UI 划分为一个一个独立，可复用的小部件，并可以对每个部件进行单独的设计。
* 组件名字首字母必须大写
### 用一个 ES6 的 class 来定义一个组件:
```
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

### props
当前组件接收到的外部属性  不能被修改，props是只读的
### state
定义组件内部的状态
* componentDidMount
diff算法
### 定义默认值
Demo.defaultProps={}
### 定义类型
```js
Demo.propTypes={
    name:React.PropTypes.string,
    age:React.PropTypes.oneOfType([React.PropTypes.number,React.PropTypes.string]),
    marriage:React.PropTypes.bool.isRequired,
    fun:React.PropTypes.func,
    student:React.PropTypes.instanceOf(Student),
    blood:React.PropTypes.oneOf(['AB','A']),
    arr:React.PropTypes.arrayOf(React.PropTypes.number),
    object:React.PropTypes.objectOf(React.PropTypes.string),
    obj:React.PropTypes.shape({
        name:React.PropTypes.string,
        age:React.PropTypes.oneOfType.number
    }) 
    tel:function(prop,propname,component){
        if(/\d{7,8}/.test(prop[propname])){
            return new Error(component+"组件当中的"+propname+"属性错误")
        }
    }
}
```
string number bool func array object element(react元素) symbol一个独一无二的数据类型
* instanceOf(Student) 值为某个类的实例
* oneOf() 要求值为提供的值的一个
* oneOfType() 值的类型为提供的类型当中的一个
* arrayOf() 数组是由某个特定的数组类型组成的
* objectOf() 对象的值为某个特定的数据类型
* shape() 验证对象内部每个属性的类型

* es6
* 可变的属性名，将变量作为属性名
var attr="name"
var obj={[attr]:"zhangsan"}

newtemp=Math.round(newtemp*1000)/1000;保留3位小数

## npm
npm install -g create-react-app
create-react-app myapp 下载安装文件夹

cd myapp
npm start
npm install -g react-router-dom  安装路由
npm run build 打包项目
npm install swiper 安装swiper插件

ctrl+C终止当前进程
* 组件化开发
####  导出两种方式
* export default Header;

const hash=window.location.hash.slice(1);
\#a  a

window.addEventListener("hashchange",function () {})

## react
npm install react-router --save
npm install react-router-dom --save
npm install -g react-router-dom

### react引入路由
* import { BrowserRouter as Router,Route} from 'react-router-dom';
* 区别在于需不需要传入属性数据
* <Route path="/" render={()=><Home cats={cats}/>}/>
* <Route path="/manage" component={Manage}/>

import {Link} from "react-router-dom";
<Link to="/manage"><div className="toplist-more">+</div></link>

exact 严格匹配
<Route path="/" exact render={()=><Home cats={cats}/>}/>

### promse
* 用来保存异步操作结果的容器

* package.json中
"proxy":"http://localhost/mvc/index.php",//发送请求的时候除了react-router的请求，其他请求都会通过代理配置的地址去完成请求

```apple js
//        promise 用来保存异步操作结果的容器
        let p1=new Promise((reslove,reject)=>{
//            完成一些异步的操作，最终会根据返回的结果调用不同的函数
            if(返回数据成功){
                reslove(返回的数据);
            }else {
                reject(new Error());
            }
        })
        
//        操作数据
        p1.then(function () {
            成功
        },function () {
            失败
        })
        p1.then((reslove函数接收的结果)=>{
//            对数据做对应的操作
        })
        
        
//        promise 只要实例化了就会立即执行 我们一般会将promise操作封装到函数中
//        promise pedding等待中 resolve完成 reject失败
//        promise 只会有一个状态，状态会发生两种改变 pedding->resolve pedding->reject 当发生这两个状态改变的时候 就会触发res 和rej
        function getata() {
            return new Promise((res,rej)=>{
//                完成一个异步操作
//                根据异步操作的结果调用res 和rej
            })
        }
        getata().then()
```

# 完成之后
打包 npm run build
index.html 路径更改为./

import img from "./1.jpg"
<img src={img}/>

###　引入插件
* npm install swiper
nodelmodels里有引入的插件文件
* import Swiper from "swiper"
* 实例化swiper
* componentDidMount(){
    var myswiper
}
* 引入swiper.css

### iscroll
* npm install iscroll
* npm install react-iscroll
* import ReactIScroll from "react-iscroll";
* import iScroll from "iscroll/build/iscroll-probe";

```
<ReactIScroll iScroll={iScroll} options={{
        mouseWheel:true,
        scrollbars:true,
        preventDefault:true,
        bounce:
    }}>
          <ul>
              {lis}
          </ul>
</ReactIScroll>
```
* 合并信息
 news=this.state.news.concat(res);
                // news=[...this.state.news,...res];
* 切换栏目page归零
if(this.catid!==catid){
            this.catid=catid;
            this.page=0;
        }
        
 // constructor(){
    //     super();
    //     this.state={
    //         value:""
    //     }
    // }
    // handleChange(e){
    //     this.fn(e.target.value)
    //     this.setState({
    //         val:e.target.value
    //     })
    // }
    
### 外卖平台分析
##### main
* id
* name
* catid
##### category
* id
* name
* parentid
##### Business
* id
* businessname
* thumb
* start
* salenum
* distance
* time
* others
* activity
##### commodity
* id
* comname
* thumb
* price
* salenum
* start
    
### 分析
1. 数据表结构理清楚、
2. 在表中添加测试数据
3. react中组件化的形式实现前台逻辑
 核心：1. 店铺和商品的呈现；2. 用户信息的呈现； 3. 订单信息的生成； 4. 所有页面的布局

* https://cdn.bootcss.com/react/16.0.0/umd/react.production.min.js
    
