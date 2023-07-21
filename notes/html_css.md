

# 前端入门

## 一、HTML简介

### 1.网页

#### (1)什么是网页

网站是网页的集合，网页是构成网站的基本元素

.htm或.html结尾  俗称HTML文件

#### (2)什么是HTML

超文本标记语言 Hyper Text Markup Language（不是编程语言)

- 加入图片、声音、多媒体等（超越文本限制）
- 与世界各地主机的文件连接（超级链接文本）

#### (3)网页的形成

网页元素用html标签描述出来



### 2.常用浏览器

IE	firefox	Safari	Chrome

浏览器内核



### 3.Web标准

#### (1)web标准的意义

页面更标准统一

#### (2)web标准的构成

- **结构**

	对网页元素进行整理和分类，主要学HTML

- **表现**

	表现用于设置网页元素的板式、颜色、大小等外观样式，主要指的是CSS

- **行为**

	网页模型的定义及交互的编写，主要学JavaScript

	

### 4.HTML标签

#### (1)HTML语法规范

##### 基本语法概述

- 尖括号包围的关键词，例如<html>和</html>,称为**双标签**，开始标签和结束标签

- **单标签** <br />

	**HTML标签：**
	HTML标签指使用尖括号括起来的关键字，分为单标签和双标签
	单标签：标签单独出现，语法：<标签名 / >
	双标签：标签成对出现，语法：<标签名>内容< / 标签名>
	注意：HTML标签中的标签名不区分大小写，但为了符合W3C规范，推荐使用小写。

##### 标签关系

- 包含关系

	<head>
	    <title></title>
	</head>

- 并列关系

	<head></head>

	<body></body>

#### (2)HTML基本结构标签

HTML页面也叫HTML文档

```html
<html>	  //用来标记HTML文档的开始 
	<head>    //用来标记HTML文档头部的开始
		<title>  //网页标题
	</head>   //用来标记HTML文档头部的结束
	<body>    //用来标记HTML文档主体的开始
		主体内容
	</body>   //用来标记HTML文档主体的结束
</html>   //用来标记HTML文档的结束

```

#### (3)开发工具

##### VScode

```html
1、注释：

　　a) 单行注释：[ctrl+k,ctrl+c] 或 ctrl+/

　　b) 取消单行注释：[ctrl+k,ctrl+u] (按下ctrl不放，再按k + u)

　　c) 多行注释：[alt+shift+A]

　　d) 多行注释：/**

2、移动行：alt+up/down

3、显示/隐藏左侧目录栏 ctrl + b

4、复制当前行：shift + alt +up/down

5、删除当前行：shift + ctrl + k

6、控制台终端显示与隐藏：ctrl + ~

7、查找文件/安装vs code 插件地址：ctrl + p

8、代码格式化：shift + alt +f

9、新建一个窗口 : ctrl + shift + n

10、行增加缩进: ctrl + [

11、行减少缩进: ctrl + ]

12、裁剪尾随空格(去掉一行的末尾那些没用的空格) : ctrl + shift + x

13、字体放大/缩小: ctrl + ( + 或 - )

14、拆分编辑器 : ctrl + 1/2/3

15、切换窗口 : ctrl + shift + left/right

16、关闭编辑器窗口 : ctrl + w

17、关闭所有窗口 : ctrl + k + w

18、切换全屏 : F11

19、自动换行 : alt + z

20、显示git : ctrl + shift + g

21、全局查找文件：ctrl + shift + f

22、显示相关插件的命令(如：git log)：ctrl + shift + p

23、选中文字：shift + left / right / up / down

24、折叠代码： ctrl + k + 0-9 (0是完全折叠)

25、展开代码： ctrl + k + j (完全展开代码)

26、删除行 ： ctrl + shift + k

27、快速切换主题：ctrl + k / ctrl + t

28、快速回到顶部 ： ctrl + home

29、快速回到底部 : ctrl + end

30、格式化选定代码 ：ctrl + k / ctrl +f

31、选中代码 ： shift + 鼠标左键

32、多行同时添加内容（光标） ：ctrl + alt + up/down

33、全局替换：ctrl + shift + h

34、当前文件替换：ctrl + h

35、打开最近打开的文件：ctrl + r

36、打开新的命令窗：ctrl + shift + c
```

##### VScode工具生成骨架标签新增代码

```html
<!DOCTYPE html>  //文档类型声明 哪种版本HTML
<html lang="en">      //定义文档显示的语言（英文网站）   zh-CN中文网站
<head>
    <meta charset="UTF-8">		//规定使用哪种字符编码，避免乱码，必写
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <di<!DOCTYPE html>v>hhoh   hhhh</div>
</body>
</html>


```

#### (4)HTML常用标签

##### **文本标签**

```html
常⽤文本标签如下：

<hn>...</hn>标题标签，其中n为1–6的值。
<i>...</i>斜体
<em>...</em> 强调斜体
<b>...</b> 加粗 
<strong>...</strong> 强调加粗
<cite></cite> 作品的标题（引⽤用）
<sub>...</sub> 下标 <sup>...</sup> 上标
<del>...</del> 删除线
<ins></ins> <u></u> 下划线
```

##### **格式化标签**

```html
常⻅格式化标签如下：

<br>换⾏ 	单标签
<p>...</p> 换段		段落标签
<hr />⽔水平分割线
<ul>...</ul> ⽆无序列表
<ol>...</ol> 有序列表 其中type类型值：A a I i 1 start属性表示起始值
<li>...</li>列表项
<dl>...</dl>自定义列表
<dt>...</dt>自定义列表头
<dd>...</dd> 自定义列表内容
<div>...</div> 常⽤用于组合块级元素，以便便通过 CSS 来对这些元素进⾏行行格式化,用于布局
<span>...</span> 常⽤用于包含的文本，您可以使用 CSS 对它定义样式，或者使⽤，用于布局JavaScript 对它进行操作。
```

##### **图像标签**

```html
在HTML网页中插入一张图片，使用img标签，他是一个单标签：
其中img标签中常用属性如下：

- src： 图⽚名及url地址	图片路径，必须属性
	<img src="文件名"/>
- alt: 图⽚加载失败时的提示信息
	<img src="文件名错误等" alt="替换图片的文字"/>
- title：文字提示属性，鼠标放到图片上显示的文字
- width：图片宽度
- height：图片⾼高度
- border：边框线粗细
	<img src="文件名" alt="替换图片的文字" title="..." width=".." height="..." border="..."/>
```

属性之间有空格

多个属性必须写在标签名后面

属性用键值对的方式

###### **路径**

- 目录文件夹：普通文件夹，存放html,图片等
- 根目录：打开目录文件夹的第一层 
- 相对路径：引用文件所在位置为参考基础（图片相对于HTML页面的位置）
	- 同一级路径：只写文件名
	- 下一级路径：/        <img src="images/img.jpg"/>
	- 上一级路径：../      <img src="../img.jpg"/>

- 绝对路径：电脑中目录下的绝对位置，直接到达，通常从盘符开始
	- D:\web\img......
	- 网络地址

##### **超链接标签**

```html
一对a标签
<a href="跳转目标" target="目标窗口弹出方式"> 文本或图像 </a>
href 必须属性
```

- 外部链接
	- target="_self" 	覆盖原窗口
	- target="_blank"    另外启动一个窗口

- 内部链接

	网站内部页面的相互链接，直接链接内部页面名称

- 空链接

- 下载链接

	地址链接的是文件 .exe  zip压缩包形式

- 网页元素链接

	文本、图像、表格、音频、视频
	
	<a href="http://www.qq.com">腾讯</a>

```html
	<a href="http://www.qq.com">腾讯</a>
    <a href="04-标题标签.html">04</a>
    <a href="#">一个没有编好的页面</a>
    <a href="img.zip">下载文件</a>
    <a><img src="img.jpg"/></a>
```

- 锚点链接

	点击链接，快速定位到页面某个位置

	- 在href属性中，设置属性值为#名字 的形式
	- 在目标位置标签，添加一个id属性=刚才的名字

```html
<a href="#name">你的名字</a>
<h3 id="name">你的名字</h3>
```

#### (5)HTML中的注释和特殊字符

##### 注释

<!--注释语句-->   快捷键ctrl+/    不显示到页面

#####  特殊字符

![img](https://img-blog.csdnimg.cn/fd608aecfdc643109a2d85bf13b71917.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA5pu56I6T5aW25piU,size_17,color_FFFFFF,t_70,g_se,x_16)

#### (6)更多标签

##### 表格标签

- 作用：展示数据

```html
<table>
    <tr>行
        <td>单元格内的文字 普通单元格</td>
        ......
    </tr>
    ......
</table>
```

- 表头单元格标签

```html
<table>
    <tr>行
        <th>表头单元格 居中加粗</th>
        ......
    </tr>
    ......
</table>
```

- 表格属性

	​	写到table标签里

```html
基本属性：
border：设置表格边框的大小，默认为0。
cellspacing：设置单元格之间的空隙大小。
cellpadding：设置单元格内容和单元格边框之间的空隙大小。
width：设置表格的宽度。
height：设置表格的高度。

行、列、单元格属性：
rowspan：指定单元格占据的行数。
colspan：指定单元格占据的列数。
align：设置单元格内容的水平对齐方式。left center right
valign：设置单元格内容的垂直对齐方式。

表头属性：
thead：用于定义表格的表头部分。
th：定义表格的表头单元格。

数据行属性：
tbody：用于定义表格的数据部分。
tr：定义表格的行。
td：定义表格的数据单元格
。
其他属性：
summary：用于为表格提供一个简短的描述。
caption：用于定义表格的标题部分。
bgcolor：设置单元格或表格的背景颜色。
```

- 表格结构标签

	<thead> <tbody>

- 合并单元格

	1.如果要合并两行或更多行，则将使用rowspan属性。

	2.如果要合并两列或更多列，则将使用colspan属性。

	<td colspan="合并的数量"></td>

	3.删除多余的单元格
	
	

##### 列表标签

- 作用：布局

- 无序列表（重点）

	```html
	<ul>里只能放<li>，<li>里面可以放任何，格式可以修改
	    
	这是无序列表
	<ul>
	<li>猴子</li>
	<li>狐狸</li>
	<li>熊猫</li>		
	</ul>
	```

- 有序列表

	```html
	按顺序排列
	
	这是有序列表
	<ol>
	<li>猴子</li>
	<li>狐狸</li>
	<li>熊猫</li>		
	</ol>
	```

- 自定义列表

	```html
	自定义列表不仅仅是一列项目，而是项目及其注释的组合。
	自定义列表以 <dl> 标签开始。每个自定义列表项以 <dt> 开始。每个自定义列表项的定义以 <dd> 开始。
	    
	<dl>
	<dt>动物种类</dt>
	<dd>狐狸</dd>
	<dd>熊猫</dd>		
	</dl>
	```



##### 表单标签

- **表单域**

	```html
	<form action="url地址" method="get提交方式" name="">
	  <p>First name: <input type="text" name="fname" /></p>
	  <p>Last name: <input type="text" name="lname" /></p>
	  <p>hobbies: 跳舞<input type="checkbox"/> 吃饭<input type="checkbox"/></p>
	  <input type="submit" value="Submit" />
	</form>
	```

- **表单控件**

	==***<input>标签***==

	- type属性

	| 值                    | 描述                                                         |
	| :-------------------- | :----------------------------------------------------------- |
	| button                | 定义可点击的按钮（通常与 JavaScript 一起使用来启动脚本）。   |
	| checkbox              | 定义复选框。                                                 |
	| color**New**          | 定义拾色器。                                                 |
	| date**New**           | 定义 date 控件（包括年、月、日，不包括时间）。               |
	| datetime**New**       | 定义 date 和 time 控件（包括年、月、日、时、分、秒、几分之一秒，基于 UTC 时区）。 |
	| datetime-local**New** | 定义 date 和 time 控件（包括年、月、日、时、分、秒、几分之一秒，不带时区）。 |
	| email**New**          | 定义用于 e-mail 地址的字段。                                 |
	| file                  | 定义文件选择字段和 "浏览..." 按钮，供文件上传。              |
	| hidden                | 定义隐藏输入字段。                                           |
	| image                 | 定义图像作为提交按钮。                                       |
	| month**New**          | 定义 month 和 year 控件（不带时区）。                        |
	| number**New**         | 定义用于输入数字的字段。                                     |
	| password              | 定义密码字段（字段中的字符会被遮蔽）。                       |
	| radio                 | 定义单选按钮。                                               |
	| range**New**          | 定义用于精确值不重要的输入数字的控件（比如 slider 控件）。   |
	| reset                 | 定义重置按钮（重置所有的表单值为默认值）。                   |
	| search**New**         | 定义用于输入搜索字符串的文本字段。                           |
	| submit                | 定义提交按钮。                                               |
	| tel**New**            | 定义用于输入电话号码的字段。                                 |
	| text                  | 默认。定义一个单行的文本字段（默认宽度为 20 个字符）。       |
	| time**New**           | 定义用于输入时间的控件（不带时区）。                         |
	| url**New**            | 定义用于输入 URL 的字段。                                    |
	| week**New**           | 定义 week 和 year 控件（不带时区）。                         |

	- 其他属性

	| 属性      |              描述               |
	| --------- | :-----------------------------: |
	| name      |      规定 input 元素的名称      |
	| value     |        规定input元素的值        |
	| checked   | 规定此input元素首次加载会被选中 |
	| maxlength |     规定输入字符的最大长度      |

	​	*注释：*

	​	name 属性用于对提交到服务器后的表单数据进行标识，或者在客户端通过 JavaScript 引用表单数据。只有设置了 name 属性的表单元素才能在提交表单时传递它们的值。单选按钮和复选框要有相同的name值

	​	checked主要针对单选按钮复选按钮	<checked="checked">

	​	input 标签的 value 属性的作用是由 input 标签的 type 属性的值决定的

	​	当 type 的取值为 button、reset、submit 中的其中一个时，此时 value 属性的值表示的是按钮上显示的文本当 type 的取值为 text、password、hidden 中的其中一个时，此时 value 属性的值表示的是输入框中显示的初始值，此初始值可以更改，并且在提交表单时，value 属性的值会发送给服务器（既是初始值，也是提交给服务器的值）

	​	当 type 的取值为 checkbox、radio 中的其中一个时，此时 value 属性的值表示的是提交给服务器的值

	​	当 type 的取值为 image 时，点击它提交表单后，会将用户的点击位置相对于图像左上角的 x 坐标和 y 坐标提交给服务器

	***<labal>标签***

	```html
	<form>
	  <label for="male">Male</label>
	  <input type="radio" name="sex" id="male" />
	  <br />
	  <label for="female">Female</label>
	  <input type="radio" name="sex" id="female" />
	</form>
	```

	==***<select>下拉表单***==

	```html
	<select>
	    <option>选项1</option>
		<option>选项2</option>
	    ......
	</select>
	```

	<option selected="selected">默认选中项

	==<textarea>**文本域**==

	```html
	<textarea cols=".." rows=".."></textarea>
	```

- **提示信息**

#### (7)查阅文档

- 百度
- w3school
- MDN

## 二、CSS（层叠样式表）

### 1.CSS简介

美化页面，布局页面

结构（HTML)   样式（CSS)

#### (1)CSS语法规范

选择器+一条或多条声明	选择器 {属性: 值；  }

#### (2)CSS代码风格

注意空格

### 2.CSS基础选择器

作用：选择标签

#### (1)基础选择器

##### 标签选择器

在<style></style>标签里使用

```css
标签名 {
    属性1： 属性值1；
    属性2： 属性值2；
   ......
}
```

快速为同类型所有HTML标签设置样式

不能差异化

##### 类选择器

可以单选或多选几个标签      **class**

```css
.类名 {
	属性1： 属性值1；
    ......
} 

<div class="类名">哈哈哈</div>
```

类名不要用标签名

```css
多类名
.red{
   ...... 
}
.font{
    ......
}
...
<div class="red font">哈哈</div>
多个类名之间用空格隔开
```

可以把一些标签元素相同的样式（共同的部分）放到一个类里，便于修改

##### id选择器

```css
#id名 {
	属性1： 属性值1；
    ...
}

<div id="id名">哈哈哈</div>
```

只能*<u>调用一次</u>*，别的切勿使用

class id选择器最大区别在使用次数上

##### 通配符选择器

选取页面中*<u>所有标签</u>*

```css
* {
    ...
}
```

#### (2)复合选择器

##### 后代选择器（重要）

```css
元素1 元素2 ...{样式声明}
```

元素2...只要是1的后代即可
依次查找

有相同的可以用class区分 	.类名 li a

##### 子选择器（重要）>

```css
元素1>元素2{样式声明}
```

只能选择某元素最近的元素

##### 并集选择器（重要），

```css
元素1，
元素2,
...{样式声明}
```

习惯竖着写，最后一个选择器不要逗号

任何形式选择器可以作为选择器一部分

##### 伪类选择器	:

- *链接伪类*

```css
（按顺序）
a:link		选择所有未被访问的链接
a:visited	选择所有已被访问的链接
a:hover		选择鼠标指针位于其上的链接
a:active	选择活动链接（鼠标按下未弹起的链接）
```

```css
a:link{
    color: black;
    text-decoration: none;
}
```

要给链接单独指定样式，因为系统有默认的

- *focus伪类选择器*

选取获得焦点的表单元素

```css
input:focus {
    background-color:pink;
    color:green;
}
```



### 3.CSS字体属性

#### font-family 

属性设置文本的字体系列。

```css
p {
    font-family: 'Microsoft YaHei',Arial;
}
```

各字体逗号隔开（依次选择字体，没有就跳过），多个单词引号括起来

#### font-size 

属性设置文本的大小。

```css
body {
    font-size: 16px;
}
```

标题需要单独处理

#### font-weight 

属性设置文本的粗细

| 值      | 描述                                 |
| :------ | :----------------------------------- |
| normal  | 默认值。定义标准的字符。             |
| bold    | 定义粗体字符。                       |
| bolder  | 定义更粗的字符。                     |
| lighter | 定义更细的字符。                     |
| inherit | 规定应该从父元素继承字体的粗细。     |
| number  | 具体数字，不加单位（如700等同于bold) |

定义由细到粗的字符。400 等同于 normal，而 700 等同于 bold。

#### font-style

属性指定文本的字体样式。

| 值      | 描述                                   |
| :------ | :------------------------------------- |
| normal  | 默认值。浏览器显示一个标准的字体样式。 |
| italic  | 浏览器会显示一个斜体的字体样式。       |
| oblique | 浏览器会显示一个倾斜的字体样式。       |
| inherit | 规定应该从父元素继承字体样式。         |

#### 复合属性

```css
font: font-style font-weight font-size font-family;
font: italic 700 16px '黑体'

size family不能省略
```



### 4.CSS文本属性

##### 文本颜色

```css
div {
    三种方式
    color: pink;
    color: #FF0000;	十六进制（常用）
    color: rgb(255,0,0)
}
```

##### 对齐文本

文本可居中或对齐到左或右,两端对齐.

当text-align设置为"justify"，每一行被展开为宽度相等，左，右外边距是对齐（如杂志和报纸）。

```css
h1 {text-align:center;}
p.date {text-align:right;}
p.main {text-align:justify;}
```

##### 装饰文本

text-decoration 属性用来设置或删除文本的装饰。

```css
a {text-decoration:none;}  		默认，还可以取消链接下划线
h1 {text-decoration:overline;}	上划线
h2 {text-decoration:line-through;}	删除线
h3 {text-decoration:underline;}	下划线（常用）
```

##### 文本缩进

text-indent 文本缩进属性是用来指定文本的<u>*第一行*</u>的缩进。 

```css
p {text-indent:50px;}
p {text-indent:2em;}
```

em相对单位，当前元素文字大小

##### 行间距

```css
p {
    line-height: 26px;
}
```



### 5.CSS的引入方式

##### 行内样式表（行内式）

在元素标签内部的style属性设定样式

```css
<p style="color:red;font-size:12px;">...</p>
```

##### 内部样式表（嵌入式）

html页面内部写样式，在<style></style>标签内部

##### 外部样式表（链接式）常见

样式单独写到css文件

1. 新建一个.css后缀文件

2. link标签引入

	```css
	<link rel="stylesheet" href="css文件路径">
	```

### 6.综合案例

[暴雨预警](暴雨预警.html)

### 7.Chrome调试工具

F12+Fn

### 8.Emmet语法

[emmet语法](https://code.z01.com/emmet/)

### 9.CSS的元素显示模式

元素（标签）以什么方式进行显示

#### 块元素

独占一行

是一个容器及盒子，里面可以放行内或块级元素

高,宽,边距可以设置

例如<div> <h1> <p> <ul> <ol> <li>

文字类元素里不能再放块元素	如<p>里不能放<div>

#### 行内元素

一行可以显示多个

高，宽直接设置无效

默认宽度是本身内容宽度

行内元素容纳文本或行内元素

例如<span> <a> <b> <del> <em> <u> <strong>

链接里面不能再放链接，<a>里可以放块级元素

#### 行内块元素

同时有两种元素的特点

例如<img/> <input/> <td>

一行可以显示多个（行内）

可以设置高，宽，边距（块级）

#### 显示模式转换display

增加链接<a>的触发范围

- display: block 行内元素转化为块状元素

```css
a {
    width: ;
    height: ;
    display: block;
}
```

- display: inline 块状元素转化为行内元素

```css
div {
    
	display: inline; 
}
```

- display: inline-block 转化为行内块元素

### 10.CSS的背景

#### 背景颜色

```css
background-color:颜色值；
```

一般背景默认值transparent(透明的)

<u>*半透明*</u>

```css
background: rgba(0,0,0,0.3);
前三个值是rgb  最后一个值是alpha透明度，取值0~1
```

#### 背景图片

background-image非常便于控制位置

```css
background-image:none/url（地址）;
```

背景图片大小

```css
background-size:宽度 高度；
```

contain等比例（可能留白）

cover全满（显示不全）



#### 背景平铺

background-repeat

```css
background-repeat:repeat; 默认时候是平铺的
background-repeat:no-repeat; 不平铺
background-repeat:repeat-x;	横向平铺	
background-repeat:repeat-y;	纵向平铺
```

#### 背景位置

background-position

```css
background-position: x y;
```

x y坐标可以是方位名词或者精确单位

*<u>方位名词</u>*

center top bottom left right 

与顺序无关，未指定时垂直居中对齐

<u>*精确单位*</u>

x,y顺序确定  ...px ...px 

只指定一个数值，一定是x坐标，另一个默认垂直居中

<u>*混合单位*</u>

方位 精确 混合搭配

#### 背景固定

（背景附着）

background-attachment

```css
background-attachment: fixed / scroll
```

#### 背景复合写法

顺序无要求

```css
background: black url(...) repeat-x fixed top
```

### 11.CSS的三大特性

#### 层叠性

- 样式冲突：就近原则：采用离结构近的样式
- 样式不冲突，无影响

#### 继承性

子标签集成父标签的某些样式特性（主要是文字样式）

##### 行高的继承

```css
body {
    color: pink;
    font: 12px/24px 'Microsoft YaHei'
     font-size/line-height
}
```

行高不带单位时表示倍数

#### 优先级

选择器相同，根据层叠性

选择器不同，根据权重

| 选择器                         | 权重     | 权重的等级 |
| ------------------------------ | -------- | ---------- |
| ！important                    | 无穷大   | 0          |
| style 属性                     | 1,0,0,0  | 1          |
| id 选择器                      | 0,1,0,0  | 2          |
| 类、伪类、结构伪类、属性选择器 | 0,0,1,0  | 3          |
| 标签、伪元素选择器             | 0,0,0,1  | 4          |
| 通配符选择器                   | 0,0,0,0  | 5          |
| 继承的样式                     | 没有权重 | 6          |

权重不是二进制法，不进位

*<u>继承权重是0</u>*，如果没有直接选中，子元素权重都是0

##### 权重的叠加

复合选择器有权重叠加

.nav ul li    0,0,1,2



### 12.盒子模型

网页本质上都是盒子

#### border边框 

```css
border-width: ...px;
border-style: solid / dashed虚线 / dotted点线;
border-color: pink;

边框复合写法
border: 1px solid red;	没有顺序

分别设置
border-top/bottom/left/right: .....;
```

```css
表格边框
table,td {
    border: 1px solid pink;
    font-size: 14px;
    text-align: center;
	border-collapse:collapse;	合并相邻边框
}
```

边框会影响盒子实际大小

#### content内容 



#### padding内边距 

边框与内容之间的距离

```css
padding-top/bottom/left/right: ...px;
```

![image-20230404233245729](C:\Users\86135\AppData\Roaming\Typora\typora-user-images\image-20230404233245729.png)

padding会影响盒子实际大小 （撑大盒子）

要用width/height减去多出来的内边距大小

应用：用padding撑大盒子，根据字数调整盒子大小

如果没有指定width/height属性，就不会撑大

#### margin外边距

控制盒子和盒子之间的距离

```css
margin-top/bottom/left/right: ...px;

复合属性和padding相同
```

```css
块级盒子水平居中
盒子必须指定了宽度 盒子左右的外边距都设置为auto

.header {
    width: 960px;
    margin: 0 auto;
}

行内元素或者行内块元素水平居中
给父元素添加text-slign:center
```

```css
嵌套快元素塌陷
可以为父元素定义上边框
可以为父元素定义上内边距
可以为父元素添加overflow:hidden
```

- 消除内外边距

```css
* {
    margin: 0;
    padding: 0;
}
```

行内元素只设置左右的内外边距，转化为块元素或者行内块元素可以设置高度

#### 圆角边框

```css
border-radius: length;
length可以是px也可以是百分比

也可以有四个值，从左上顺时针改变

另有border-top-left-radius:
```

#### 盒子阴影

```css
box-shadow: h-shadow v-shadow blur spread color inset;
          水平阴影的位置 垂直 模糊距离 阴影尺寸 颜色 改为内部阴影
```

不占用空间

#### 文字阴影

```css
text-shadow: h-shadow v-shadow blur color
```



### 13.浮动

传统网页布局三种方式（盒子如何进行排列顺序）

- 标准流（普通流/文档流）

	最基本的，默认的

- 浮动

- 定位

<u>*多个块级元素纵向排列找标准流，横向排列找浮动*</u>

#### float

用于创建浮动框，将其移动到一边，直到移动到另一个浮动框的边缘

```css
选择器：{ float: 属性}
属性是none/left/right
```

#### 浮动特性

##### 脱标

- *脱离标准流的控制*（浮）移动到指定位置（动），俗称脱标
- 浮动的盒子不再保留原先的位置

##### 一行 上端显示

- 如果多个盒子都设置了浮动，它们会按照属性值*一行内显示且顶端对齐*排列
- 无缝隙，父级装不下另起一行对齐

##### 行内块特性

- 不管原先是什么模式，加了float就有<u>行内块特性</u>
- 行内元素有了浮动，则不需要转换就可以直接给高度宽度
- 块级盒子没设置宽度默认和父级一样宽，添加浮动之后大小根据内容决定



*<u>先用标准流的父元素排列上下位置，之后内部子元素采取浮动排列左右位置</u>*

**注意**

- 浮动和标准流的父盒子搭配
- 一个盒子浮动了，理论上兄弟盒子都应该浮动
- 浮动的盒子只影响浮动盒子后面的标准流，不会影响前面的标准流



#### **清除浮动**

- 理论上父盒子不方便设定高度

- 浮动元素不占有位置，对后面的排版产生影响
- 清除浮动就是清除浮动元素造成的影响
- 清除浮动后父级就可以感受到高度

```css
语法
选择器 {
    clear: 属性值；
}
```

属性值：

left 不允许左侧有浮动元素

right 不允许右侧有浮动元素

both 不允许两侧有浮动元素

清除浮动的策略：**闭合浮动**

##### 清除浮动的方法

- 额外标签法（隔墙法）不常用

	在浮动元素后使用一个空元素如<div class="clear"></div>，并在CSS中赋予.clear{clear:both;}属性即可清理浮动。

	亦可使用<br class="clear" />或<hr class="clear" />来进行清理。

	新的标签必须是块级元素不能是行内元素

- <u>父级</u>添加overflow

	添加overflow属性，属性值设置为hidden,auto或scroll

- <u>父级</u>after伪元素法

- <u>父级</u>双伪元素法



[float说明](https://blog.csdn.net/shaoduo/article/details/111222207)



#### ps切图

##### 常见的图片格式

- jpg：高清，颜色较多，产品类图片常用
- gif：简单图形及字体，用于一些图片小动画
- png：结合gif和jpeg，（背景透明）
- PSD：photoshop专用格式

##### 图层切图

右键导出png

合并后导出

##### 切片切图

切片工具手动划出，导出

cutterman

#### 综合案例

##### css属性书写顺序

- 布局定位属性：display,position,float,clear,visibility,overflow（建议display第一个）
- 自身属性：width,height,margin,padding,border,background
- 文本属性：color,font,text-decoration,text-align,vertical-align,white-space,break-word
- 其他属性：content,cursor,text-shadow,box-shadow,border-radius

##### 页面布局整体思路

- 确定版心，页面可视区域
- 分析行模块，列模块（第一准则）
- 列模块常浮动布局，确定列大小之后确定列的位置（第二准则）



### 14.定位

#### 定位组成

定位 = 定位模式 + 边偏移

##### 定位模式 (position)

在 CSS 中，通过 `position` 属性定义元素的**定位模式**，语法如下：

```css
选择器 { position: 属性值; }
```

| 值       | 语义         |
| -------- | ------------ |
| static   | **静态**定位 |
| relative | **相对**定位 |
| absolute | **绝对**定位 |
| fixed    | **固定**定位 |

###### static定位

- 静态定位是所有元素的默认定位方式，当position属性的取值为static时，可以将元素定位于静态位置。 所谓静态位置就是各个元素在HTML文档流中默认的位置。
- **在静态定位状态下，无法通过边偏移属性（top、bottom、left或right）来改变元素的位置。**
- 静态定位唯一的用处： 就是 取消定位。`position: static;`

###### relative相对定位

- 相对定位是将元素相对于它在**标准流**中的位置进行定位，当position属性的取值为relative时，可以将元素定位于相对位置。
- 对元素设置相对定位后，可以通过边偏移属性改变元素的位置，但是它在文档流中的位置仍然保留。

   注意：

1. 相对定位最重要的一点是，它可以通过边偏移移动位置，但是原来的所占的位置，继续占有。
2. 其次，每次移动的位置，是以自己的左上角为基点移动（**相对于自己来移动位置**）
	就是说，**相对定位的盒子仍在标准流中，它后面的盒子仍以标准流方式对待它。（相对定位不脱标）**

如果说浮动的主要目的是让多个块级元素一行显示，那么定位的主要价值就是移动位置， 让盒子到我们想要的位置上去。

###### absolute绝对定位

- 如果文档可滚动，绝对定位元素会随着它滚动，因为元素最终会相对于正常流的某一部分定位。
- 当position属性的取值为absolute时，可以将元素的定位模式设置为绝对定位。
- **注意： 绝对定位最重要的一点是，它可以通过边偏移移动位置，但是它==完全脱标==，==完全不占位置==。**

绝对定位分为以下几种情况：

- **父级没有定位（1）**
	若没有父元素或者父元素没有定位，以浏览器当前屏幕为准对齐(document文档，即html标签)。

- **父级有定位（2）**
	绝对定位是将元素依据最近的已经定位（绝对、固定或相对定位）的父元素（**祖先**）进行定位。

- **子绝父相（常用）（3）**
	- 这句话的意思是 ==**子级是绝对定位的话， 父级要相对定位==。**
	- 绝对定位是将元素依据最近的已经定位（绝对、固定或相对定位）的父元素（祖先）进行定位。就是说， **子级是绝对定位，父亲只要是定位即可**（不管父亲是绝对定位还是相对定位，甚至是固定定位都可以），就是说， 子绝父绝，子绝父相都是正确的。

因为子级是绝对定位，不会占有位置， 可以放到父盒子里面的任何一个地方。父盒子布局时，需要占有位置，因此父亲只能是相对定位.这就是子绝父相的由来。

###### fix固定定位

固定于浏览区可视区某个位置

`选择器 {position: fixed;}`

以浏览器可视窗口为参考器

- tips:固定在版心右侧

	left:50%          margin-left:版心宽度的一半距离

###### sticky粘性定位

相对定位+固定定位

`选择器 {position: sticky; top:10px; }`

以浏览器可视窗口为参考器

占有原先的位置

*必须添加top left right bottom其中一个才有效*



##### 边偏移

CSS定位的盒子，是通过边偏移来移动位置的。

在 CSS 中，通过 `top`、`bottom`、`left` 和 `right` 属性定义元素的**边偏移**：（方位名词）

| 边偏移属性 | 描述                                           |
| :--------- | :--------------------------------------------- |
| top        | 顶端偏移量，定义元素相对于其父元素上边线的距离 |
| bottom     | 底部偏移量，定义元素相对于其父元素下边线的距离 |
| left       | 左侧偏移量，定义元素相对于其父元素左边线的距离 |
| right      | 右侧偏移量，定义元素相对于其父元素右边线的距离 |



#### 定位拓展

##### 定位的叠放顺序

z-index

`选择器 {z-index: 1; }`

只有定位才有z-index属性

##### 绝对定位盒子水平居中

margin:auto; 没有用

正确：left: 50% ;		margin-left: -100px ;  负值，盒子宽度一半

##### 定位特殊特性

绝对定位 固定定位和浮动相似的：

- 行内元素添加绝对或者固定定位，可以直接设置宽度高度
- 块级元素添加绝对或者固定定位，不给宽高，默认大小是内容大小



- 脱标的盒子不会引发外边距合并



- 绝对定位（固定定位）会完全压住盒子

浮动元素不会压住标准流的文字和图片只会压住盒子（浮动最初目的是产生<u>文字环绕</u>效果）

绝对定位（固定定位）压住标准流所有内容



### 15.元素的显示与隐藏

#### display显示隐藏

display: none; 隐藏

display: block; 显示

显示没有，<u>位置也没有</u>

#### visibility可见性

visibility: visible 可视

visibility: hidden 隐藏

tips: 隐藏元素后，<u>继续占有以前的位置</u>

#### overflow溢出

overflow: visible; 溢出部分显示 （默认的就是显示）

overflow: hidden; 多出来的一部分隐藏 （如果有定位时慎用）

overflow: scroll; 溢出的部分显示滚动条，无论高度够不够

overflow: auto; 高度不够的时候添加滚动条



### 16.CSS高级技巧

#### 精灵图

有效减少服务器接收和发送请求的次数，提高加载速度

- 多个小背景图片整合到一张大图片上
- 移动背景图片位置，用background-position，定位到盒子相应位置
- 移动的距离是x y坐标，往左往上数值是负值

#### 过渡

配合hover使用,\哪个盒子变化加transition,不是在hover加

属性名：transition

| 参数       | 取值                                                         |
| ---------- | ------------------------------------------------------------ |
| 过渡的属性 | all:所有能过渡的属性都过渡     具体属性名如：width:   background-color: |
| 过渡的时长 | 数字＋...s                                                   |



#### 字体图标

iconfont 看似图标，本质字体 （结构和样式比较简单）

轻量级 灵活性 兼容性

把下载的fonts文件放到根目录那里

2.使用方式
我们将fonts文件夹拷贝到我们的项目根目录，在style标签中添加代码，这里注意引入的路径问题哦！

字体声明： 

```css
@font-face {
  /*1. 这个字体名称要注意 icomoon*/
  font-family: "icomoon";
  /*2. 一定要注意路径的问题*/
  src: url("fonts/icomoon.eot?7kkyc2");
  src: url("fonts/icomoon.eot?7kkyc2#iefix") format("embedded-opentype"),
       url("fonts/icomoon.ttf?7kkyc2") format("truetype"),
       url("fonts/icomoon.woff?7kkyc2") format("woff"),
       url("fonts/icomoon.svg?7kkyc2#icomoon") format("svg");
  font-weight: normal;
  font-style: normal;
}
span {
  font-family: "icomoon";
    /*可修改*/
  font-size: 50px;
  color: red;
}


body标签中添加
<span></span>
注意span标签中间的是图标的名字
```

追加图标

![image-20230501161424501](C:\Users\86135\AppData\Roaming\Typora\typora-user-images\image-20230501161424501.png)







#### CSS三角

#### CSS用户界面



### 17.项目前置认知

#### 骨架标签

#### SEO三大标签

优化搜索引擎

title

description

keywords







### 一些实践过程中的问题



![image-20230501194912494](C:\Users\86135\AppData\Roaming\Typora\typora-user-images\image-20230501194912494.png)

- 如图出现没有按照预期格式对齐的问题，则检查它究竟是与谁对齐，一般是因为上方浮动元素高度超出设置，导致占用下方浮动的位置

![image-20230501221350371](C:\Users\86135\AppData\Roaming\Typora\typora-user-images\image-20230501221350371.png)

- 若<a>标签里面的元素没有显示在规定区域内部，很可能是没有设置行高

![image-20230501223051571](C:\Users\86135\AppData\Roaming\Typora\typora-user-images\image-20230501223051571.png)

- 注意浮动书写顺序，float right就是从右到左写

![image-20230502153933356](C:\Users\86135\AppData\Roaming\Typora\typora-user-images\image-20230502153933356.png)

![image-20230502153952973](C:\Users\86135\AppData\Roaming\Typora\typora-user-images\image-20230502153952973.png)

- 子元素浮动，父级记得加clearfix清除浮动







### 补充or常忘

<pre> 是 HTML 中的一个标签，用于指定预格式化的文本块。它用于在 HTML 页面中显示保留空格、换行符和其他空白字符的文本。
`<pre>` 标签中的文本将按照原始格式显示，不会进行自动换行或忽略空格。这对于显示代码示例、文本艺术、表格等具有保留格式的内容非常有用。

以下是一个示例，展示如何在 HTML 中使用 `<pre>` 标签：

```html
<pre>
    This is a
    preformatted
    text block.
</pre>
```

在上述示例中，`<pre>` 标签包裹的文本将以原始格式显示，即保留了换行符和缩进。

需要注意的是，`<pre>` 标签不会自动对文本进行任何样式化，它只是保留文本的格式。如果你需要对 `<pre>` 内的文本应用特定的样式或布局，可以使用 CSS 进行自定义。



#### flex弹性布局

Flex布局（也称为弹性盒子布局）是一种用于构建响应式和灵活布局的CSS布局模型。它引入了一组新的CSS属性，用于对容器内的元素进行灵活的定位和调整。

##### Flex布局的主要作用：

1. **容器和项目的灵活排列**：使用Flex布局，你可以通过设置容器的 `display: flex;` 属性，将容器内的子元素（项目）组织为一个灵活的布局。这意味着项目可以根据可用空间进行自动调整和重新排列，以适应不同的屏幕大小和设备。

2. **弹性的空间分配**：通过设置 `flex` 属性，你可以定义每个项目的灵活性和占用空间比例。项目可以根据设定的比例分配可用空间，实现自适应的布局。你可以决定项目的宽度、高度、缩放和顺序。

3. **对齐和对齐方式控制**：Flex布局提供了一组对齐和对齐方式的属性，例如 `justify-content` 和 `align-items`，可以控制项目在主轴和交叉轴上的对齐方式，实现居中、对齐到开始或对齐到结束等布局效果。

4. **响应式布局**：由于Flex布局具有灵活性，它非常适合用于构建响应式布局。通过设置媒体查询和适当的Flex属性，可以轻松实现在不同设备和屏幕大小下的自适应布局。

总之，Flex布局提供了一种直观且强大的方式来构建灵活的响应式布局。它使得对于容器内项目的布局、排列和对齐变得更加容易和可控，适用于各种场景，包括网页布局、导航栏、列表、卡片布局等。

**flex弹性比例布局** 

- 按行或按列 

- 有的固定尺寸，有的弹性

- flex里面再放flex盒子

**flex内的对齐方式**

- justify-content: center; 水平居中

- justify-content: flex-end; 水平靠右

- align-items: center; 垂直居中

- align-items: flex-end; 垂直底部

- 两个center就在中间了 

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>flex布局</title>
    <style>
        .main {
            width: 600px;
            height: 400px;
            background-color: aliceblue;
            display: flex;
            /* 成为flex盒子了 */
            flex-direction: column;
            /* 设置成按列排 */
        }
        .main div {
            background-color: aqua;
            border: 2px solid #666;
        }
   
        .flex1 {
            flex: 1;
        } 
        .flex2 {
            flex: 6;
            display: flex;
        }
        .flex3 {
            flex: 2;
        }
    </style>
</head>
<body>
    <div class="main">
        <div class="flex1">1</div>
        <div class="flex2">
            <div class="flex1"></div>
            <div class="flex3"></div>
        </div>
    </div> 
</body>
</html>
```

##### 主轴

在 Flex 布局中，主轴是 Flex 容器的一个重要概念。它是指 Flex 容器中的水平方向，也是 Flex 项目（Flex items）在水平方向上排列和对齐的轴线。

主轴的方向由 Flex 容器的 `flex-direction` 属性决定，它可以有以下四个可能的值：

1. `row`：主轴为水平方向，从左到右排列项目。这是默认值。
2. `row-reverse`：主轴为水平方向，从右到左排列项目。
3. `column`：主轴为垂直方向，从上到下排列项目。
4. `column-reverse`：主轴为垂直方向，从下到上排列项目。

无论主轴是水平方向还是垂直方向，Flex 容器的项目都会沿着主轴依次排列。项目的宽度（在 `row` 或 `row-reverse` 方向）或高度（在 `column` 或 `column-reverse` 方向）会影响它们在主轴上的分布。

通过在 Flex 布局中理解和操作主轴，可以控制项目的排列、对齐方式和间距，实现不同的布局效果。对于水平布局，可以使用主轴控制项目的水平对齐；对于垂直布局，可以使用主轴控制项目的垂直对齐。

##### 交叉轴

在Flex布局中，有两个主要轴：主轴（main axis）和交叉轴（cross axis）。

1. 主轴（main axis）：主轴是Flex容器中的主要方向，用来排列Flex子元素。它的方向由`flex-direction`属性决定。如果`flex-direction`设置为`row`，则主轴是水平方向；如果设置为`column`，则主轴是垂直方向。

2. 交叉轴（cross axis）：交叉轴是与主轴垂直的轴线，它的方向与主轴方向相反。如果主轴是水平方向，则交叉轴是垂直方向；如果主轴是垂直方向，则交叉轴是水平方向。

在Flex布局中，`justify-content`属性用于控制子元素在主轴上的对齐方式，而`align-items`属性用于控制子元素在交叉轴上的对齐方式。这样，我们可以根据主轴和交叉轴的不同组合，实现灵活的布局效果。

##### 常见属性

在Flex布局中，有一些属性是用来给父元素（Flex容器）设置的，而另一些属性是用来给子元素（Flex项目）设置的。

给父元素（Flex容器）设置的属性包括：

1. `display`: 设置元素为Flex容器，通常设置为`display: flex;`。
2. `flex-direction`: 设置主轴的方向，可以是`row`（水平方向）或`column`（垂直方向）。
3. `flex-wrap`: 控制子元素是否换行，可以是`nowrap`（不换行）或`wrap`（换行）。
4. `justify-content`: 控制子元素在主轴上的对齐方式。
5. `align-items`: 控制子元素在交叉轴上的对齐方式。
6. `align-content`: 控制多行子元素在交叉轴上的对齐方式（仅在`flex-wrap`设置为`wrap`时生效）。

给子元素（Flex项目）设置的属性包括：

1. `flex-grow`: 控制子元素在剩余空间中的放大比例。
2. `flex-shrink`: 控制子元素在空间不足时的缩小比例。
3. `flex-basis`: 设置子元素在主轴上的初始大小。
4. `flex`: 是`flex-grow`、`flex-shrink`和`flex-basis`的缩写。
5. `align-self`: 控制单个子元素在交叉轴上的对齐方式，会覆盖`align-items`的设置。

注意：这里列出的属性只是Flex布局中的一部分，还有其他属性可以用于更精细地控制Flex布局。

##### 均匀分布

如果你想让子元素在主轴上均匀分布，可以使用`justify-content`属性来实现。`justify-content`用于控制子元素在主轴上的对齐方式，包括以下几种取值：

1. `flex-start`：子元素在主轴上靠左对齐。
2. `flex-end`：子元素在主轴上靠右对齐。
3. `center`：子元素在主轴上居中对齐。
4. `space-between`：子元素在主轴上平均分布，首尾子元素分别贴着容器的两端，中间子元素之间间隔相等。
5. `space-around`：子元素在主轴上平均分布，各子元素之间间隔相等，同时首尾子元素与容器边缘的间隔是其他子元素之间间隔的一半。
6. `space-evenly`：子元素在主轴上平均分布，各子元素之间和首尾子元素与容器边缘的间隔都相等。

如果你想让子元素在主轴上均匀分布，可以将父元素的`justify-content`属性设置为`space-between`或`space-around`。例如：

```css
.container {
  display: flex;
  justify-content: space-between; /* 或者使用 justify-content: space-around; */
}
```

这样，子元素就会在主轴上均匀分布，它们之间的间隔相等，并且首尾子元素分别贴着容器的两端。





#### 设置元素的盒模型

- `box-sizing: border-box;`：
	- 设置元素的盒模型为 `border-box`。
	- 这意味着元素的宽度和高度包括了边框和内边距，而不会被添加的边框和内边距所撑开。
- `box-sizing: content-box;`：
	- 这是默认值，也是最常见的盒模型设置。
	- 当使用 `content-box` 时，元素的宽度和高度只包括内容区域，不包括边框和内边距。
	- 这意味着如果给元素添加了边框和内边距，它们会增加元素的实际宽度和高度。

- `box-sizing: padding-box;`：

	- 使用 `padding-box` 时，元素的宽度和高度包括内容区域和内边距，但不包括边框。
	- 这意味着边框不会增加元素的宽度和高度，但内边距会。

	

#### background...

##### background-repeat

当背景图像小于容器的尺寸时，通常情况下，背景图像会平铺（重复）以填充整个容器。这种平铺方式可以是水平平铺、垂直平铺或同时进行水平和垂直平铺。这样的平铺效果可能不是我们想要的，尤其是对于包含独特或具有明确定位的背景图像时。

通过使用 `background-repeat: no-repeat;` 属性，我们可以阻止背景图像的平铺效果，而只让它在容器中显示一次。这样，无论背景图像的大小和容器的大小如何，图像都不会在容器中重复出现。背景图像将只显示一次，并且始终保持其原始大小和位置。

这种设置通常用于在背景中显示单个图像，而不希望它在整个容器中重复出现，以保持视觉上的清晰度和一致性。

##### background-size: cover

`background-size: cover;` 设置背景图像按比例缩放以填满整个容器，保持宽高比不变



#### 动态效果

##### transition

`transition: 0.5s;` 设置导航菜单的过渡效果。这里的 `0.5s` 表示过渡的持续时间为 0.5 秒。过渡效果可以在状态改变时产生平滑的动画效果，例如在悬停或点击时改变导航菜单的外观。







#### object-fit

`object-fit` 是一个 CSS 属性，用于指定替换元素（如 `<img>`、`<video>` 或 `<iframe>`）在其容器中的尺寸调整和裁剪方式。

通常情况下，替换元素的尺寸会根据其自身的宽高比例来调整，以适应容器的尺寸。然而，当容器的宽高比例与替换元素的宽高比例不同时，替换元素可能会被拉伸、压缩或显示不完整。

通过使用 `object-fit` 属性，可以控制替换元素在容器中的尺寸调整方式，以实现所需的裁剪或缩放效果。

`object-fit` 属性可以取以下值：

1. `fill`：默认值。替换元素将填充容器，可能会被拉伸或压缩，以完全填充容器的尺寸。
2. `contain`：替换元素将保持其宽高比例，尽可能大地适应容器的尺寸，同时保持完整可见，可能会在容器内留有空白区域。
3. `cover`：替换元素将保持其宽高比例，尽可能大地覆盖容器的尺寸，可能会被裁剪以适应容器。
4. `none`：替换元素将保持其原始尺寸，不会进行任何调整或缩放。
5. `scale-down`：替换元素将选择 `none` 或 `contain` 中较小的那个尺寸调整方式，以保持其宽高比例，并尽可能小地适应容器的尺寸。

通过设置适当的 `object-fit` 值，可以控制替换元素在容器中的尺寸调整方式，以获得所需的显示效果。这对于在保持可见性的同时调整图像或视频的缩放、裁剪等情况非常有用。