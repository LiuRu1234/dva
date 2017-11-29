### 1. javascript概念
> 一门语言；
> 一门计算机语言；
> 一门计算机脚本语言；
> 一门运行在浏览器当中的脚本语言；

* 作用：可以让网页更加的生动活泼，更具有交互性
### 2. javascript的用途
* 去进行表单的验证
* 制作网页动画
* 读写html当中的内容
* 操作cookie
* 判断浏览器
* 运行在服务器端
* ......
### 3. javascript的发展历史
1992 NomBas ScriptEase

1995 Netscape livescript sun javascript Jscript

1997 ECMA-262 ISO ECMAScript实现javascript的核心语法

1999 2.0

2000 3.0

2007 3.1

**2009 5**

2015 6 ECMAScript2015

2016 ECMAScript2016

2017 ECMAScript2017
### 4. javascript的语法特点
* 他是一门基于对象和事件驱动的解释性松散型语言
    * 基于对象 javascript是面向对象的语言
    * 事件驱动
    * 解释性 由浏览器解释执行的
    * 松散型 语法定义不是很严格
### 5. javascript的组成部分
* ECMAScript javascript的核心语法
> 变量 运算符 流程控制 函数 数组 对象

* BOM 有关于javascript操作浏览器的部分
* DOM 文档对象模型 javascript操作文档的部分（页面效果）
### 6. javascript引入方式
* 链接或者是重定向
```
<a href="javascript:alert(1)"></a>

<form action="javascript:alert(2)">
    <input type="submit">
</form>
```
* 事件的后面调用
```
<div onclick="alert(3)"></div>
```
* script标签 嵌入方式
```
<script>
    alert(4)
</script>
```
* 外部引用.js文件
```
<script src=""></script>
```
> 用于引入的script标签是不能在中间写其他js代码的

> 虽然引用方式不同，也可以同时使用多种方式，但是他们之间还是相互关联相互影响的

> 分号和换行代表一行语句的结束，尽量都加分号

##### 调试
1. 工具语法，完成去掉
* alert
* console.log()在浏览器控制台展示内容，方便查看过程中的东西
* document.write()可以将内容直接输入到页面中
* console.dir
* console.table 数组是一个个的对象
* console.clear() 清空
2. 后台sourcs加断点调试

## 7. javascript的变量
> 一个存储数据的容器

### 变量的声明和赋值
##### 通过var声明
> var 变量名；

* 1. 声明的同时赋值
```
var a=1;
```
* 2. 先声明后赋值
```
var b;
b=2;
```
* 3. 一次性声明的同时赋值
```
var number1=1,number2=2,number3=3;
```
* 4. 一次性声明多个变量，然后再赋值
```
var name,age,sex;
name="张三";
```
##### 声明变量也可以使用 let es6
* var重新给一个变量赋值，或者重新声明赋值都会将变量原先的值覆盖掉
* 使用let是不能重新声明相同的变量的
##### 声明常量 const es6 不能重新声明也不能重新赋值，声明赋值必须同时执行
* 使用var声明变量会被优先解析，声明但未取得他的赋值；let没有此效果会报错，没定义
### 变量名的规范
1. 变量名是区分大小写的
2. 必须以字母，下划线，$符号开始，后边可以有数字，字母，下划线，$；
3. 不能和关键字 保留字冲突
4. 命名变量一定要有意义
5. javascript 自己的命名习惯
    * 驼峰命名法 getElementsByClassName
    * 首字母大写的方式 Object Array
## 8. javascript的数据类型

* typeof 运算符 可以用来得到某个变量的数据类型

### 初始类型
* 数值
> 整数 小数 负数 十六进制0x 八进制0o或0 二进制0b 科学计数法2e+2即200
> typeof的结果 number

* 字符串
> 单引号；双引号 ；反引号 es6 模板字符串
> typeof的结果 string

```
var str=`hello`${str2};
```
* undefined
> 变量声明了但没有赋值，就会自动被赋值为undefined
> typeof的结果 undefined

* 布尔值
> 用来表示真假的，真值true,假值false
> typeof的结果 boolean

* null
> 表示空 就是没有值 相当于是一个占位符 经常用于清空对象
> typeof的结果 object

> 一般用于清空对象；match()访问不到返回null

### 引用类型
> typeof输出为object

* 对象（函数对象 数组对象 自定义对象[正则对象，日期对象，布尔值对象。。。]）

* es6新增的 set特殊的数组（只能保存不重复的数组） map特殊的对象（可以是任意的数据类型）

> 初始类型和引用类型在内存中保存的位置不一样，初始类型保存在栈区当中，引用类型保存在堆区当中，访问初始类型直接就能够找到值，访问引用类型是先找到栈区中保存的地址，然后根据地址从堆区当中找到数据。

### 9. 运算符
#### 1.算术运算符
> 加\+  减\-  乘\*  除\  取余% 自加++ 自减-- 幂运算** es6

* 加号两个用法
    * 数值和数值相加
    * 字符串和任意的数据类型相加结果都是连接之后的新字符串
* ++--的位置问题：
    * a=b++; 先赋值后自加
    * a=++b; 先运算后赋值

#### 2.关系（比较）运算符
> \> \< >= <= == != === !==

> 运算结果就是一个布尔值

* 如果是数值和字符串进行比较js会尝试将字符串转化为数值(调用自身函数number)；如果
转化成功，比较转化之后的结果，如果转化失败，结果就是false；
* ==只比较值的大小，===比较数据类型是否相同
* 字符串和字符串之间进行比较，从字符串的第一位ASCII码进行比较，如果大小相同继续比较第二位，依次类推直到比较出大小或者字符串结束为止。
A65a97
* undefined=null 结果为true

#### 3.赋值运算符
> = += -= *= /= %=

> a=a+1;同 a+=1;

#### 4.逻辑运算符
**与 && 或 || 非 !**

* 1.对于多个布尔值进行运算得到另一个布尔值
    * 与运算 同真才为真
    * 或运算 有真则为真
    * 非运算 取反
* 2.对于多个普通的数据类型进行计算得到其中的一个值
* 将其他的数据类型转化为布尔类型
* 假值：0 NaN "" undefined false null

> var val=1&&2&&3 返回3
> var val=""||false||undefind 返回undefind
> var val=""||1||undefind 返回1

* && 与运算的时候

|值1|值2|结果|
|:----:|:----:|:---:|
|真值1|真值2|真值2|
|真值|假值|假值|
|假值1|假值2|假值1|

* || 或运算

|值1|值2|结果|
|:----:|:----:|:---:|
|真值1|真值2|真值1|
|真值|假值|真值|
|假值1|假值2|假值2|

* ！非运算
    * ！真值 假值
    * ！假值 真值

#### 5.一元运算符
* type0f new delete + - 正负值 instanceof判断是否是由某个函数实例化来的
#### 6.三元运算符
* 布尔值表达式？

当前面的表达式为真的时候 整个表达式的值:当前面的表达式为假的时候 整个表达式的值
#### 7.特殊运算符
* （）算数优先级   调用函数
* ，声明多个变量的时候，逗号起分割的作用
* ... 拓展运算符 把结构进行拓展转换 ...[1,2,3]  1,2,3
* ... 剩余运算符 [a,b,...c]=[1,2,3,4,5]

> 清空后台 console.clear();
prompt浏览器输入内容

##  javascript的流程控制
### 通过一些特定的语句让程序按照我们想要的方式去执行

### 1. 分支结构
* 选择分支
    * 单路分支
     > 判断条件为真就执行，判断条件为假就直接跳过

    ```
    if(判断条件){
        判断成功之后要执行的代码
    }
    ```
    * 双路分支
    > 判断条件为真就执行if后面{}中的代码，判断条件为假就执行else后面{}中的代码，有且仅有一条语句会被执行。

    ```
    if(判断条件){
        判断成功之后要执行的代码
    }else{
        判断失败之后要执行的代码
    }
    ```
    * 多路分支
    > 从前往后判断当前是满足哪个条件，满足哪个条件就执行哪个条件后面{}中的代码，如果都不满足，则执行else中的代码，else在多路分支当中是可有可无的，根据自己的需求决定是否要添加

    ```
    if(判断条件1){
        条件1满足的时候要执行的代码
    }else if(判断条件2){
        条件2满足的时候要执行的代码
    }else if(判断条件3){
             条件3满足的时候要执行的代码
    }
    .
    .
    .
    }else{
        所有条件都不满足的时候要执行的代码
    }
    ```
    * 嵌套分支
    > 嵌套分支没有固定的结构，根据自己的逻辑将以上三种分支结构嵌套执行

* 条件分支
    > 类似于多路分支实现的效果，根据某个变量指定个数的结果执行不同的内容。

    ```js
    switch(要判断的内容){
        case 值1：当变量值为1的时候要执行的语句；
        break;
        case 值2：当变量值为1的时候要执行的语句；
        break;
        case 值3：当变量值为1的时候要执行的语句；
        break;
        .
        .
        .
        default:当所有的值都不是的时候要执行的内容；

    }
    ```

> num1=parseInt(num1);字符串转化成数值

### 2.循环结构
* for循环
```
for(var i=0;i<5;i++){
    要重复执行的代码
}
```
* while循环
> 完全可以模拟for循环的功能

> 可以用来执行次数不固定的判断

> while所判断的条件一定是在每次执行内部代码的时候发生改变

```
while(判断条件){
    当判断条件为真的时候要执行的内容
}
```
* do while循环
```
do{
    判断条件为真的时候要执行的代码 会在没有判断之前先执行一次
}while(判断条件)；
```
* break 终止循环结构的运行
* continue 终止当前次循环结构的运行，如果下一次还满足循环条件，则继续运行
* 循环控制语句 去终止指定了名字的循环

* CSS中 table属性：

boder-collapse:collapse;去掉表格间隙

table-layout:fixed;固定表格的尺寸

## 函数
* 封装起来可以被重复调用的代码块
### 1.函数的优点
* 使代码更加简洁
* 让程序更加调理
* 维护更加容易
。。。。。。
### 2. 声明一个函数
#### 1. 通过 function 关键字(会被优先解析)
```
function 函数名(参数){
    函数要执行的内容（函数体）
}
```
#### 2. 匿名函数(必须在后面调用)
```
var fn=function(){}
div.onclick=function(){}
setInterval(function(){},1000)
```
#### 3. 实例化构造构造函数(必须在后面调用)
```
var fn=new Function("函数体");
```
### 3. 调用函数
#### 1. 函数名();   变量名();
#### 2. 事件后面调用
#### 3. 自调用 在声明的时候就被调用
* (function(){})();
* !function(){}();
### 4. 参数
* 参数分为两部分 形参和实参
    * 形参定义在函数声明过程当中的变量，
    * 实参是在调用函数的时候传递的具体的数值
* 参数本身是可有可无的
* 参数的个数是多个的
* 参数的数据类型可以是任意的数据类型
* 参数可以定义默认值
    * function fn(val=10){} es6
    * function fn(val){
        val=val||10;
    }
### 5. 返回值
* 返回值就是函数运行之后得到的值
* 如果函数没有定义返回值 返回值就是undefind
* return 值;
* 执行了return之后，此函数中后续的代码就不再执行了
* 每一个函数只能有一个返回值,写多个返回最后面的值
    * 返回数组，然后解构赋值拿到多个值
    * 返回数组然后分别获得
* return 1. 得到返回值 2. 终止函数运行
### 6. arguments
* 这个对象能够保存所有传入到函数当中的实参信息 [0,1,2,3,4,5,6]
* arguments[下标] 访问到具体的实参
* arguments.length 获取到实参的个数
* cole自身
* 遍历
```
    for (var i=0;i<arguments.length;i++){
        // console.log(arguments[i]);
    }
```
* 模拟函数重载 根据参数的个数或者类型的不同执行不同的函数体
### 7. 作用域
> 一段代码起作用的范围

* 环境
    * 全局环境 任意的位置
    * 函数环境 在某一个函数体中
    * 全局环境当中包含函数环境
#### 变量的作用域 在定义这个变量的环境当中的任意位置。

> 在函数当中声明的变量在内存中保存的空间会在函数运行结束之后释放掉。

* 节省内存当中的存储空间
* 在函数当中命名变量或者是形参就不用担心受其他函数影响。
* 全局变量：在全局环境当中定义的变量
* 局部变量：在函数环境当中定义的变量
* 当某一个变量在函数环境和全局环境都有定义的时候，在函数中访问的时候，会使用函数环境中定义的变量，全局环境中定义的变量是不会有任何影响的。
#### 函数的作用域和变量作用域拥有相同特征
* 作用域链 当我们访问某一个变量的时候，会优先从当前环境中去找有没有变量的定义，如果没有则向上一层环境当中去找，依次类推直到全局环境，如果全局环境也没有则报错。
#### 块级作用域 es6 if(){} for(){} while(){} {} 都被认为是单独的作用域
只针对let
* 用let声明的变量或者是const声明的常量，如果是在块级作用域中，那么它只能在当前块中被访问到
* let是不会被优先执行的
* 预解析顺序
    1. 先解析当前是在什么环境当中
    2. 解析当前环境中声明了哪些变量
    3. 优先执行 var function 这些代码
    4. 从上往下开始正式执行

### 1. 回调函数
* 概念：把一个函数作为另一个函数的参数使用，这个函数就被称为回调函数callback
* 用途：
    * 当做是把一个完整的函数进行拆分，主函数变得更加精简，用户可以根据自己需求
    去定义一部分功能。
    * 主函数就是用来完成特定功能的（多次的执行，按照时间执行），对于我们来说，只需要把实现的功能打包成一个函数传入即可。
    ```
    setInterval(function(){ //function(){}这个匿名函数本身就是一个回调函数
               console.log(1);
            },1000){};
    ```
    ```
    function jsq(num1,num2,callback){
        return callback(num1,num2)
    }
    jsq(1,1,function(a,b){return a+b;})

    var arr=[];
    arr.forEach(function(){})
    arr.map(function(){})
    arr.filter(function(){})
    setInterval{function(){},3000}
    div.addEventListener("",function)
    ```
### 2. 递归函数
* 概念：当一个函数在他的内部直接或者间接的调用自己的时候，我们就把这种形式称为递归调用，这个函数称为递归函数。
* 特点：
    有判断；每次调用参数不同
```
数组嵌套数组的遍历
```
### 3. 闭包函数
* 从内存角度：函数在运行结束之后，内部声明的变量没有从内存当中释放掉。这种状况就称为闭包；
* 从效果角度：在函数在运行结束之后，我们依然能够访问到他内部的局部变量
* 闭包会长时间占据内存，所以应该尽量少的使用
* 当函数a的内部函数b被函数a外的一个变量引用的时候就行成了一个闭包。
```
function aa(){
    var num=10;
    function bb(){
        num++;
        console.log(num);
    }
    return bb;
}
var out=aa();
out()//11
out()//12
```
选项卡
```
var cons=[];
for(var i=0;i<btns.length;i++){
   btns[i].onclick=(function(){
       return function(){
          cons[i].style
       }
    })(i);
}

```
### 4. ES6中，函数新增的语法
* 参数的默认值的设置
```
function fn(a=1,b=2) {

}
```
* 箭头函数
    * 对于匿名函数进行简写
```
function(v){return v*v}
v=>v*v;

function(r){return r>10}
r=>r>10;

function (a,b) {return a+b;}
(a,b)=>a+b;

function(a,b){console.log(a,b);return a+b;}
(a,b)=>{console.log(a,b); return a+b;}
```
* name 属性
    * 通过函数.name可以访问到函数的名字
### 5. 内置顶层函数
### * Number（）；
> 用来将其他数据类型转化为数值类型的函数

#### 字符串
* "123" 123
* "0x11" 17
* "123abc" NaN
* "" 0
#### Undefiend
* NaN
#### null
* 0
#### bool
* true 1
* false 0
```
        var a="123";
        console.log(Number(a));
        var a="0x11";
        console.log(Number(a));
        var a="123abc";
        console.log(Number(a));
        console.log(Number(null));
        var boo=true;
        console.log(Number(boo));
        var boo=false;
        console.log(Number(boo));
        var udf;
        console.log(Number(udf));
```
### * parseInt();
> 将字符串转换成整数类型,只取整数部分

* 能够识别的 "123" "123abc" "0x11"
* 不能够识别的 "asd" "asd11" "" 布尔值 null undefined
* 可以配置第二个参数，以几进制的方式进行解析，最终的结果一定还是一个十进制数
```
        console.log("parseInt");
        console.log(parseInt("123.123"));
        console.log(parseInt("123abc"));
        console.log(parseInt("123abc456"));
        console.log(parseInt("abc"));
        console.log(parseInt("abc123"));
        console.log(parseInt("0x11"));
        console.log(parseInt(""));
        console.log(parseInt(null));
        console.log(parseInt("11",2));
```
### * parseFloat();
> 将字符串转化为浮点型

* parseFloat可以识别小数的，不能设置第二个参数的
```
console.log(parseFloat("123.123"));
```
### * String();
> 将其他类型转换成字符串类型

### * Boolean();
> 将其他数据类型转换成布尔值

### * isNaN();
> 判断某个值是不是不能被转化（Number）为数值类型

* 算术运算
1+true=2 隐式的调用Number()转换
"2"-"1"=1  隐式的调用Number()转换
* 关系运算符
0==""  true 隐式的调用Number()转换
* 逻辑运算符
!"abcd" false  隐式的调用Boolean()转换
* 三元运算符
var a=10;
var b=a?a:20;
结果 a=10 b=10
隐式的调用Boolean()转换
* if(a){} 隐式的调用Boolean()转换

###  函数的typeof 是一个字符串function
### 1. 数组 array
* 数组是存储一系列相关数据的容器
### 2. 声明一个数组
> var arr=[90,80,70];

> var arr=new Array(1,2,3); 函数重载，如果参数只有一个就是数组的长度，参数多个就是数组各项

### 3. 下标
* 从0 开依次递增
* 通过数组名[下标]可以访问数组中的某一个数
* 通过数组名[下标]=10，可以修改或者添加数组的内容
* 数组的任意的下标都是可以访问到的，如果访问的下标有任意的值，
则得到值，如果没有对应的下标，则得到undefined
### 4. length
* 数组的长度，数组当中最后一个不是空值的值的下标加一。
```
    得到数组的长度
    console.log(arr.length);
    console.log(arr["length"]);
```
* 数组的遍历
```
for (var i=0;i<gradeArr.length;i++){
            sum+=gradeArr[i];
 }
```
* 数组当中可以存储任意数据类型的数据
### 5. 数组案例
* 筛选
```
        var arr=["aaa",12,3,54,23,"zd",345,"aaaaa",47,67,"abc"];
        var newArr=[];
        var num=0;
        for(var i=0;i<arr.length;i++){
            if(typeof arr[i]=="number"){
                newArr[num]=arr[i];
                num++;
            }
        }
        console.log(newArr);
```
* 判断
```
        var grade=[65,78,78,79,59,98,65,45,78];
        var hasfail=false;
        for(var i=0;i<grade.length;i++){
            if(grade[i]<60){
                hasfail=true;
                break;
            }
        }
        console.log(hasfail);
```
* 映射，从数组a得到数组b，数组b的个数一定是一样的，数组a中的每一个元素对应的数组b当中的每一个元素之间的关系都是一样的；
```
        var arr=[1,2,3,4,5];
        var newarr=[];
        for (i=0;i<arr.length;i++){
            newarr[i]=arr[i]*arr[i];
        }
        console.log(newarr);
```
* 去重（筛选+判断）
```
        var arr=[1,1,1,2,3,2,2,3,4,5,5,6,6];
        var newArr=[];
        var num=0;
        for(var i=0;i<arr.length;i++){
            var r=check(newArr,arr[i]);
            if(r){
                newArr[num]=arr[i];
                num++;
            }
        }
        console.log(newArr);
        //是不是没有这个数值
        function check(arr,num) {
            var has=true;
            for (var i=0;i<arr.length;i++){
                if(arr[i]==num){
                    has=false;
                }
            }
            return has;
        }
```
* 求最大值
```
var grade=[88,97,56,76,78,99,45,66];
        var max=grade[0];
        for(var i=1;i<grade.length;i++){
            if(grade[i]>max){
                max=grade[i];
            }
        }
        console.log(max);
```
* 排序
    * 法一：选择排序
    ```
    var grade=[88,97,56,76,78,99,45,66];
            for (var i=0;i<grade.length;i++){
                for(var j=i+1;j<grade.length;j++){
                    if(grade[j]>grade[i]){
                        var temp=grade[i];
                        grade[i]=grade[j];
                        grade[j]=temp;
                    }
                }
            }
            console.log(grade);
    ```
    * 法二：冒泡排序
    ```
    var grade=[5,6,4,7,3,2,8,1];
            for (var i=0;i<grade.length;i++){
                for(var j=0;j<grade.length-1-i;j++){
                    if(grade[j]<grade[j+1]){
                        var temp=grade[j];
                        grade[j]=grade[j+1];
                        grade[j+1]=temp;
                    }
                }
            }
            console.log(grade);
    ```
### 6. 二维数组
* 二维数组的遍历
```
var arr=[[56,67,68],[77,78,79],[88,89,90]]
        for (var i=0;i<arr.length;i++){
            for (var j=0;j<arr[i].length;j++){
                console.log(arr[i][j]);
            }
        }
```
* n维数组的遍历

判断一个数是不是数组 Array.isArray(arr[i])
```
var arr=[1,2,3,4,[1,2,3,4],5,6,7,[8,9]]
        for (var i=0;i<arr.length;i++){
            if(typeof arr[i]=="number"){
                console.log(arr[i]);
            }else {
                for(var j=0;j<arr[i].length;j++){
                    console.log(arr[i][j]);
                }
            }
        }
```
* n维数组的函数调用
```
var Arr=[1,2,3,[4,5,6,[7,8,9,[10,11,12]]],13,14,15,[16,17]];
        function bianli(arr) {
            for(var i=0;i<arr.length;i++){
                if(typeof arr[i]=="object"){
                    bianli(arr[i]);
                }else{
                    console.log(arr[i]);
                }
            }
        }
        bianli(Arr);
```

* Undefined出现的情况：
 1. 变量声明了但没有赋值
 2. 函数没有返回值
    ```
       function show(){};
       console.log(show());  // undefined
    ```
    ```
       function show(){};
       console.log(show);   // function show(){};
    ```
 3. 函数没有传参时
    ```
       function show(a){}
       console.log(show());  //undefined
    ```
 4. 在数组中 访问它没有对应值的下标 会得到undefined

* 初始类型传值，引用类型传址

## 对象的定义
### 1. 对象的概念
所有客观存在的事物，和抽象的规则计划或者事件等。

属性的无序集合体（代码的角度）
### 2. 属性
* 属性 可以用值来描述的属性
* 方法 用函数来描述的属性
### 3. 一切皆对象
数组 函数 字符串 数值 布尔值。。。。。。
### 4. 类 es6
* 对于具有相同或者相似属性的对象的抽象描述。类的具体化（实例化）就是对象。
* 在js当中通过构造函数来实现类的。
* 在js当中得到一个对象就可以通过实例化构造函数
```
//es6
class Human{//定义类
    constructor(name,age){//默认函数必须有的
        this.name=name;
        this.age=age;
    }
    //方法直接后面写
    say(){
        alert(this.name);
    }
}
var someone=new Human("as",17);
```
## 语法
### 1. 得到对象的方式
* JSON方式

 javascript的原生对象描述法。就是在js中清楚地展示一个对象内部结构的语法。

属性名：值 这种形式可以直接被替换为一个变量，变量名就是属性名 变量值就是属性值

es5外面定义后可直接写变量名

es5新增最后一个变量值后面可以加逗号
```
    var person={name:"张三",age:17,sex:"男",walk:function () {
        console.log("走路");
    }};
    console.log(person.name);
    person.walk();
```
* 实例化构造函数的形式
    * es6新增class
    * 自己定义构造函数
    ```
    function Human(){
        //this 将要实例化的对象
    }
    ```
    * 实例化
    ```
    var arr=new Array();
    var fn=new Function();
    ```
* 实例化顶层构造函数 Object
    ```
    var human=new Object();
    ```
### 2. 对象属性的添加
* 在使用之前就已经添加好的 在JSON或者在构造函数当中
* 在使用的时候可以继续添加
    * 对象.属性=值；
    * 对象[变量名]=值；
* 无论通过哪种方式添加，最终的效果是完全一样的，也就是说在使用的时候是没有任何区别的
### 3. 对象属性的访问
* 对象.属性
* 对象.方法();
* 对象[变量名]
* 对象\[变量名]();
### 4. 对象属性的遍历 for in
* for(var i in obj){
    console.log(obj[i]);
};
### 5. 对象属性的删除
* delete
```
var obj={name:"zgangsan"};
delete obj.name;
//delete obj["name"];
console.log(obj.name)//undefined
```
### 6. 清空对象
* null
* 释放内存中对于对象地址的引用，用一个null占据对象原来的位置，没有被引用的对象会被js的垃圾回收机制在某一个时刻彻底从内存中删除。
### 7. 对象和构造函数的关系判断
* instanceof 可以判断某个对象是否是由某个构造函数实例化出来的
```
function Human(){
    var someone=new Human();
    console.log(someone instanceof Huamn);//true
    console.log(someone instanceof Object);//true
}
```
* 任何一个对象和object构造函数进行判断，结果都为真

## 继承
* 在js中，每一个对象都可以通过一些方式拥有另外一个对象的所有的属性和方法，这种形式我们称为继承，在这里我们所说的另一个对象就是当前这个对象的原型
* 实现继承 两种方法
    * 将当前的构造函数的prototype属性赋值为原型对象就可以继承
    * 对象冒充  call/apply
    * .call的参数列可变，.apply 以数组作为参数
    ```
    function Human(name){
        this.arms=2;
        this.name=name;
    }
    function Student(name){
        human.call(this,n)
    }
    var someone=new Student("lisi");
    //{arms:2,name:"lisi"}
    ```
* class继承 es6
    * extends super()
    ```js
    class Human{
            constructor(name){
                this.name=name;
            }
        }
        class Student extends Human{
            constructor(name){
                super(name);//类似于call
            }
        }
        var student=new Student("zhangsan");
    ```

## this
* 在构造函数中 构造函数的prototype属性，也就是将要实例化出来的对象的原型
* 在普通函数中 this指的就是window对象
* 如果是某一个对象的方法，无论这个方法是在哪里定义的，方法当中的this指的都是当前调用这个方法的对象
* call/apply 改变当前函数在调用的时候this所代表的对象


color-themes.com

传值传址

## 深拷贝，浅拷贝
```
//       浅拷贝
        var obj={
            name:"zhangsan",
            age:17,
            sex:"nan",
            grade:{math:85,English:90}
        }
        var newobj={}
        for (var i in obj){
            if(typeof obj[i]!="object"){
                newobj[i]=obj[i];
            }else{
                newobj[i]={};
                for (var j in obj[i]){
                    newobj[i][j]=obj[i][j];
                }
            }
        }
        newobj.grade.math=100;
        console.log(newobj);
        console.log(obj);
//深拷贝 深层次拷贝复制的过程
        var obj={
            name:"zhangsan",
            age:17,
            sex:"nan",
            grade:{math:85,English:90},
            friends:[{name:"lisi",age:17},{name:"xiaoming",age:18}]
        }
        function deepCopy(obj) {
            if(Array.isArray(obj)){
                var newobj=new Array();
            }else{
                var newobj=new Object();
            }
            for(var i in obj){
                if(typeof obj[i]=="object"){
                    newobj[i]=deepCopy(obj[i]);
                }else{
                    newobj[i]=obj[i];
                }
            }
            return newobj;
        }
        var newobj=new deepCopy(obj);
        newobj.grade.math=100;
        newobj.friends[0].name="wangwu";
        console.log(newobj);
        console.log(obj);
```
## 对象的分类
#### 1. 原生对象(实例化得到)
* Array
* String
* Function
* RegExp 正则对象
* Date 日期对象
```
let date2=new Date(2017,0,1,12,0,0); 日期对象的月份从0到11
date.getYear() 从1900年开始的长度
getFullYear() 正确年
date.getDay() 得到0-6星期
date.getTime() 1970.1.1到当前日期对象表示的时间为止所经历的毫秒数
```
* Boolean
* JSON
* Object
* Number
* Math
* 本地对象 没有构造函数 不需要实例化在js当中直接存在的对象 Math 数学对象 全局对象window
#### 2. 宿主对象（获取得到）
* BOM 浏览器对象模型 history location screen document
* DOM 文档对象模型document 整个页面当中所有的标签对象

# Array数组对象
### 1. 数组属性
* length
* constructor 代表当前对象的构造函数
### 2. 方法
#### ECMAScript3.0
> ie6 ie7 ie8 都是支持的

* 数组的增删

    |方法|参数|返回值|作用|
    |:----:|:----:|:----:|:----:|
    |push|一个或者多个数值|新数组的长度|在数组的末尾添加一个或者多个值|
    |pop|无|被删除的元素|从数组的末尾删除一个元素|
    |unshift|一个或者多个数值|新数组的长度|在数组的开始位置添加一个或者多个值|
    |shift|无|被删除的元素|在数组的开始位置删除一个元素|
    |splice|位置，删除的个数，添加的内容...|被删除的元素组成的数组|在数组的任意位置进行添加删除替换等操作|

* 数组的转换
 join  根据数组得到一个字符串参数为数组当中的成员的连接符(将数组转化为字符串)
* 数组的截取
 slice 截取数组中的某一段作为一个新数组返回 参数为截取的位置 可以是一个可以是两个 可以是负值
* 数组的拼接
 concat 将参数数组连接到当前数组的后面返回连接之后的数组
 参数就是一个数组
* 数组的排序
 sort 默认是按照ASCII码排序，如果需要自己定义 需要传递一个回调函数
 ```
 var arr=[1,2,3,11,22,33];
 从小到大进行排序
 arr.sort(function(a,b){
    if(a>b){
        return 1;
    }else{
        return -1;
    }
 })
 ```
#### ECMAScript5.0
> ie6 ie7 ie8 不支持

* forEach遍历
接收一个回调函数作为参数，回调函数包含两个参数  分别代表数组的值和下标
```
    var arr=[1,2,3,"sf","sdsd"];
    Array.prototype.myforEach=function(callback){
        for(var i=0;i<this.length;i++){
            callback(this[i],i);
        }
    };
    arr.myforEach(function(value,index){
        console.log(index,value);
    });
```
* filter过滤
接收一个回调函数作为参数，返回过滤之后的数组，是否过滤成功取决于回调函数是否返回真值
```
    var arr=[1,2,3,"sf","sdsd"];
        Array.prototype.myfilter=function (callback) {
            var newarr=[];
            for(var i=0;i<this.length;i++){
                var r=callback(this[i],i);
                if(r){
                    newarr.push(this[i]);
                }
            }
            return newarr;
        }
        var r=arr.myfilter(function (value,index) {
            if(typeof value=="number"){
                return true;
            }
        })
        console.log(r);
```
* map 映射
接收一个回调函数作为参数，最终返回的是一个新数组，新数组中的每一个值就是回调函数每次运行的时候返回的结果。
```
Array.prototype.mymap=function (callback) {
        var newarr=[];
        for(var i=0;i<this.length;i++){
            newarr[i]=callback(this[i],i);
        }
        return newarr;
    }
```
* some 判断
    * 接收一个回调函数，回调函数会返回一个布尔值，如果返回值有真值，那么some方法就会返回真值
* every 判断
    * 接收一个回调函数，回调函数会返回一个布尔值，如果返回值都为真值，那么every方法就会返回真值
* indexOf
    * 接收一个值，返回的是这个值在数组当中第一次出现的位置，找不到就会返回-1
* lastIndexOf
    * 接收一个值，返回的是这个值在数组当中最后一次出现的位置，找不到就会返回-1
* reverse
    * 将数组的索引值颠倒
* reduce
    * 对数组进行类似于累加运算这种形式的运算
* reduceRight
    * 功能同reduce 但是运算是从右往左的

#### ECMAScript6 2015 es6
* 新版本谷歌浏览器支持的最好
* find()
    * 从数组中查找某个元素并返回，找不到反undefined
* findIndex()
    * 从数组中查找某个元素并返回他的索引值，找到返回true，找不到返-1
* fill()
    * 使用传入的参数将数组填充满
* includes()
    * 判断数组当中是否包含某个元素的方法，有则返回真值
* copyWithin()
    * 复制数组当中的某一部分内容替换掉另一部分
* Array 构造函数的方法
    * Array.isArray()
    判断某个值是否为数组类型
    * Array.from()
    将某个非数组类型的值转化为数组类型
    * Array.of()
    根据传入的参数创造一个数组，数组中只有一个值

## String字符串对象
### 1. 字符串属性
* length
* []下标//ie8以下没有此属性
* constructor
### 2. 字符串的方法
#### 获取
* charAt(接收索引值)
   * 获取指定位置的字符串
* charCodeAt(接收索引值)
   * 获取指定位置的字符串的Unicode编码
* String.fromCharCode(unicode码)
   * 根据传入的Unicode编码得到对应的字符串
#### 查找
* indexOf
   * 查找某个字符串在整个字符串当中第一次出现的位置
* lastIndexOf
   * 查找某个字符串在整个字符串当中最后一次出现的位置
* replace("","")
    * replace(//g,"")正则替换可替换全部
       从整个字符串中查找到匹配的字符串并替换为另一个字符串，若字符串中有多个只能替换一个,替换的内容可以用+号连接
* match() 
    * 可在字符串内检索指定的值，或找到一个或多个正则表达式的匹配
* search() 
    * 正则查找位置 强化版的indexof

#### es6
* includes
   * 判断在整个字符串当中是否包含某个字符串
* startsWith("",n)
   * 判断字符串是否是以某个字符串开始的，第二个参数表示的是开始判断的位置
* endsWith("",n)
   * 判断字符串是否是以某个字符串结束的，第二个参数为判断的结束位置
#### 截取
* slice()
   * 和数组当中的用法一样
* substring()
   * 和slice功能类似，只不过不能传负值
* substr(位置，个数)
   * 接收两个参数，第一个表示要截取的位置，第二个表示要截取的长度
#### 转换
* split("分隔符",最大长度)
    * 将字符串转化为数组的方法，第一个参数是分隔符，第二个参数为转换之后的数组的最大长度，超出最大长度会被直接去掉
    * 使用正则
* toUpperCase将字符串转化为大写
* toLowerCase将字符串转化为小写
#### 去空格 es5
* trim 用来去除字符串两端空格的方法
## Math对象
* Math.abs()   absolute 绝对值
* Math.round() 四舍五入取整
* Math.floor() 向下取整
* Math.ceil() 向上取整
* Math.max(2,4,2,1) 求最大值
    * es6 扩展运算符...[1,2,3] 变为1,2,3 把数组类型转化为参数类型
    **fn(...arr)；**
    * Math.max(...grade)
    * Math.max.apply(undefined,grade);
* Math.min(2,4,2,1) 求最小值
    * es6 扩展运算符...[1,2,3] 变为1,2,3 把数组类型转化为参数类型
      **fn(...arr)；**
* Math.random()
    求随机数,默认产生0到1之间的小数
    *范围差+最小值
* Math.pow(x,y) x的y次方
* Math.sqrt() 求根
* Math.sin()  求正弦值
    * .toFixed() 保留几位小数，但会把小数转换为字符串，加parseFloat()
* Math.cos() 求余弦值
* Math.tan() 求正切值
* Math.asin() 反正弦
* Math.acos() 反余弦
* Math.atan() 反正切
* Math.PI  属性π值
* 角度转化为弧度 角度*Math.PI/180

# DOM
> DOM document object model

### 对于DOM操作的方式
#### 1. 获取元素
* var divEle=document.querySelector(".btn");返回文档中匹配指定 CSS 选择器的一个元素。
#### 2. 添加事件
#### 3. 对于元素做对应的操作
* 包括对于元素属性的修改 或者是css样式的修改
* console.dir()可以查看元素中的属性和方法
* console.clear()清除
* console.table() 以表格形式输出
* console.log()
* var divEle=document.querySelector(".btn");返回文档中匹配指定 CSS 选择器的一个元素。


## DOM的API
### 1. document对象
#### 属性
* title 文档title标签的内容  可读可写
* URL 当前文档的地址 未定义undefined 可读不可写
* body body标签（元素对象）只读
* head head标签
* all 获取页面当中所有的元素对象集合 （伪数组）只读
* links 链接集合
* images
* forms 可以访问所有表单对象集合
* documentElement.clientWidth 获取浏览器窗口的宽度
* documentElement.clientHeight 获取浏览器窗口的高度（低版本）
#### 方法
* querySelector(); 通过一个css选择器从文档当中获取对应的元素对象。如果选择器选择中一个集合，那么会得到集合中的第一个元素，如果选择不到任何元素，则返回null
* querySelectorAll(); 通过一个css选择器从文档当中获取对应的元素对象集合（伪数组）。如果选择器只选择中一个集合，那么会得到只有一个元素的集合，如果选择不到任何元素，则返回空对象[];
> 以上这两个方法 ie9 以下不支持

* getElementsByTagName(); 通过标签名获取元素对象的集合
* getElementById(); 通过id获取元素
* getElementsByName(); 通过name属性获取表单对象元素集合
* getElementsByClassName(); 通过类名获取元素对象集合 在ie9以下不支持
> 这四种方法只接收名字而不是选择器

* document.creatElement() 创建元素

### 2.元素对象
> 通过获取的方法，从文档当中获取的标签在js当中的表现形式

#### 事件
> 用户对于文档的一些操作或者是浏览器自身的一些行为

* onclick 鼠标单击事件
* onmouseover 鼠标经过事件
* onmouseout 鼠标离开事件
* onload 表示当前文档加载完成 在window上添加
* transitionend 表示过渡效果结束 h5新增的js事件
* animationend表示的是动画效果的结束
* onfocus 获得焦点
* onblur 失去焦点
* onchange 内容改变并且失去焦点
* onscroll 当容器的内部发生滚动的时候触发
* ondblclick 鼠标双击事件 //避免不了触发2次单击事件
* onmousemove 鼠标移动事件
* contextmenu 鼠标右击事件
    .addEventListener("contextmenu",function(){})
* onwheel 鼠标滚轮事件 //兼容性比较严重
* onmousedown 鼠标点击按下事件
* onmouseup 鼠标抬起事件

#### 键盘事件
* onkeydown 键盘按下事件
    document/window/document.body/input可编辑的都能识别
    contenteditable div的可编辑能力
* onkeypress 键盘按压事件
* onkeyup  键盘抬起事件
#### 浏览器事件
* onresize 浏览器窗口尺寸发生改变时触发的事件

### 属性
* 内容操作
    * innerHTML 获取或者修改某个标签的内容 识别html标签，可以通过innerHTML属性创造元素。
    * textContent 获取或者设置某个标签的文本内容 不识别html标签。设置这个属性之后会把原先的内容（包括标签）覆盖掉
    * textContent 在ie9以下是不支持的。 ie支持 innerText
    
* 样式操作
    * className 获取或者是修改某个元素的类名
    * id 获取或者修改某个元素的id
    * style 获取或者修改某个元素的行内样式
        * style.属性名="属性值"
        * style.cssText="属性名：属性值；属性名：属性值；" 定义多个样式,不能换行
    * classList 操作控制某个元素的类名
        * add（）给元素添加一个类名
        * remove（）移除元素的某个类名
        * toggle（）切换是否有类名的状态
        * contains() 判断是否包含某个类名
       
    * 获取元素对象的某一个样式
        * window.getComputedStyle(div,null).;
        * ie9以下 div.currentStyle
    * 获取元素的尺寸
        jquery :
        * offsetWidth 某个元素在页面当中实际所占据的宽度
        * offsetHeight 某个元素在页面当中实际所占据的高度
    * 获取元素的位置
        $.offset  position.left 相对于父元素
        * offsetLeft
        * offsetTop
        * 前辈元素有定位属性
        > 当前元素的 左/上 边缘距离有定位属性的前辈元素padding-box的 左/上 边缘的值

        * 前辈元素没有定位属性
        > 当前元素的 左/上 边缘距离文档的 左/上 边缘的值
        
    * 获取某个元素内部元素超出它顶部/左边的值
        > 可以获取也可以赋值

        * scrollLeft
        * scrollTop
        * 获取浏览器窗口的scrollTop值
            * 火狐 document.documentElement.scrollTop
            * 谷歌 document.body.scrollTop

#### 方法
* querySelector(); 从标签的内部选择元素进行获取
* querySelectorAll();
* addEventListener(事件名称，事件处理程序);  添加事件监听 可以给同一事件源天剑多个相同的事件 事件处理程序中的this 指的是当前的事件源
* removeEventListener();
移除事件监听 ，参数和添加一样，事件处理程序必须以函数名的形式进行传递
* 在ie9以下添加 div.attachEvent("onclick",fn)
* 在ie9以下移除 div.detachEvent("onclick",fn)
### 解决兼容性问题的办法
> 写函数

* 需要解决一个问题 （获取元素css样式）
* 需要再低版本的ie浏览器兼容
* 如果碰到有兼容性问题
（getComputedStyle/currentStyle）;
* 自己创建一个函数
* 在函数里面把兼容问题解决了
* 判断当前是在哪个浏览器当中
* 判断之后使用各自对应的方式来完成操作
* 使用函数

## 节点
 每一个标签 每一个属性 每一个内容 每一个注释 以及整个文档在DOM结构树当中都被认为是一个节点

 每一个节点都是一个对象

### 节点的属性和方法
#### 节点之间互相访问的属性
* parentNode 获取父节点
* childNodes 获取子节点们
* firstChild 第一个子节点
* lastChild 最后一个子节点
* .nextSibling 获取下一个兄弟节点 没有返回null
* .previousSibling 获取上一个兄弟节点
---
* 新增的
* firstElementChlid 获取第一个元素子节点
* lastElementChlid 获取最后一个元素子节点
* nextElementSibling 获取下一个元素兄弟节点
* previousElementSibling  获取上一个元素兄弟节点
---
文档节点 document

获取属性节点
* 元素节点 可以通过attributes属性访问它自身的属性节点集合
    attributes[] 某个元素的属性的集合的一个

#### 节点的信息属性
* nodeType 节点的类型
* nodename 节点的名称
* nodeValue 节点的值

|节点类型|nodeType|nodeName|nodeValue|
|:---:|:---:|:---:|:---:|
|元素节点|1|大写的标签名|null|
|属性节点|2|属性名|属性值|
|文本节点|3|#text|文本内容|
|注释节点|8|#comment|注释内容|
|文档节点|9|#document|null|

### 节点的方法
* 创建一个新的元素节点的方法
    document.createElement("标签名");
* 将某个元素节点插入到文档当中
    父元素.appendChild(新节点)
    > 插入已有的节点，会将已有的节点移除到插入地点

* 另外一种插入的方式
    父元素.insertBefore(元素1，元素2);
    将元素1插入到元素2之前
* 删除一个元素节点的方法
    父元素.removeChild(被移除的子元素)；
* 克隆一个元素节点的方法
    元素节点.cloneNode(true); 返回克隆的元素，参数为true 表示连带内容一起克隆

* setAttribute(属性名，属性值) 设置属性
* getAttribute(属性名) 获取属性
* createAttribute(属性名); 创建一个属性节点
* setAttributeNode();  设置一个属性节点

jquery append appendTo()

## 事件
* 用户对于文档的一些操作或者是浏览器自身的一些行为
## 事件对象
* Event 对象代表事件的状态，比如事件在其中发生的元素、键盘按键的状态、鼠标的位置、鼠标按钮的状态。
### 1. 事件
#### 鼠标事件
* onclick 鼠标单击事件
* onmouseover 鼠标经过事件
* onmouseout 鼠标离开事件
* ondblclick 鼠标双击事件 //避免不了触发2次单击事件
* onmousemove 鼠标移动事件
* contextmenu 鼠标右击事件
    .addEventListener("contextmenu",function(){})
* onwheel 鼠标滚轮事件 //兼容性比较严重
    * div.onmousewheel=function(e){};//谷歌e.detail
    * div.addEventListener("DOMMousescroll",function(){})//火狐 e.wheelDate
    * 不同浏览器判断方式不同
    * 新方法兼容有问题，so找插件
    * div.onwheel=function(e){
        console.log(e.deltaY);
    };
* onmousedown 鼠标点击按下事件
* onmouseup 鼠标抬起事件

#### 键盘事件
* onkeydown 键盘按下事件

    document/window/document.body/input/textarea可编辑的都能识别
    contenteditable div的可编辑能力
* onkeypress 键盘按压事件
* onkeyup  键盘抬起事件
#### 表单事件
* onfocus 获得焦点
* onblur 失去焦点
* onchange 内容改变并且失去焦点，事件触发在onblur的前面
* onsubmit 表单提交时
* onreset 表单重置时
#### 其他事件
* onresize 浏览器窗口尺寸发生改变时触发的事件
* onload 表示当前文档加载完成 在window上添加
* transitionend 表示过渡效果结束 h5新增的js事件
    * ("webkitTransitionend",function(){})
* animationend表示的是动画效果的结束
* onscroll 当容器的内部发生滚动的时候触发

### 2. 事件的添加
* 事件源 div
* 事件 onclick
* 事件处理程序 function(){}

* div.onclick=function(){}

    事件处理程序中的this都是指向事件源
* addEventListener(事件名称，事件处理程序);

    添加事件监听 可以给同一事件源添加多个相同的事件 事件处理程序中的this 指的是当前的事件源

* ie9 以下添加事件监听
div.attachEvent("onclick",fn)

### 3. 事件的移除
* div.onclick=null;
* div.removeEventListener("click",事件处理程序的名字)
移除事件监听 ，参数和添加一样，事件处理程序必须以函数名的形式进行传递
* ie9 以下添加事件监听
div.detachEvent("onclick",fn)
### 4. 事件对象
* 事件对象 （语法角度）事件处理函数在被调用的时候浏览器给我们传递的一个参数
* 事件对象 （功能）用来保存事件在触发的时候产生的一系列有关于这个事件的信息的对象
#### 事件对象的属性
|属性|值|
|:---:|:---:|
|screenX|距离屏幕左边的值|
|screenY|距离屏幕上边的值|
|clientX|距离浏览器窗口左边的值|
|clientY|距离浏览器窗口顶部的值|
|pageX|距离文档左边的值|
|pageY|距离文档顶部的值|
|offsetX|距离事件源左边的值|
|offsetY|距离事件源顶部的值|


## 事件流
### 概念
当我们触发某个元素身上的事件的时候，元素的所有前辈元素包括整个页面都会按照特定的顺序响应这个事件，这种事件触发的形式我们称为事件流
* 事件流分为两类
    * 冒泡型事件流 事件流的触发顺序是由明确的事件源到最不明确的事件源依次触发
    ```
    addEventListener("",function(){},false);默认冒泡型
    ```
    * 捕获型事件流 事件流的触发顺序是由最不明确的事件源到最明确的事件源依次触发
    ```
    addEventListener("",function(){},true);
    ```
    捕获型事件流在触发完成之后还是会触发冒泡型事件流的

### 2. 阻止事件流的传播
* 事件对象.stopPropagation();
* ie9以下 window.event.cancelBubble=true;
* 引入hover.js
* mouseinter mouseleave
* jQurey 中hover()
#### 阻止浏览器默认行为
* 事件对象.preventDefault();
* ie9以下 事件对象.returnValue=false;
```
//兼容IE阻止浏览器默认行为
        var ev=e||window.event;
        if(ev.preventDefault){
            ev.preventDefault();
        }else {
            ev.returnValue=false;
        }
```
###### 属性
* e.type 获取事件名称
* 进度条
    * e.loaded 上传进度
    * e.total 上传的总长度
* 滚轮事件的属性
.onwheel
 > 不同浏览器 不同设备 对delta的设置的值都不同
 一般使用插件完成
 > 判断方向 deltaY 往上 正值 往下 负值
#### 事件委派
* 当我们要给某些元素添加事件的时候，有时候会选择不直接添加的方式（比如ajax请求后生成的内容），我们会给这些元素的父元素添加事件，通过e.target获取真正的目标事件源来添加操作。这种形式就是事件委派，在jquery中可以通过on传递第二个参数为选择器来实现事件委派或者是delegate方法（自己查看）。

* 一打开网页并不能找到，比如ajax请求后生成的内容
* 子元素过多的时候
```
box.onclick=function (e) {
        let target=e.target;//当前事件从谁身上开始冒泡的，目标事件源
        console.log(target)
        if(target.className==="item"){
            target.style.background="#000"
        }
    }
```

## 键盘事件
### 键盘属性
|属性|值|
|:---:|:---:|
|target|目标事件源 直接事件源 当前事件是从哪里开始冒泡的 e.target指的就是谁|
|keyCode|获取键盘码|
|ctrlKey|ctrl键是否处于被按下的状态|
|shiftKey|shift键是否处于被按下的状态|
|altKey|alt键是否处于被按下的状态|
## 移动端的事件
### 原生
#### 事件
* touchstart 相当于onmousedown
* touchmove 相当于onmousemove
* touchend 相当于onmouseup
* 依然支持click
#### 属性
* changedTouches 当前事件源身上发生变化的触摸对象
* targetTouches 当前事件源身上的触摸对象
* touches 保存文档所有触摸对象

* 防止命名干扰，
1. 自调用
2. es6直接花括号包


> data-id属性

* 隐藏方式：
> visibility:hidden;  看不到但占据位置

> display:none; 看不到不占位置

> hidden h5直接在标签中使用 看不到不占位置

* 防止用户操作过快：
    * 点击 添加开关
    * 滑动 添加时间延迟setTimeout
* 0 3 6 9 c f  web安全色


# BOM
> Browser object model 浏览器对象模型

## 分类
* window
* document
* location 地址栏对象
* history 历史记录对象
* screen 屏幕对象
* navigator 浏览器
### 1. window
> window对象是一个全局对象，window的一些属性和方法在调用的时候可以不加window
> 声明的变量和函数都会被默认当做window对象的属性和方法

#### 属性
* document location history screen navigator 都是window对象的属性
* innerWidth innerHeight

    代表当前浏览器窗口的宽度和高度
* top 当前窗口的顶层窗口（针对帧窗口iframe）
#### 方法
* alert()
* prompt() 视觉效果不可控
* confirm() 带有确定或取消按钮的提示框，返回布尔值
* setInterval(function(){},1000) 时间函数，每隔一段时间调用一次传递的回调函数
* clearInterval(); 用于清除指定的时间函数
* setTimeout() 时间函数 会在延迟一段时间之后调用一次回调函数
* clearTimeout()
### 2. history
> 当前打开的网页的历史记录

#### 属性
* length 当前网页历史记录的条数
#### 方法
* forward() 让当前网页跳转到历史记录的下一条
* back（）让当前网页跳转到历史记录的上一条
* go() 接收参数1 进入下一条,0 刷新网页，-1进入上一条
### 3. location 地址栏
> 协议  ：http,https,file本地

> 主机名 ：www.tmail.com localhost  IP地址

> 端口号 ： :63342   :80默认端口不显示

> 路径部分

> 查询字符串 ？&

> 锚链接地址 #

#### 属性
* href 访问全部地址
* protocal 访问当前的协议
* host 主机名+端口号
* hostname 访问主机名
* port 访问端口号
* pathname 访问路径部分
* search 查询部分
* hash 访问锚链接
> 都可以获取可以赋值

#### 方法
* reload() 刷新，重新加载
* assign("地址") 跳转，可以再次跳转回来
* replace（"地址"） 跳转到另一个页面，不可跳转回来
### 4. screen
#### 属性
* height
* width
### 5. navigator

* 获取宽高两种方式：
1. innerWidth innerHeight
2. documentElement.clientWidth 获取浏览器窗口的宽度
   documentElement.clientHeight 获取浏览器窗口的高度（低版本）

# 解构赋值 es6
### 1. 数组当中的解构赋值
#### 语法
```
    var [a,b,c]=[1,2,3];//1 2 3
    var [a,b,c]=[1,2]; //1 2 undefined
    var [a,b,c]=[1,,3]; //1 undefined 2
    var [a,b,c]=[1,null,3]; //1 null 3
    var [a,b]=[1,2,3]; //1 2
    var [a,,c]=[1,2,3]; //1,3
```
* 解构赋值模式匹配
```
    var [a,[b],c]=[1,[2],3];
    var [a,[[b],[c]]]=[1,[[2],[3]]];
```
####  运用
* 值交换   交换数值
```
    var a=1;
    var b=2;
    [a,b]=[b,a];
```
* 传参 解构赋值可以运用在函数传参数过程中
```
    var arr=[10,20];
    function sum([num1,num2]) {
        return num1+num2;
    }
    sum(arr);
```
* ...扩展运算符（数组转非数组）
```
//    [1,2,3]  1,2,3
    var arr=[1,2,3,4,5]
    Math.max(...arr); //5
```
* ...剩余运算符（非数组转数组）只能剩余最后一个变量rest
```
    var [a,b,...c]=[1,2,3,4,5]; //1 2 [3,4,5]
```
### 2. 对象当中的解构赋值

* 嵌套对象
```
var obj2={name:"zhangsan",son:{name2:"lisi"},grades:[98,99]};
    var {name,son:{name2},grades:[a,b]}=obj2;
```

## 其他类型
* 数值 字符串 都是可以进行解构赋值的

# 面向对象
* 编程思维 编程方式
## 面向过程
* 碰到一个需求（获取元素）---> 做一个对应的操作（document.querySelector()）--> 另外一个需求（添加事件）--> 做一个对应的操作（onclick...）...
## 面向对象
* 写一个构造函数--> 实例化一个对象
* 分析清除这个需要什么功能和特点--> 分析这个对象需要有什么属性和方法--> 构造对象
### 面向对象编程的好处
* 更贴近现实，更加合理，更加简洁，当今很多编程采用的
* 开发人员：把程序大部分隐藏，将一些接口显现使用，提高了安全性
* 使用人员：关注点更少，使用更加简单
### 面向对象的三个特性
* 封装
* 继承 
* 多态 （类似Js里函数重载）
```
//es5
function Human(name,age) {
    this.name=name;
    this.age=age;
}
Human.prototype={
    aa:function(){
    }
}
//或者这样写方法
 Human.prototype.aa= function () {
 }
var someone=new Human("as",17);
someone.aa();
//es6
class Human{//定义类
    constructor(name,age){//默认函数必须有的
        this.name=name;
        this.age=age;
    }
    //方法直接后面写
    say(){
        alert(this.name);
    }
}
var someone=new Human("as",17);
```

# RegExp 正则对象
* 一个用来描述或者匹配一系列符合某个语法规则的语言 在js中的体现就是正则对象
## 用途
* 内容的检索 文本的替换 数据的验证 用来实现普通的字符串实现不了的查找替换拆分等操作
## 语法
### 如何得到一个正则对象
* 实例化构造函数
* 字面量的形式
### 方法
* text() 用来判断某个字符串是否匹配当前的正则
* exec() 从字符串当中解析出匹配当前正则的内容
### 语法
#### 定界符
* /表示正则的范围/
* ^ 匹配的是字符串开始的位置
* $ 匹配的是字符串结束的位置
* \b 会匹配每一个单词的边界
* \B 匹配每一个非单词边界的位置
#### 元字符 在正则当中表示一些特殊含义的符号 要用它本身的含义需要转义
* | 表示或者的意思
* \ 转义字符
* \- 表示范围
* （）表示分组
* [] 表示一个原子表
* . 表示任意一个字符
* \* ? + ^ $ / 都属于元字符

#### 模式匹配
* g (global)全局
    * 实例化构造函数，作为第二个参数
    * 字面量的形式 \uek\g
> 在进行检索的时候，下一次调用检索方法的时候会从上一次的结束位置继续去寻找
> 在进行替换的时候，会一次性匹配所有符合规则的内容 进行替换
* i 表示不区分大小写
> 两者都有/ /gi;

#### 原子 正则当中最小的一个单位
* \s 一个空格
* \S 一个非空格的字符
* \d 匹配一个0到9之间的数字 [0-9]
* \D 匹配一个非数字 [^0-9]
* \w 匹配 a-z A-Z 0-9_ [a-zA-Z0-9_]
* \W 除了 a-z A-Z 0-9_ 的字符 [^a-zA-Z0-9_]
#### 原子表 自己定义原子的规则
* [] [a-z]表示a到z当中任意一个字母
* [^]  [^a-z]除了a到z字母以外的其他内容

#### 量词 用来定义某个原子或者原子组、原子表的个数的
* \+ 匹配一个或者多个 尽量多的匹配
* \* 匹配0个或者多个 尽量多的匹配
* ? 匹配0个或者1个 尽量多的匹配
* {5} 匹配5个 尽量多的匹配
* {1,3} 匹配一个到三个 尽量多的匹配
* {3,} 匹配三个以上 尽量多的匹配

* 贪婪 与 吝啬
    * 尽量少的匹配 在量词的后面 加一个?
* 反向引用
    * \1  \2  \3   \4
    * \1 当前位置和正则当中定义的第一个()的内容是相同的
* 取消反向引用 避免某一个括号被反向引用
    * (?: )
#### 字符串当中可以使用正则的方法



* ? 量词，几个，正则变吝啬，不需要被反向引用


## 表单
### 获取
* document.forms 获取全部表单
* document.forms.classname
* document.forms.idname
* document.forms[0]
* document.name
    ```
    let form1=document.form1;
        console.log(form1.elements.a)
        console.log(form1.elements[0])
    ```
    * 快速获取
    let input=document.form1.a;

### 事件
* 表单
    * onsubmit 表单提交时
    * onreset 表单重置时
* 表单控件
    * onfocus 表单控件的事件
    * onblur
    * onchange 内容改变并且失去焦点，事件触发在onblur的前面
### 方法
* 表单
    * submit()
    * reset()
* 表单控件
    * focus()
    * blur()


# cookie
## 操作cookie的方式
### 获取
* document.cookie 获取所有的cookie
* 一次性全部获取到
### cookie限制
* js中用键值对儿保存cookie,最多保存20对儿
* 在同一个域名下才能共用cookie
* 同域 ：协议 主机名 端口号 相同才是同域
### 添加
```
document.cookie="name=zs; age=17"//中间必须加分号空格
```
### cookie默认生存周期是从打开对应网页到关闭浏览器为止
* 不同浏览器的cookie不能共用
* cookie的过期时间可以设置的很小 也可以设置的很大，不受会话结束的影响了
#### 期满
```
    document.cookie="name=zhangsan; age=17; sex=man"

    let dateobj=new Date();
    let time=dateobj.getTime()+20000;
    dateobj.setTime(time);
    document.cookie="age=17; expires="+dateobj.toGMTString();
```

* h5当中新增的两种用于在浏览器中保存数据的方式，特点是存储的数据量大（相对于cookie），localstorage保存数据时永久的，sessionStorage只保存一次回话（从浏览器打开到关闭）中的数据。
* h5新增的 5-10MB
## localStorage 本地存储
## sessionStorage
* 和cookie的共同点
1. 在同一域名下才能共同存储的信息
```
    //不同域
    http://www.baidu.com
    https://www.baidu.com
    http://www.news.baidu.com
    http://www.baidu.com:8888
    //同域
    http://www.baidu.com/aa/index.html
    http://www.baidu.com/bb/index.html
```
2. 在不同浏览器之间也是不能共享的
* 两者区别
1. localStorage 是一种永久保存数据的方式
2. sessionStorage 保存的就是一次会话当中数据
3. API操作方式是一致的
4. localStorage sessionStorage都是只能保存字符串
    * setItem()
    * getItem()
    * clear()
    * removeItem()删除
    * key()
        ```
        localStorage.key(i)
        ```
    * length
* JSON对象
    可以把字符串和JSON格式的数据进行转换
    * JSON.parse() //将字符串转化成JSON格式
    * JSON.stringify() //把JSON格式转换成字符串



# 画布canvas
* 画布保存图片背景颜色是透明的，因为是在css中设置的背景颜色
* 操作画布 getContext("2d")；
```
    let canvas=document.querySelector("canvas");
    canvas.height=600;
    let cobj=canvas.getContext("2d");//所有都是针对画笔定义的
```
* 标签内设置宽高，css中有问题
* 行内块级元素
## 方法
### 保存状态方法
* save(); 当前画布所有的属性设置保存下来 填充颜色，渐变颜色，虚线，阴影
* restore(); 读取对应的设置//可以只保存不读取
### 矩形方法
* fillRect();填充一个矩形区域
* strokeRect()描边绘制一个矩形区域
* clearRect();清空一个矩形区
  *  x,y,width,height
* rect(左上角x,左上角y,width,height) 绘制矩形路径

### 线段方法
* beginPath() 开启一个新的路径，清空原先的路径列表
* moveTo() 笔触移动到哪个地方
* lineTo() 当前的画笔要画到哪个地方
* closePath() 将当前的路径闭合
* fill("evenodd") 填充一个闭合的路径 evenodd从外面依次间隔填充
* stroke() 描边当前的路径

### 线条方法
* setLineDash([2,2]); 设置虚线的样式（密集程度）,线的宽度，空格的宽度
* lineDashOffset 偏移量

### 曲线方法
* quadraticCurveTo(转折点坐标，终点坐标) 绘制曲线
### 圆弧方法
* arc(圆心x，圆心y，半径，起始角度，结束角度,false) 绘制圆弧路径
    * 默认false顺时针
    * true逆时针绘制

## 属性
* fillStyle 设置填充的颜色
* strokeStyle 设置描边的颜色
    * red rgb() rgba() #333
* lineWidth 设置描边的宽度
### 线条属性
* lineCap 线条末端样式
    * butt 默认效果
    * round 圆形
    * square 方形
* lineJoin 线条连接的方式
    * miter 默认值 尖角
    * bevel 没有任何连接效果的样式，平齐
    * round 圆角
* miterLimit 连接默认值的设置，最大延长多远，最小4px才会有默认效果
* globalAlpha 设置全局透明度

### 蚂蚁线的绘制
```
cobj.setLineDash([2,6]);
    cobj.lineWidth=2;
    let offset=0;
    setInterval(function () {
        offset++;
        cobj.clearRect(99,99,102,102);
        cobj.beginPath();
        cobj.rect(100,100,100,100);
        cobj.lineDashOffset=offset;
        cobj.stroke();
    },60)
```

### 阴影
* cobj.shadowBlur=5; 模糊程度
* cobj.shadowColor="#333"; 阴影颜色
* cobj.shadowOffsetX=5;
* cobj.shadowOffsetY=5;
### 渐变
> 渐变和图形是各自独立的

* 先创建一个渐变对象 定义渐变的范围（起始坐标，结束坐标）
    ```
    let lineGradient1=cobj.createLinearGradient(x0,y0,x1,y1);//线性渐变
        let radialGradient1=cobj.createRadialGradient(x0,y0,r0,x1,y1,r1);//径向渐变
    ```
* 设置
    ```
    lineGradient1.addColorStop(offset,color);
    lineGradient1.addColorStop(offset,color);//offset从0到1
    ```
* 使用
    ```
    cobj.fillStyle=lineGradient1;
    cobj.fillRect(x,y,w,h)//与阴影位置对应
    ```
### 坐标
* translate(x,y)
* rotate(弧度)

* 三维建模插件
   * three.js

## 时间函数 h5
* requestAnimationFrame()
让一个函数每隔一段时间递归调用自己 它是按照屏幕刷新频率执行的；需要考虑兼容性
* cancelAnimationFrame()  取消

## 获取图片
* cobj.getImageData()  获取画布当中指定区域的颜色信息,位置宽高
* cobj.putImageData()  将某个信息对象放置到画布当中
* cobj.drawImage();  最多9个参数；1图片来源，4图片截取位置，4放置到画布的位置（起始位置，大小）
    如果只传2个参数，位置；
    ```
    let newimg=new Image();
    newimg.src="";
    newimg.onload=function () {
        cobj.drawImage(newimg,0,0)
    }
    ```
# jQuery三大特点
* 强大的获取能力；
* 隐式循环 js中forEach
* 链式调用
### jQuery三大特点

	1.链式调用

		通常在操作同一父级元素下的dom时采用

		常用方法：

			eq(),end(),parent(),parents(),siblings(),find(),children(),next(),prev,nextAll(),prevAll

		原理：在每一次操作后返回当前dom元素的this指针

	2.隐式调用

		当对获取到的所有符合要求的dom元素进行操作时，不必像原生js那样再将每一个元素循环，jQuery会隐式循环

	3.方便获取

网址 jq22.com
* 3.2.1 没有处理IE兼容
* 1.11. 兼容IE
jQuery里的事件默认添加事件监听，之间不会有影响

* 动画push进去shift出来，依次执行

1. stop(不清空，不到达)
2. finish() 直接将队列中所有动画立即执行完成

# AJAX
### wamp
集成的开发工具包
w windows
a apache 服务器软件
m mysql
p php
# AJAX
## ajax
* Asynchronous JavaScript and XML
* 异步的js和xml
* 异步的javascript和xml,是用于进行浏览器和服务器之间数据通信的技术，特点是不用刷新页面即可实现数据的更新。
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
## 解决跨域问题
* 浏览器的同源策略不允许浏览器执行其它网站的脚本，同源指的是域名，协议，端口号均相同，解决方法有三种，1.jsonp 2.通过后台文件请求数据再发送给浏览器 3.在php文件中加入heade("Access-Control-Allow-Method:POST,GET")；
### jsonp
* 解决跨域问题的一种数据传输方式，原理是借助了script标签请求数据没有跨域限制的特点，在jquery中实现使用jsonp可以调用$.ajax将dataType设置为jsonp,但是要注意它和ajax并没有什么关系。
> json with padding 获取数据的一种方式，用于解决跨域问题，php直接允许

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
### 2017.8.18
git 进行分布式版本控制系统
github 网站 提供了基于git的版本控制操作界面
svn 同git
### git 
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
### 问题
* 先同步再提交 先pull再push
* 如果因为有冲突发布不了 可以先把自己做了修改的部分复制出去，然后删掉自己的版本库重新克隆 ，再把修改加进去提交

# 作业
* 项目 网站（企业，美食，以新闻发布为主）
* 网站需求，技术实现，边做边讲，选好发给老师，10几个页面
* 文档：选题背景，实现功能，技术分析，如何实现效果

#### 准备工作
* 安装 npm install -g less
## less
* 一种 动态 样式（CSS的预编译） 语言//sass功能同less
#### 功能
* 定义一些变量
* 定义一些混合变量
* 可以做一些嵌套
#### 优点
* 提升编程效率
* 可以方便搭建一个框架
* 可以用来做一些动画
### 搭建less
* basic.less 默认样式
* tools.less 混合模式（可以不传参数，也可以传一个或多个参数；利用循环）
* var.less 定义变量的声明
* import.less 导入需要的文件
* index.less 导入@import "import.less";

#### 注释
* less中的注释双斜杠，同js，less中注释不会被编译到css中
* /* */在css中也可以看到此注释

> &代表本元素

& &-left 后代选择器
&>&-left 子代选择器

##### 打包工具
* gulp
* webpack

# es6(ECMAScript 2015)
> 函数默认参数，箭头函数，let,const以及块级作用域，类，模板字符串等。

