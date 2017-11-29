### 1. php概念
* Hypertext Pre Preprocessor
* 超文本预处理语言
* 应用广泛的、开放源代码的、用于快速搭建网站后台程序的服务器端脚本语言
### 2. 用途
* 作为网站的后台语言
    * 对于前台提交的数据进行处理
    * 生成动态的html网页
    * 对于图像进行处理
    * 对于文件进行处理
* 命令行工具
* 编写桌面应用
### 3. 使用
* wamp 集成的开发环境
    * window
    * apache 服务器程序，可以接收请求，返回数据,接收到请求会判断；如果请求 .html .css .js等，直接把文件发给浏览器；.php,解析php的内容，然后会将运行的结果发送给浏览器。apache内置了解析php
    * mysql
    * php
> 可以与html嵌套适用

    ```php
    <body>
    <div></div>
    <?php $a = 10;
    if ($a > 5) :?>
    <h1>a是大于5的</h1>
    <?php else: ?>
    <h1>a是小于5的</h1>
    <?php endif; ?>
    <?php for($i=0;$i<10;$i++): ?>
    <div>111</div>
    <?php endfor;?>
    </body>
    ```
### 4. 变量
#### $变量名 不需要另外声明
* 命名规范 以字母下划线开始 后面可以跟字母 下划线 数字
* 普通变量也可以传值和传址 赋值的时候加&就会变成传址的形式
```php
$a=1;
$b=$a;//传值
$a=2;
$b=&$a;//传址
```
* 区分大小写（函数名一般不区分大小写，例如eChO）
* 可变变量 将另一个变量的值作为当前的变量的名字使用，当前变量就被称为可变变量
* 超全局变量 在php内部定义好的，用于方便的获取请求数据或者是服务器信息的一些数组
    * $_GET 放置的用户发送的所有get请求
    * $_POST 放置的用户发送的所有post请求
    * $_REQUEST 放置的用户发送的所有的请求信息
    * $_SERVER 放置的服务器的信息
    * $_SESSION 在session保存的所有数据
    * $_COOKIE 在cookie中保存的所有数据
* $_SESSION 的使用
  在php所有输出之前调用session_start();
  然后把session当超级数组来使用就行。
  比如
  赋值：$_SESSION['username'] = 'berryblue';
  取值：$username = $_SESSION['username'];
  判断: isset($_SESSION['username']),,empty($_SESSION['username']);
  销毁：unset($_SESSION['username']);
### 5. 常量  
* define(名字，值) 定义常量
* const 名字=值
##### 规范
* 字母会采用全部大写的形式
* 不需要加$
* define调用函数 const是php中的语法结构 从效率const比define效率更高
* const可以在类中定义属性 define不可以（定义全局的）
* 一旦声明就不能再重新赋值了
* 魔术常量 php中内置的一些常量，2个下划线开始2个下划线结束的
    * __LINE__ 当前的行号
    * __DIR__ 当前文件所在文件夹路径
    * __FILE__ 当前文件路径
    * __CLASS__ 当前所在的类
    * __FUNCTION__ 当前所在的函数
    * __METHOD__ 当前所在方法
### 6. 操作变量常量的一些函数
* isset() 判断某一个变量是否定义
* unset() 将某一个变量的值清空
* empty() 判断某一个变量是否为空
* defined() 判断是否定义了某个变量
   
###  注释
* / /
* /* */
* \#aaa

### 7. 数据类型
* 四种标量
    * 整数 int
    * 浮点型 双精度类型 float
    * 字符串 string 双引号返回内容，单引号返回变量
    * 布尔值 boo false返回空，true返回1
* 两种复合类型
    * 数组
    * 对象
* 两种特殊类型
    * 资源
    * null
* var_dump() 输出： 类型 长度 内容
* getType() 得到当前变量的数据类型
    * integer double string bolean array object NULL
#### 判断数据类型
* is_int() 判断变量是否为整型
* is_float() 判断变量是否为浮点型
* is_string() 判断变量是否为字符串
* is_bool() 判断变量是否为布尔值
* is_array() 判断变量是否为数组
* is_object() 判断变量是否为对象
* is_resource() 判断变量是否为资源
* is_null() 判断变量是否为null
#### 进行数据类型转换
* boolval（） 将其他类型转化为布尔型
* intval() 将其他类型转化为整型
* floatval() 将其他类型转化为浮点型
* strval() 将其他类型转化为字符串  
* 假值 0 0.0 "0" "" false null
### 8. 运算符
* . 表示字符串的连接
* .= 将字符串连接之后的结果进行赋值
* 1===1.0 false
* &&  and 都表示并且
* ||  or 都表示或
> php中未赋值得到null

### 9. 流程控制
* if(){}else{}
* switch(){
    case:1;echo:1;
    break;
}
* for($i=0;$i<10;$i++){}
#####　不同
* if(){}elseif(){} //else if可以分开也可以合写
* if($str1):
    echo 1;
    endif;
* if():
    elseif():
    echo 2;
    endif;
* for($i=0;$i<10;$i++):
    endfor;
* while(): endwhile;
    while(){};
### 10. 字符串操作
* '转义加\  如果就是需要输出一个\，在\的前面再加一个\
* echo(); 输出一个字符串 如果不是字符串，会隐式转化为字符串输出
* strlen(str); 返回值是字符串的长度
* trim(str); 去除字符串两端的空格的函数 返回值就是去除了两端空格的字符串
* ltrim(str); 去除字符串左边的空格
* rtrim(str); 去除字符串右边的空格
* strtolower(str); 将字符串转化为小写并返回
* strtoupper(str); 将字符串转化成大写并返回
* ucfirst(str); 将字符串的首字母大写
* ucwords(str); 将每一个单词的首字母都大写
* str_pad(str,"最终长度"，"填充的内容"，方向pad_type); 将字符串进行补充
    * pad_type 有3种
    * STR_PAD_LEFT 对字符串左边按照指定长度填充内容
    * STR_PAD_RIGHT 对字符串右边按照指定长度填充内容
    * STR_PAD_BOTH 对字符串两边按照指定长度填充内容
* strrev(str) 将字符串的顺序颠倒
* md5(str) 将字符串加密转化为一段十六进制的字符串，已达到加密的目的。
* explode(delimiter分隔符,str); 将字符串分割转化成数组
* substr(str,start,length); 从字符串当中指定的位置截取指定长度的内容
* strstr(str,needle); 从needle的位置开始一直取到字符串的结束，如果找不到needle 会得到一个布尔值false；
* strpos(str,needle); 返回needle第一次出现的位置，找不到返回false
* strrpos(str,needle); 返回needle最后一次出现的位置，找不到返回false
* stripos(str,needle); strripos(str,needle); 不区分大小写的
* str_replace(search,replace,subject); search需要被替换的内容 replace替换的结果 subject被操作的对象字符串/数组
### 11. 数组
#### 定义数组
* 索引数组 类似于js中的形式
    * $arr=[1,2,3,4,5];
    * $arr=array(1,2,3,4,5);
    * $arr[]=6; 在原先最大的索引值的基础上加一
    * $arr[10]=0; 跨过最大索引值添加，并不会自动调整
* 关联数组 类似于js里的JSON格式
    * $arr=array("name"=>"zhangsan","age"=>"17","sex"=>"man");
* 二维数组
    * $arr=array(array(),array())
    * $arr=array("a"=>array(),"b"=>array())
    ```php
      $arr=array(array("title"=>"标题","content"=>"内容"),array("title"=>"标题1","content"=>"内容1"));
      $arr=array("班级1"=>array("name"=>"wuif1705","number"=>"22"),"班级2"=>array("name"=>"wuif1706","number"=>"44"));
    ```
#### 遍历数组
* 1.如果是下标值规则的索引数组 for(){}
```php
    $arr=[1,2,3,4,5];
         $len=count($arr);
         for($i=0;$i<$len;$i++){
             var_dump($arr[$i]);
         }
```
* count() 计算数组的长度
* 2.foreach(){} 遍历数组
```php
    foreach ($arr as $value){
        var_dump($value);
    }
    foreach ($news as $key=>$val){
        echo $key." ".$value."<br>";
    }
```
* 3.each()
    * while ($r=each($arr)){}
```php
while ($r=each($arr)){
    var_dump($r[0]);//键
    var_dump($r[1]);//值
    var_dump($r["key"]);//键
    var_dump($r["value"]);//值
}
```

### 数组的操作函数
* list 可以快速的给一个变量赋值,类似于js中的解构赋值
```php
$arr=array("zs","ls","ww");
list($a,$b,$c)=$arr;
echo $a."<br>";
echo $b."<br>";
echo $c."<br>";
```
* in_array(needle,arr); 判断数组当中是否存在某个值(js中includes())
* array_search(needle,arr); 根据值返回键
* array_key_exists(key,arr); 判断某个键是否存在
```php
$arr=array("name"=>"zs","age"=>"17");
var_dump(array_key_exists(key:"name",$arr));
```
* array_filter(); 过滤数组
    * 回调函数中提供的是数组的值
```php
$arr=array(1,2,3,4,5,6,7,8);
var_dump(array_filter($arr,function ($v){
    if($v%2==0){
        return true;
    }
}));
```
* array_walk(arr,function($v，$k){}); 遍历数组
* array_map(function($v),arr)  数组的映射
```php
array_map(function ($v){
//    var_dump($v);
    return $v*$v;
},$arr);
```
* array_push($arr,1,2,3); 在数组的末尾添加
* array_pop($arr); 在数组的末尾删除
* array_unshift($arr,1,2,3); 在数组的开始添加
* array_shift($arr); 从数组的开始删除
* array_keys($arr); 返回数组中所有的键
* array_values($arr); 返回数组中所有的值
* array_sum($arr); 对数组中所有的值进行求和
* array_merge($arr1,$arr2); 合并两个数组
* array_slice($arr,pos,len); 从数组中截取一段
* array_unique($arr); 对数组进行去重
* sort($arr); 对数组进行排序
### 函数
1. 形参 实参 如果有形参是必须要传递实参的
2. 函数名就是一个不用加$的变量名 函数名都是不区分大小写的
3. 函数是不能重新声明的
5. 全局变量只能在函数外面访问到，局部变量只能在函数的内部访问到
6. * $GLOBALS 保存的是所有的全局变量
    可以用于在函数内部获取全局变量
    ```php
    $num=10;
    function fn1($a){
    //    echo 1;
        var_dump($GLOBALS["num"]);
    };
    FN1(1);
    ```
    * global $a,$b;
    ```php
     $num=10;
    function fn2(){
        global $num;
        $num+=10;
        var_dump($num);
    }
    fn2();
    ```
7. static $num=10; 让num变量在函数运行结束之后不会从内存中释放掉，实现类似于js闭包的效果；
```php
function fn3(){
    static $num=10;
    $num++;
    var_dump($num);
};
fn3();//11
fn3();//12
fn3();//13
```
8. 参数的默认值 写法跟js一样
    * 把没有默认值的放前面，有默认值的放后面
9. func_get_args() 获取实参的集合
* func_num_args() 获取实参的个数
* func_get_arg(index); 获取第index个实参
10. function_exists("fn") 判断某个函数是否是存在的函数

### 在php导入并执行某一个文件
* include(url);
* required(); 当执行required进行导入的时候，如果发生错误，当前程序就会直接报错，而include只是会有一个警告
* include_once(); 当我们对一个文件进行多次导入的时候他只会执行一次
* required_once(); 
### 创建数据库
模式 utf8_general_ci
permainkey 主键索引值自动增加
### 图像操作
* imagecreatetruecolor(width,height); 创建一个图像
* imagecolorallocate(img,r,g,b); 创建一个颜色
* imagefill(img,x,y,color); 向图像中添加颜色
* imagettftext(img,size,angle,x,y,color,"file",word); 在图像当中绘制一个文字
* imagepng(img); 将图片以png的格式输出
* imagedestroy(img); 销毁图像
* imagesetpixel(img,x,y,color); 图像上画点
* imageline(img,x1,y1,x2,y2,color); 图像上画线


* 排序 asc升序 desc降序
* like进行模糊查询,%通配符
## 文件操作
* basename(path); 接收一个文件地址，返回文件名字
* dirname(path); 接收一个文件地址，返回文件所在路径
* file_exists(path); 接收一个文件 返回一个布尔值 判断文件是否存在
* is_dir(); 接收一个路径，判断路径是否存在
* mkdir(); 创建一个文件路径
* rmdir(); 删除一个文件路径
* unlink(filename); 删除一个文件
* getcwd(); 获取当前文件在本地的路径
* rename(oldname,newname); 对文件进行重命名，可用于对文件的移动
* is_writeable(); 用于判断一个文件是否是可写的
* is_readable(); 用于判断一个文件是否是可读的
* fopen(); 打开文件的地址 打开文件的方式(网上查) 获取到对于文件的引用 把保存文件的变量成为句柄 类似于new mysqli();
* fwrite($f,str); 往文件当中写入内容 会将当前的指针移动到内容的最后面
* fread($f,length); 从文件当中读取内容 从文件当前指针指向的位置读取指定的长度
* fclose($f); 释放对于文件的引用
* file_get_contents 获取文件的内容 参数为文件地址
* file_put_contents 向文件中写入内容 参数为文件地址和要写入的内容
### 对于上传文件的处理
* $_FILES[]; 
    * name 文件的名字
    * type 文件的类型
    * tmp_name 文件的临时路径
    * error 上传的错误信息
    * size 文件的大小 单位：B 字节 byte
* is_uploadedfile(); 判断文件是否是通过 HTTP POST 上传的
* move_uploadedfile(); 将上传的文件移动到新位置

## mysql
#### 设置环境变量
将D:\wamp\bin\mysql\mysql5.6.17\bin,复制粘贴到属性-高级系统设置-高级-环境变量-PATH 后加;然后目录粘贴过去
* 重启编辑器就可在编辑器编写
* window.cmd
* mysql -u root -p 检验是否是全局的
* phpmyadmin也是一个软件

### 语句
* 进入mysql
    * mysql -u root -p
* 显示所有的数据库
    * show databases; //必须加分号
* 进入某个数据库
    * use  `db`; 反引号可加可不加
* 查看某个表的信息
    * select * from user;
* 创建一个新的数据库
    * create database `school`;
* 创建一个新的数据表
    * create table student(
        id int(255) NOT NULL PRIMARY KEY AUTO_INCREMENT,
        name varchar(10) NOT NULL,
        cid int(255) NOT NULL COMMENT '班级'
        )ENGINE=Innodb DEFAULT CHARSET=UTF8;
* 修改表名
    * rename table `school`.`student` to `school`.``students;
* 向表中添加列
    * alter table `student` add `age` int(10) not null;[after `name`;]
    * alter table student add column age int(10) not null after name;
* 向表中删除某一列
    * alter table `student` drop `age`;
* 修改表中的某一列
    * alter table `student` change `name` `sname` varchar(20) not null;
* 删除某一个表
    * drop table `student`;
* 删除数据库
    * drop database `school`;
* 向表中添加一行数据
    * INSERT INTO `student`(`sname`,`sex`,`cid`)VALUES('张三','男',1);
* 从表中删除一行数据
    * DELETE FROM `student` WHERE id='1';
* 修改表中某一行的数据
    * UPDATE `student` SET `sname`='张三' WHERE id='2';
* 查找内容
    * SELECT * FROM `student` WHERE 1
* 插入的时候，如果操作的是全部的列，可以不写字段名称
    * insert into student values('3','李四','男','1');
* 一次性插入多条数据 在值的后面添加 ,()
    * insert into student values('3','李四','男','1')，('4','王五','男','1');
### 从表中获取数据的方式
* 查询单个数据
    * select `name` from `student`;
* 同时查询多列数据
    * select `name`,`age` from `student`;
* 对于查询的数据 可以起一个别名 as
    * select `name` as `sname`,`sex` as `xb` from `student`;
> select `name`+'('+sex+')' as namesex from `student`;

* 在查询的时候进行四则运算
    * select `name`,`price`*`number` as `total` from `goods`;
* 用通配符* 查询所有的列
    * select * from `goods`;
### 对于查询结果进行排序 order by
* select * from goods order by price asc; 升序
* select * from goods order by price desc; 降序
###  对于查询的结果进行筛选/过滤；
* where 条件查询 
    * select * from goods where name='苹果';
* 使用 > < >= <= != between and    
    * select * from goods where number>=1000 order by number desc;
    * select * from goods where number between 500 and 2500 order by number desc;
* 多个条件组合使用 and
    * select * from goods where price>10 and number>1000;
* 或者 or  in 某个字段有多个可能的值
    * select * from goods where price>10 or number>2000;
    * select * from goods where price>10 and name in('苹果','香蕉');
### limit 对于结果进行限制
* select * from goods limit 1; 取第一条
* select * from goods limit 2,3; 位置，个数，从第2条的开始取3条
* select * from goods limit 3 offset 2; 从第二条的位置开始取三个
* select * from goods order by id desc limit 1; 可以和order by 结合，取最后的数据
### group by  对于查询结果进行分组结合
* select name,sum(grade) as total from grades group by name order by id desc;
* select subject,avg(grade) as pj from grades group by subject;
### having  对于分组之后的结果 要运用统计函数进行过滤的时候 就使用having 因为where 后面是不支持函数的
* select name,sum(grade) as total from grades group by name having sum(grade)>160;
### 对于一列数据进行统计的函数
* sum() 求和
* avg() 求平均值
* min() 求最小值
* max() 求最大值
* count() 统计行数
###  查询子句的顺序
* where 筛选行
* group by 对结果进行分组
* having 对于分组结果进行过滤
* order by 对结果进行排序
* limit 对于结果的条数进行限制
### 联结查询 要查询的内容来自多张表
* 内连接 根据条件输出符合条件的内容
    * select student.name,class.name from student,class where student.cid=class.id;
    * select student.name,class.name from student inner join class on student.cid=class.id;
* 左外连接  左边的表中所有的数据都会输出，没有对应的会得到NULL
    * select student.name,class.name from student left join class on student.cid=class.id;
* 右外连接  右边的表中所有的数据都会输出，没有对应的会得到NULL
    * select student.name,class.name from student right join class on student.cid=class.id;
   
### 例题
* 班级表
* id 名称 教室
* 学生表
* id 姓名 年龄 性别 班级id
###  查询
1. 找出最后一名学生
* select * from student order by id desc limit 1;
2. 找出年龄最大的三名学生
* select * from student order by age desc limit 0,3;
* select name,max(age) from student;
3. 找出每一个学生姓名 对应的班级名称 信息
* select student.name,class.name,class.classroom from student,class where student.cid=class.id;
4. 统计学生的总人数
* select count(*) as total from student;
5. 计算学生的平均年龄
* select avg(age) as avg from student;
6. 获取某个班级的人数
* select count(*) as total from student where cid=1;
7. 统计每个班级的人数 以班级id分组
* select cid,count(*) as number from student group by cid;
8. 统计每个班级的人数 显示班级的其他信息
* select class.id,class.name,count(*) as total from student,class where student.cid=class.id  group by class.id;
* select class.name,count(*) as number from student inner join class on student.cid=class.id  group by class.id;
* PHP中
  1.首先查询每一个班级的信息
  2.遍历每一个班级的信息
  在遍历的过程中通过当前正在遍历的id值
  在学生表中进行查询计算
  将结果放置到一个新数组中

### 视图
* 通过一个sql语句查询到的一个结果集 我们可以通过这个结果集再去进行查询操作    或者修改等操作 修改的结果也会直接影响到真正的数据表，
  操作数据表 视图中的数据也会有对应的改变
* create view `s_c` as select student.name as `sname`,class.* from student,class where student.cid=class.id;
* create view `student_view` as select id,name,age from `student`;
* select name,count(*) as number from s_c group by name;

### 关系表
* 在关系表当中定义的所示实体之间的内在联系，相当于在其他的表中我们保存的是数据，在关系表中保存的是数据与数据之间的关系


* 网站说明文档，写论文形式
1. 做网站的背景，什么网站，给哪家公司做的
2. 需求分析
3. 整体设计（整体网站的架构，前台怎么设计的，怎么搭建整体框架的，后台。。。）界面设计，程序设计
4. 网站的具体实现

# CMS
* 内容 管理 系统
## 网站的前台和后台
#### 用户角度
* 用户能够看到的页面 html css js
* 用户看不到的部分 数据的处理 页面的生成 php mysql
#### 
* 前台 所有处理前台的业务逻辑的部分都称为前台部分 呈现
* 后台 用于处理后台业务逻辑的 管理
## 整体的架构
### 功能
#### 前台功能
* 首页 -- 呈现推荐信息
* 栏目的划分
* 新闻的列表展示
* 查看新闻的内容
#### 后台的功能
* 登录验证
* 管理员的设置
    * 修改密码
* 管理栏目
    * 呈现栏目信息
    * 修改栏目
    * 删除栏目
    * 增加栏目
* 管理内容
    * 呈现内容信息
    * 修改内容
    * 删除内容
    * 增加内容
* 推荐位管理
    * 呈现所有的推荐位
    * 删除推荐位
    * 增加推荐位
### 文件的结构
* cms
    * admin 后台管理模块
    * index 前台呈现模块
    * libs 前台后台共有的一些核心文件
    * static 静态的文件 css js img
    * upload 放置上传文件的地方
### 数据库的结构
* user 表 保存管理员信息
    * id
    * username
    * password
* category 表 保存所有的栏目信息
    * id
    * cat_name 栏目的名称
    * parent_id 父栏目的id
* content 表 保存所有的内容信息
    * id
    * title 文章的标题
    * time 发布的时间
    * image 缩略图
    * content 文章的内容
    * posid 推荐位id 默认值为0
    * catid 栏目id
* position 表 保存推荐位的信息
    * id
    * pos_id 栏目的id

### php中的mysql的一般使用方法
* $db=new mysqli("localhost","root","","db");
链接数据库 将数据库保存到$db句柄上(地址，用户名，密码，数据库名)

* $sql="insert into `user`(`username`,`password`)values('$username','$password')";
编写一条sql查询语句

* $db->query($sql);
发送一条 MySQL 查询。调用数据库的query方法

* $r=$result->fetch_all(MYSQLI_ASSOC);
转化成关联数组

var_dump($db);
var_dump($result);
* var_dump($db->affected_rows);
取得前一次 MySQL 操作所影响的记录行数。
一般用于判断是否删除修改添加等等成功，若等于1则成功
* var_dump($result->num_rows);
取得结果集中行的数目。
一般用于判断是否含有子栏目，若大于0则含有子栏目
var_dump($r);

#### 上传文件
```php
    <?php
    $f=$_FILES["file"];
    $path="uploadphp".date("y-m-d")."/";
    if(!is_dir($path)){
        mkdir($path);
    }
    $arr=explode(".",$f["name"]);
    $houzhui=array_pop($arr);
    $filename=md5(time()).".".$houzhui;
    if(is_uploaded_file($f["tmp_name"])){
        move_uploaded_file($f["tmp_name"],$path."/".$filename);
        $fullname=$path.".".$filename;
        $fullname=substr($fullname,3);
        echo "http://localhost/PHP/2017.9.4/cms/".$fullname;
    }
```
#### 图片预览
```js
$("#file").change(function () {
        var file=this.files[0];
        var fr=new FileReader();//实例化 FileReader对象 用来读取文件的
        fr.readAsDataURL(file);//设置以哪种方式读取文件，把文件读取为DataURL DataURL就是图片在浏览器当中呈现的一种格式
        fr.onload=function () {//监测读取完成的事件 读取完成以后 FileReader对象会把读取的结果保存到自身的result属性身上
            $("<img>").attr("src",fr.result).appendTo(".box");
        }
    })
```
#### 前情回顾
* 对象 属性的无序集合体（代码的角度）

###　进度条
```apple js
var fd=new FormData();
fd.append("file",that.fileobj);
var xhr=new XMLHttpRequest();
xhr.upload.onprogress=function (e) {
    var bili=e.loaded/e.total*100+"%";
    that.inner.style.width=bili
}
xhr.open("post",that.url);
xhr.send(fd);
xhr.onload=function () {
    that.hidden.value=xhr.response;
}
```
### php继承
1. 属性 方法
2. 构造函数 它不需要调用 只要我们实例化对象 他就会执行
3. static 用到类当中表示当前的属性或方法是属于类的属性或方法
4. 添加到当前类身上的属性或者方法要通过 self:: 去访问
5. * public 当前属性或者方法是公开的 在类的内部或者外部都可以访问到
   * private 私有的 只能在当前类当中被访问到
    * protect 受保护 能在当前类及子类当中被访问到
    ```php
    class human{
        var $name="zs";
        function __construct($aa)
        {
            seif::$name;//表示的是当前这个类
            echo "调用构造函数".$aa;
        }
        function say(){
            echo "walk";
        }
    }
    $someone=new human("aa值");//不加参数可不写括号
    $someone->say();
    ```
6. self:: 指的是当前类
7. $this 指的是实例化的对象
8. 通过 const 定义的属性 不能被修改 通过对象和类都可以使用::访问
9. parent:: 指的父类
10. 在子类当中是可以重写父类的属性、方法的

## 模板引擎
## mvc 
* Model、View和Controller。也就是模型、视图和控制器
* 单入口
* 路由：即规则

kindeditor.net 异文本编辑器

* smarty中截取内容字段
{$v["content"]|mb_substr:0:10:"utf-8"}

* 头部底部放入共有文件
{include file="index/common/header.html"};
<img style="background:url('{IMAGES_PATH}')">
{include file="index/common/footer.html"};

* 呈现一级栏目
{foreach $data $v}
<a href="index.php?a={$v['temp_name']}">{$v['name']}</a>
{/foreach}
* 呈现二级栏目
获取二级栏目的数据
遍历二级栏目
$cats=$this->db->selectAll("*","parentid!=0 order by num");
$this->smarty->assign("data2",$cats);
<ul>
    {foreach $data $v}
    <li><a href="index.php?a={$v['temp_name']}">{$v['name']}</a>
        {foreach $data2 $r}
            <li><a href="index.php?a={$r['temp_name']}">{$r['name']}</a>
        {/foreach}
    </li>
    {/foreach}
</ul>

### 内容发布式网站
### 首页
1. 呈现栏目里面推荐内容（推荐位）
2. 呈现某一个栏目的信息（轮播图栏目）
3. 单独呈现栏目的链接
4. 呈现某个栏目的文章内容
### 栏目页
* 栏目首页
* 栏目列表页
1. 可以取当前栏目的一篇内容
2. 呈现二级栏目的链接
3. 呈现某个子栏目的信息（有子栏目）
4. 呈现当前栏目中的所有信息列表（在没有子栏目的情况下必须完成的事情）
5. 取某一个推荐位的信息（有子栏目）
### 内容页
呈现某一篇内容

## phpcms
{pc:content action:'lists' catid='$catid' num='1' order='id desc' page=$page}

page=$_GET[page]分页

catid='$catid' 当前页面所在栏目的catid

action:category lists position

* 某个栏目只有一篇文章
* 取当前栏目的列表，获取遍历，A链接方法访问新页面
