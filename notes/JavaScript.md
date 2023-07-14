# JavaScript

## API

**应用程序接口（Application Programming Interfaces**（**API**）

### 浏览器 API 

内建于 web 浏览器中，它们可以将数据从周边计算机环境中筛选出来，还可以做实用的复杂工作。例如：

- [`文档对象模型 API（DOM（Document Object Model）API）`](https://developer.mozilla.org/zh-CN/docs/Web/API/Document_Object_Model) 能通过创建、移除和修改 HTML，为页面动态应用新样式等手段来操作 HTML 和 CSS。比如当某个页面出现了一个弹窗，或者显示了一些新内容（像上文小 demo 中看到那样），这就是 DOM 在运行。
- [`地理位置 API（Geolocation API）`](https://developer.mozilla.org/zh-CN/docs/Web/API/Geolocation) 获取地理信息。这就是为什么 [谷歌地图](https://www.google.cn/maps) 可以找到你的位置，而且标示在地图上。
- [`画布（Canvas）`](https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API) 和 [`WebGL`](https://developer.mozilla.org/zh-CN/docs/Web/API/WebGL_API) API 可以创建生动的 2D 和 3D 图像。人们正运用这些 web 技术制作令人惊叹的作品。参见 [Chrome Experiments](https://www.chromeexperiments.com/webgl) 以及 [webglsamples](https://webglsamples.org/)。
- 诸如 [`HTMLMediaElement`](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLMediaElement) 和 [`WebRTC`](https://developer.mozilla.org/zh-CN/docs/Web/API/WebRTC_API) 等 [影音类 API](https://developer.mozilla.org/zh-CN/docs/Web/Guide/Audio_and_video_delivery) 让你可以利用多媒体做一些非常有趣的事，比如在网页中直接播放音乐和影片，或用自己的网络摄像头获取录像，然后在其他人的电脑上展示（试用简易版 [截图 demo](http://chrisdavidmills.github.io/snapshot/) 以理解这个概念）。

### 第三方 API 

并没有默认嵌入浏览器中，一般要从网上取得它们的代码和信息。比如：

- [Twitter API](https://dev.twitter.com/overview/documentation)、[新浪微博 API](https://open.weibo.com/) 可以在网站上展示最新推文之类。
- [谷歌地图 API](https://developers.google.com/maps/)、[高德地图 API](https://lbs.amap.com/) 可以在网站嵌入定制的地图等等



## 一些概念

### [解释代码 vs 编译代码](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/First_steps/What_is_JavaScript#解释代码_vs_编译代码)

作为程序员，你或许听说过这两个术语：**解释**（interpret）和 **编译**（compile）。在解释型语言中，代码自上而下运行，且实时返回运行结果。代码在由浏览器执行前，不需要将其转化为其他形式。代码将直接以文本格式（text form）被接收和处理。

相对的，编译型语言需要先将代码转化（编译）成另一种形式才能运行。比如 C/C++ 先被编译成汇编语言，然后才能由计算机运行。程序将以二进制的格式运行，这些二进制内容是由程序源代码产生的。

JavaScript 是轻量级解释型语言。浏览器接受到 JavaScript 代码，并以代码自身的文本格式运行它。技术上，几乎所有 JavaScript 转换器都运用了一种叫做即时编译（just-in-time compiling）的技术；当 JavaScript 源代码被执行时，它会被编译成二进制的格式，使代码运行速度更快。尽管如此，JavaScript 仍然是一门解释型语言，因为编译过程发生在代码运行中，而非之前。

两种类型的语言各有优势，这个问题我们暂且不谈。

### [服务器端代码 vs 客户端代码](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/First_steps/What_is_JavaScript#服务器端代码_vs_客户端代码)

你或许还听说过**服务器端（server-side）**和 **客户端（client-side）\**代码这两个术语，尤其是在 web 开发时。客户端代码是在用户的电脑上运行的代码，在浏览一个网页时，它的客户端代码就会被下载，然后由浏览器来运行并展示。这就是\**客户端 JavaScript**。

而服务器端代码在服务器上运行，接着运行结果才由浏览器下载并展示出来。流行的服务器端 web 语言包括：PHP、Python、Ruby、ASP.NET 以及...... JavaScript！JavaScript 也可用作服务器端语言，比如现在流行的 Node.js 环境，你可以在我们的 [动态网页 - 服务器端编程](https://developer.mozilla.org/zh-CN/docs/Learn/Server-side) 主题中找到更多关于服务器端 JavaScript 的知识。

### [动态代码 vs 静态代码](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/First_steps/What_is_JavaScript#动态代码_vs_静态代码)

“**动态**”一词既适用于客户端 JavaScript，又适用于描述服务器端语言。是指通过按需生成新内容来更新 web 页面 / 应用，使得不同环境下显示不同内容。服务器端代码会在服务器上动态生成新内容，例如从数据库中提取信息。而客户端 JavaScript 则在用户端浏览器中动态生成新内容，比如说创建一个新的 HTML 表格，用从服务器请求到的数据填充，然后在网页中向用户展示这个表格。两种情况的意义略有不同，但又有所关联，且两者（服务器端和客户端）经常协同作战。

没有动态更新内容的网页叫做“**静态**”页面**，**所显示的内容不会改变。



## 脚本调用策略

### 内部脚本

“内部”示例使用了以下结构：

```
document.addEventListener("DOMContentLoaded", function() {
  . . .
});
```

这是一个事件监听器，它监听浏览器的 "`DOMContentLoaded`" 事件，即 HTML 文档体加载、解释完毕事件。事件触发时将调用 " `. . .`" 处的代码，从而避免了错误发生（[事件](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Building_blocks/Events) 的概念稍后学习）。

### 外部脚本

#### async

“外部”示例中使用了 JavaScript 的一项现代技术（`async` “异步”属性）来解决这一问题，它告知浏览器在遇到 `<script>` 元素时不要中断后续 HTML 内容的加载。

```
<script src="script.js" async></script>
```

上述情况下，脚本和 HTML 将一并加载，代码将顺利运行。

#### defer

```
<script defer src="js/vendor/jquery.js"></script>

<script defer src="js/script2.js"></script>

<script defer src="js/script3.js"></script>
```

添加 `defer` 属性的脚本将按照在页面中出现的顺序加载，因此第二个示例可确保 `jquery.js` 必定加载于 `script2.js` 和 `script3.js` 之前，同时 `script2.js` 必定加载于 `script3.js` 之前。

**脚本调用策略小结：**

- 如果脚本无需等待页面解析，且无依赖独立运行，那么应使用 `async`。
- 如果脚本需要等待页面解析，且依赖于其他脚本，调用这些脚本时应使用 `defer`，将关联的脚本按所需顺序置于 HTML 中。



## 一、Javascript基础要件

### 变量

- String

- Number

- Boolean

- Array

- Object

	对象：JavaScript 里一切皆对象，一切皆可储存在变量里。这一点要牢记于心

#### var和let

如果你编写一个声明并初始化变量的多行 JavaScript 程序，你可以在初始化一个变量之后用 `var` 声明它，它仍然可以工作。

其次，当你使用 `var` 时，可以根据需要多次声明相同名称的变量，但是 `let` 不能。

出于这些以及其他原因，我们建议您在代码中尽可能多地使用 `let`，而不是 `var`.

### 运算符

#### **== 和 ===**

在 JavaScript 中，`==` 和 `===` 都是用于比较两个值的操作符，但它们之间有一些重要的区别。

1. `==`（相等运算符）：它用于比较两个值是否相等，但在进行比较之前会进行类型转换。

	- 如果比较的两个值类型不同，JavaScript 会尝试将它们转换为相同的类型，然后再进行比较。
	- 如果比较的两个值都是字符串、数字、布尔值或 null，则会执行常规的相等性检查。
	- 如果一个值是 `undefined` 或 `null`，而另一个值是 `null` 或 `undefined`，则它们被视为相等。
	- 如果比较的两个值都是对象，则比较它们的引用，只有在引用指向同一个对象时才被认为是相等的。

	以下是一些示例：

	```
	javascriptCopy code5 == 5    // true
	'5' == 5  // true (进行类型转换后，字符串 '5' 变成了数字 5)
	null == undefined  // true
	[1, 2] == [1, 2]   // false (两个数组的引用不同)
	```

2. `===`（严格相等运算符）：它用于比较两个值是否完全相等，包括类型和值。

	- 如果比较的两个值类型不同，它们被视为不相等。
	- 如果比较的两个值都是字符串、数字、布尔值、null 或 undefined，它们必须具有相同的类型和相同的值才被视为相等。
	- 如果比较的两个值都是对象或数组，它们必须引用同一个对象才被视为相等。

	以下是一些示例：

	```
	javascriptCopy code5 === 5    // true
	'5' === 5  // false (类型不同)
	null === undefined  // false (类型不同)
	[1, 2] === [1, 2]   // false (两个数组的引用不同)
	```

总结：

- `==` 运算符在比较之前进行类型转换，可以在某些情况下自动转换类型。
- `===` 运算符进行严格的类型和值比较，要求类型和值都完全相等。

通常建议使用 `===` 运算符，因为它可以避免因类型转换而导致的意外结果。只有在特定的情况下，比如明确需要进行类型转换时，才使用 `==` 运算符。

#### +运算符

你也可以使用 `+` 运算符将文本字符串连接在一起（术语“串联”（*concatenation*））。尝试依次输入以下几行：

```
const name = 'Bingo';
name;
const hello = ' says hello!';
hello;
const greeting = name + hello;
greeting;
```

| `**` | 幂   | 取底数的指数次方，即指数所指定的底数相乘。它在 EcmaScript 2016 中首次引入。 | `5 ** 5` (返回 3125，相当于 `5 * 5 * 5 * 5 * 5` 。) |
| ---- | ---- | ------------------------------------------------------------ | --------------------------------------------------- |
|      |      |                                                              |                                                     |



### 函数 Function

#### 基本函数

```
function displayMessage() {

}
```



#### 匿名函数

匿名函数是一种在编程中没有名称标识符的函数。它是一种可以被定义和使用，但没有特定名称的函数。

在 JavaScript 中，匿名函数可以使用函数表达式或箭头函数语法来创建。

1. 函数表达式的匿名函数：

```
const myFunction = function() {
  // 函数体
};
```

上述代码中，`myFunction` 是一个变量，它引用了一个匿名函数。你可以通过调用 `myFunction()` 来执行这个函数。

1. 箭头函数的匿名函数：

```
const myFunction = () => {
  // 函数体
};
```

上述代码中，`myFunction` 是一个变量，它引用了一个箭头函数的匿名函数。同样，你可以通过调用 `myFunction()` 来执行这个函数。

匿名函数在许多情况下非常有用，特别是当你只需要定义一个函数来作为其他函数的参数或临时执行某些操作时。你可以直接将匿名函数传递给其他函数，或在需要时立即执行它。

以下是一个示例，展示了如何使用匿名函数作为参数传递给 `setTimeout` 函数：

```
setTimeout(function() {
  console.log('Hello, world!');
}, 1000);
```

在上述示例中，我们创建了一个匿名函数作为 `setTimeout` 函数的第一个参数，它将在延迟 1000 毫秒后执行。

匿名函数的好处之一是可以避免污染全局命名空间，因为它们没有特定的名称。它们可以在需要的地方定义和使用，而无需考虑名称冲突的问题。



#### 箭头函数

`() =>` 是 JavaScript 中的箭头函数（Arrow Function）的语法表示。

箭头函数是在 ES6（ECMAScript 2015）中引入的一种新的函数定义方式，它提供了更简洁的语法形式和改变了函数内部的 `this` 绑定规则。

箭头函数的基本语法如下：

```
() => {
  // 函数体
}
```

箭头函数可以没有参数，或者带有一个或多个参数。当只有一个参数时，可以省略参数的括号。例如：

```
x => {
  // 函数体
}

// 或

(x, y) => {
  // 函数体
}
```

箭头函数的主要优点是它们的简洁性和对 `this` 关键字的处理方式。在箭头函数内部，`this` 的值会继承自外部作用域，而不是在函数被调用时绑定新的值。

以下是箭头函数的一些示例：

```
// 没有参数的箭头函数
const greet = () => {
  console.log('Hello!');
};
greet(); // 输出: Hello!

// 带有参数的箭头函数
const multiply = (a, b) => {
  return a * b;
};
console.log(multiply(2, 3)); // 输出: 6

// 箭头函数的简写形式（隐式返回）
const square = x => x * x;
console.log(square(4)); // 输出: 16
```

需要注意的是，箭头函数没有自己的 `this` 值，它会继承外部作用域的 `this` 值。这意味着箭头函数不适用于需要动态绑定 `this` 的场景，例如作为对象方法或构造函数。



#### 调用函数

```
const btn = document.querySelector('button');
btn.onclick = displayMessage;  注意函数名之后没有括号
```

在函数名后面的这个括号叫做“函数调用运算符”（function invocation operator）。你只有在想直接调用函数的地方才这么写。同样要重视的是，匿名函数里面的代码也不是直接运行的，只要代码在函数作用域内。（否则加上括号之后没有按按钮也会显示）

#### 使用参数

```
   const btn = document.querySelector('button');
        btn.onclick = function(){
            displayMessage('Woo,great!');
        };
        // 如果我们要在点击事件里面绑定这个新函数，我们不能直接使用（btn.onclick = displayMessage('Woo, this is a different message!');）前面已经讲过— 我们要把它放在一个匿名函数里面，不然函数会直接调用，而不是按钮点击之后才会调用，这不是我们想要的结果。
        function displayMessage(msgText,msgType) {
            const html = document.querySelector('html');

            const panel = document.createElement('div');
            panel.setAttribute('class', 'msgBox');
            html.appendChild(panel);

            const msg = document.createElement('p');
            msg.textContent = msgText;
            panel.appendChild(msg);

            const closeBtn = document.createElement('button');
            closeBtn.textContent = 'x';
            panel.appendChild(closeBtn);

            closeBtn.onclick = function () {
                panel.parentNode.removeChild(panel);
            }
            
            if (msgType === 'warning') {
                msg.style.backgroundImage = 'url(icons/warning.png)';
                panel.style.backgroundColor = 'red';
            } else if (msgType === 'chat') {
                msg.style.backgroundImage = 'url(icons/chat.png)';
                panel.style.backgroundColor = 'aqua';
            } else {
                msg.style.paddingLeft = '20px';
            }
        }
```

#### 函数返回值



### 事件 Event

侦听事件发生的结构称为**事件监听器**（Event Listener），响应事件触发而运行的代码块被称为**事件处理器**（Event Handler）。

```
document.querySelector("html").addEventListener("click", function () {
  alert("别戳我，我怕疼。");
});
```

将事件与元素绑定有许多方法。在这里选用了 <html> 元素，然后调用了它的 [`addEventListener()`](https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget/addEventListener) 方法，将事件名称（`'click'`）以及其回调函数（当事件发生时，调用该函数）传入该函数中作为调用参数。

刚刚我们传递给 `addEventListener()` 的函数被称为***匿名函数***，因为它没有名字。匿名函数还有另一种我们称之为***箭头函数***的写法，箭头函数使用 `() =>` 代替 `function ()`：

```
document.querySelector('html').addEventListener('click', () => {
  alert('别戳我，我怕疼。');
});
```

以下是一些常见的事件类型：

- 鼠标事件：如点击（click）、双击（dblclick）、鼠标移动（mousemove）等。
- 键盘事件：如按键按下（keydown）、按键松开（keyup）等。
- 表单事件：如提交表单（submit）、输入变化（input）等。
- 文档加载事件：如文档加载完成（DOMContentLoaded）等。
- 窗口事件：如窗口大小改变（resize）、窗口关闭（beforeunload）等。

每个事件都有其对应的事件对象，并且事件对象的属性和方法可能会根据事件类型的不同而有所不同。

因此，当你编写事件处理函数时，你可以通过访问 `event` 对象来获取有关事件的信息，无论是鼠标点击还是其他类型的事件。这样，你就可以根据事件的类型和目标元素来执行相应的操作。



#### addEventListener()

`addEventListener` 是 JavaScript 中用于**添加事件监听器**的方法。它允许你为特定的事件类型注册一个回调函数，以便在事件发生时执行相应的操作。

`addEventListener` 的语法如下：

```
target.addEventListener(type, listener[, options]);
```

- `target`：要添加事件监听器的目标元素。
- `type`：要监听的事件类型，如 "click"、"keydown"、"mouseover" 等。
- `listener`：要执行的回调函数，也称为事件处理函数。当指定的事件类型发生时，该函数将被调用。
- `options`（可选）：一个包含附加选项的对象，用于指定有关事件监听的更多详细信息，例如 `capture`（是否在捕获阶段触发）、`once`（是否只触发一次）等。

以下是一个简单的示例，演示如何使用 `addEventListener` 添加事件监听器：

```
<button id="myButton">Click me</button>
var button = document.getElementById("myButton");

button.addEventListener("click", function(event) {
  console.log("Button clicked!");
});
```

在上述示例中，我们首先使用 `document.getElementById` 方法获取具有 id "myButton" 的按钮元素，并将其存储在变量 `button` 中。

然后，我们使用 `addEventListener` 方法为按钮添加一个 "click" 事件监听器。在这个示例中，匿名函数作为事件处理函数传递给 `addEventListener`。当按钮被点击时，匿名函数将被调用，输出 "Button clicked!" 到控制台。

通过使用 `addEventListener`，你可以为目标元素添加多个不同类型的事件监听器，并在事件发生时执行相应的操作。这是处理交互和用户操作的关键技术之一。

#### removeEventListener()

```
btn.removeEventListener("click", changeBackground);
```

#### 事件对象

有时候在事件处理函数内部，你可能会看到一个固定指定名称的参数，例如 `event`、`evt` 或 `e`。这被称为**事件对象**，它被自动传递给事件处理函数，以提供额外的功能和信息。例如，让我们稍稍重写一遍我们的随机颜色示例：

```
const btn = document.querySelector("button");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

function bgChange(e) {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  e.target.style.backgroundColor = rndCol;
  console.log(e);
}

btn.addEventListener("click", bgChange);
```

#### DOM事件流

- 事件捕获阶段
- 处于目标阶段
- 事件冒泡阶段

##### 事件冒泡

事件从被点击的最里面的元素**冒泡**而出。

##### 事件捕获

事件不是先在最内层的目标元素上发生，然后在连续较少的嵌套元素上发生，而是先在*最小嵌套*元素上发生，然后在连续更多的嵌套元素上发生，直到达到目标。



#### 事件委托

当我们想在用户与大量的子元素中的任何一个互动时运行一些代码时，我们在它们的父元素上设置事件监听器，让发生在它们身上的事件冒泡到它们的父元素上，而不必在每个子元素上单独设置事件监听器。





### 循环 Loop



### 字符串string

#### .length

#### indexOf( )

indexOf() 方法**可返回某个指定的字符串值在字符串中首次出现的位置**（索引）。 如果没有找到匹配的字符串则返回-1。

#### slice(  )

slice() 方法可从已有的数组中**返回选定的元素**。

slice() 方法可**提取字符串的某个部分**，并以新的字符串返回被提取的部分。

**注意：** slice() 方法不会改变原始数组。

当你知道字符串中的子字符串开始的位置，以及想要结束的字符时，[`slice()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/slice)可以用来提取 它。尝试以下：**（含前不含后）**

```
browserType.slice(0,3);
```

此外，如果您知道要在某个字符之后提取字符串中的所有剩余字符，则不必包含第二个参数，而只需要包含要从中提取的字符位置 字符串中的其余字符。尝试以下：

```
browserType.slice(2);
```

#### toLowerCase()   toUpperCase()

字符串并将所有字符分别转换为小写或大写

#### replace()

它需要两个参数 - 要被替换下的字符串和要被替换上的字符串。尝试这个例子：

```
browserType.replace('moz','van');
```

注意，在实际程序中，想要真正更新 `browserType` 变量的值，您需要设置变量的值等于刚才的操作结果；它不会自动更新子串的值。所以事实上你需要这样写：`browserType = browserType.replace('moz','van');`。



### 数组

您可以将任何类型的元素存储在数组中 - 字符串，数字，对象，另一个变量，甚至另一个数组。您也可以混合和匹配项目类型 - 它们并不都是数字，字符串等。

#### 字符串与数组之间的转换

**字符串-->数组**

##### split()

在其最简单的形式中，这需要一个参数，您要将字符串分隔的字符，并返回分隔符之间的子串，作为数组中的项。

**数组-->字符串**

##### join()

##### toString()

#### 添加和删除数组项

##### push()

##### pop()

要在数组末尾添加或删除一个项目，我们可以使用 [`push()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/push) 和 [`pop()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)。

##### unshift()

##### shift()



## 二、Javascript对象介绍

### 对象基础

#### 点表示法

```
person['age']
person['name']['first']
```

#### 括号表示法

```
person['age']
person['name']['first']
```

#### 设置对象成员

```
person.age = 45
person['name']['last'] = 'Cratchit'

person['eyes'] = 'hazel'
person.farewell = function() { alert("Bye everybody!") }

var myDataName = nameInput.value
var myDataValue = nameValue.value
person[myDataName] = myDataValue

```

#### this

```
var person1 = {
  name : 'Chris',
  greeting: function() {
    alert('Hi! I\'m ' + this.name + '.');
  }
}

var person2 = {
  name : 'Brian',
  greeting: function() {
    alert('Hi! I\'m ' + this.name + '.');
  }
}
```

### 对象原型

#### 原型和原型链

JavaScript 中所有的对象都有一个内置属性，称为它的 **prototype**（原型）。它本身是一个对象，故原型对象也会有它自己的原型，逐渐构成了**原型链**。原型链终止于拥有 `null` 作为其原型的对象上。

访问对象原型的标准方法是 [`Object.getPrototypeOf()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf)

有个对象叫 `Object.prototype`，它是最基础的原型，所有对象默认都拥有它。`Object.prototype` 的原型是 `null`，所以它位于原型链的终点



在 JavaScript 中，构造函数是一种特殊的函数，用于创建对象实例。通过使用 `new` 关键字调用构造函数，可以创建一个新的对象，这个对象会自动与构造函数的原型建立关联。

每个构造函数都有一个 `prototype` 属性，它是一个对象，也被称为构造函数的原型对象。构造函数的原型对象是用于存储可以被该构造函数创建的所有实例共享的属性和方法。

当你创建一个对象实例时，它会自动关联到构造函数的原型对象。这意味着对象实例可以访问构造函数原型对象上定义的属性和方法。

通过原型链的机制，对象实例可以沿着原型链向上查找属性和方法，直到找到或者到达原型链的顶端。

构造函数和原型对象的关系可以总结如下：

1. 构造函数用于创建对象实例。
2. 构造函数的 `prototype` 属性指向该构造函数的原型对象。
3. 原型对象中存储了可以被构造函数创建的所有实例共享的属性和方法。
4. 对象实例通过原型链可以访问构造函数原型对象上定义的属性和方法。

通过构造函数和原型对象的结合使用，可以实现对象的创建、共享属性和方法的定义，以及对象之间的继承关系。

请注意，每个构造函数和原型对象都是独立的，它们可以创建不同的对象实例，并且每个实例都有自己的属性。但是，它们共享原型对象上的方法和属性，这样可以实现代码的重用和节省内存。





![img](https://pic2.zhimg.com/v2-e722d5325f7d4215169f1d04296e0f89_b.jpg)

**原型 `prototype` 和 `__proto__`**

- 每个对象都有一个`__proto__`属性，并且指向它的`prototype`原型对象

- 每个[构造函数](https://www.zhihu.com/search?q=构造函数&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"article"%2C"sourceId"%3A"35790971"})都有一个`prototype`原型对象

- - `prototype`原型对象里的`constructor`指向构造函数本身

**原型链**

每个对象都有一个`__proto__`，它指向它的`prototype`原型对象，而`prototype`原型对象又具有一个自己的`prototype`原型对象，就这样层层往上直到一个对象的原型`prototype`为`null`

这个查询的路径就是`原型链`



#### **JavaScript 中的继承**

- 属性继承 

```js
function Person (name, age) {
    this.name = name
    this.age = age
}

// 方法定义在构造函数的原型上
Person.prototype.getName = function () { console.log(this.name)}

function Teacher (name, age, subject) {
    Person.call(this, name, age)
    //属性的继承是通过在一个类内执行另外一个类的构造函数，通过call指定this为当前执行环境，这样		就可以得到另外一个类的所有属性。
    this.subject = subject
}
```

- 方法继承

```js
Teacher.prototype = Object.create(Person.prototype)
Teacher.prototype.constructor = Teacher
```



#### 属性遮蔽

当该对象不具备这个属性时，才会检查原型

#### 设置原型

`Object.create()` 方法创建一个新的对象，并允许你指定一个将被**用作新对象原型**的对象。

```
const personPrototype = {
  greet() {
    console.log("hello!");
  },
};

const carl = Object.create(personPrototype);
carl.greet(); // hello!

这里我们创建了一个 personPrototype 对象，它有一个 greet() 方法。然后我们使用 Object.create() 来创建一个以 personPrototype 为原型的新对象。现在我们可以在新对象上调用 greet()，而原型提供了它的实现
```

#### 使用构造函数

```
const personPrototype = {
  greet() {
    console.log(`你好，我的名字是 ${this.name}！`);
  },
};

function Person(name) {
  this.name = name;
}

Object.assign(Person.prototype, personPrototype);
// 或
// Person.prototype.greet = personPrototype.greet;

```

这里我们：

- 创建了一个 `personPrototype` 对象，它具有 `greet()` 方法
- 创建了一个 `Person()` 构造函数，它初始化了要创建人物对象的名字

然后我们使用 [Object.assign](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/assign) 将 `personPrototype` 中定义的方法绑定到 `Person` 函数的 `prototype` 属性上。

在这段代码之后，使用 `Person()` 创建的对象将获得 `Person.prototype` 作为其原型，其中自动包含 `greet` 方法。

#### 自有属性

**方法是在原型上定义的**，**但数据属性是在构造函数中定义的**

直接在对象中定义的属性，如这里的`name`，被称为**自有属性**，你可以使用静态方法 [`Object.hasOwn()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn) 检查一个属性是否是自有属性：



timeline





### 面向对象编程OOP

面向对象编程将一个系统抽象为许多对象的集合，每一个对象代表了这个系统的特定方面。对象包括函数（方法）和数据。一个对象可以向其他部分的代码提供一个公共接口，而其他部分的代码可以通过公共接口执行该对象的特定操作，系统的其他部分不需要关心对象内部是如何完成任务的，这样保持了对象自己内部状态的私有性。

#### 类与实例

类并不做任何事情，类只是一种用于创建具体对象的模板。`Professor` 类可以创建一个具体的教授，我们称这样创建出来的具体教授为 `Professor` 类的**实例**。由类创建实例的过程是由一个特别的函数——**构造函数**所完成的。开发人员将类所需要的值传入构造函数，构造函数即可根据传入的值初始化实例的内部状态。

通常来说，需要将构造函数作为类定义的一部分明确声明，并且构造函数通常具有和类名相同的函数名。

```
class Professor
    properties
        name
        teaches
    constructor
        Professor(name, teaches)
    methods
        grade(paper)
        introduceSelf()
```

#### 继承

```
class Person
    properties
        name
    constructor
        Person(name)
    methods
        introduceSelf()

class Professor : extends Person
    properties
        teaches
    constructor
        Professor(name, teaches)
    methods
        grade(paper)
        introduceSelf()

class Student : extends Person
    properties
        year
    constructor
        Student(name, year)
    methods
        introduceSelf()
```

在这种情况下，我们称 `Person` 类是 `Professor` 类和 `Student` 类的**超类**（superclass）或**父类**（parent class）。反之，我们称 `Professor` 类和 `Student` 类是 `Person` 类的**子类**（subclass 或 child class）

当一个方法拥有相同的函数名，但是在不同的类中可以具有不同的实现时，我们称这一特性为**多态**（polymorphism）。当一个方法在子类中替换了父类中的实现时，我们称之为子类**重写/重载**（override）了父类中的实现。

#### 封装

当其他部分的代码想要执行对象的某些操作时，可以借助对象向外部提供的接口完成操作，借此，对象保持了自身的内部状态不会被外部代码随意修改。也就是说，对象的内部状态保持了私有性，而外部代码只能通过对象所提供的接口访问和修改对象的内部状态，不能直接访问和修改对象的内部状态。保持对象内部状态的私有性、明确划分对象的公共接口和内部状态，这些特性称之为**封装**（encapsulation）。

在许多面向对象编程语言中，我们可以使用 `private` 关键字标记对象的私有部分，也就是外部代码无法直接访问的部分。如果一个属性在被标记为 `private` 的情况下，外部代码依旧尝试访问该属性，那么通常来说，计算机会抛出一个错误。

```
class Student : extends Person
    properties
       year
    constructor
        Student(name, year)
    methods
       introduceSelf()
       canStudyArchery() { return this.year > 1 }
           
if (student.canStudyArchery()) {
  // 允许学生选修弓箭课课
}

```

```
class Student : extends Person
    properties
       private year
    constructor
        Student(name, year)
    methods
       introduceSelf()
       canStudyArchery() { return this.year > 1 }

student = new Student('Weber', 1)
student.year // 错误：'year'是学生类的私有属性
```

#### OOP与JavaScript

- **构造函数**：在 JavaScript 中，构造函数可以实现类的定义，帮助我们在一个地方描述类的“形状”，包括定义类的方法。不过，原型也可以用于实现类的定义。例如，如果一个方法定义于构造函数的 `prototype` 属性中，那么所有由该构造函数创造出来的对象都可以通过原型使用该方法，而我们也不再需要将它定义在构造函数中。
- **原型链**：原型链很自然地实现了继承特性。例如，如果我们由 `Person` 原型构造了一个 `Student` 类，那么我们可以继承 `Person` 类的 `name` 属性，重写 `introduceSelf()` 方法。

**类和对象**

对象通常是由类创造出来的实例。由此，定义类的方式（定义类的语法）和实例化对象的方式（构造函数）也是不同的。

而在 JavaScript 中，我们经常会使用函数或对象字面量创建对象，也就是说，JavaScript 可以在没有特定的类定义的情况下创建对象。相对于基于类的面向对象编程来说，这种方式更为轻量，帮助我们更为方便地使用对象。

**原型链和继承**

在继承方式下，当一个子类完成继承时，由该子类所创建的对象既具有其子类中单独定义的属性，又具有其父类中定义的属性（以及父类的父类，依此类推）。而在原型链中，每一个层级都代表了一个不同的对象，不同的对象之间通过 `__proto__` 属性链接起来。原型链的行为并不太像是继承，而更像是**委派**（delegation）。委派同样是对象中的一种编程模式。当我们要求对象执行某项任务时，在委派模式下，对象可以自己执行该项任务，或者要求另一个对象（委派的对象）以其自己的方式执行这项任务。在许多方面，相对于继承来说，委派可以更为灵活地在许多对象之间建立联系（例如，委派模式可以在程序运行时改变、甚至完全替换委派对象）。



### JavaScript中的类

#### 类和构造函数

```
class Person {

  name;

  constructor(name) {
    this.name = name;
  }

  introduceSelf() {
    console.log(`Hi! I'm ${this.name}`);
  }

}


const giles = new Person('Giles');

giles.introduceSelf(); // Hi! I'm Giles

```

**省略构造函数**

如果你不需要任何特殊的初始化内容，你可以省略构造函数，默认的构造函数会被自动生成：

```
class Animal {

  sleep() {
    console.log('zzzzzzz');
  }

}

const spot = new Animal();

spot.sleep(); // 'zzzzzzz'
```

#### 继承

```
class Professor extends Person {

  teaches;

  constructor(name, teaches) {
    super(name);
    this.teaches = teaches;
  }

  introduceSelf() {
    console.log(`My name is ${this.name}, and I will be your ${this.teaches} professor.`);
  }

  grade(paper) {
    const grade = Math.floor(Math.random() * (5 - 1) + 1);
    console.log(grade);
  }

}

 如果子类有任何自己的初始化内容需要完成，它也必须先使用 super() 来调用父类的构造函数，并传递父类构造函数期望的任何参数。
```

#### 封装

```
class Student extends Person {

  #year;

  constructor(name, year) {
    super(name);
    this.#year = year;
  }


  introduceSelf() {
    console.log(`Hi! I'm ${this.name}, and I'm in year ${this.#year}.`);
  }

  canStudyArchery() {
    return this.#year > 1;
  }

}
私有数据属性必须在类的声明中声明，而且其名称需以 # 开头。
```

```
class Example {

  somePublicMethod() {
    this.#somePrivateMethod();
  }

  #somePrivateMethod() {
    console.log('You called me?');
  }

}

const myExample = new Example();

myExample.somePublicMethod(); // 'You called me?'

myExample.#somePrivateMethod(); // SyntaxError

与私有数据属性一样，你也可以声明私有方法。而且名称也是以 # 开头，只能在类自己的方法中调用
```



### 使用JSON

[JSON](https://developer.mozilla.org/zh-CN/docs/Glossary/JSON) 是一种按照 JavaScript 对象语法的**数据格式**

JSON 可以作为一个对象或者字符串存在，前者用于解读 JSON 中的数据，后者用于通过网络传输 JSON 数据。这不是一个大事件——JavaScript 提供一个全局的 可访问的 [JSON](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON) 对象来对这两种数据进行转换。

一个 JSON 对象可以被储存在它自己的文件中，这基本上就是一个文本文件，扩展名为 `.json`，还有 [MIME type](https://developer.mozilla.org/zh-CN/docs/Glossary/MIME_type) 用于 `application/json`.

#### JSON结构

```
{
  "squadName" : "Super hero squad",
  "homeTown" : "Metro City",
  "formed" : 2016,
  "secretBase" : "Super tower",
  "active" : true,
  "members" : [
    {
      "name" : "Molecule Man",
      "age" : 29,
      "secretIdentity" : "Dan Jukes",
      "powers" : [
        "Radiation resistance",
        "Turning tiny",
        "Radiation blast"
      ]
    },
    {
      "name" : "Madame Uppercut",
      "age" : 39,
      "secretIdentity" : "Jane Wilson",
      "powers" : [
        "Million tonne punch",
        "Damage resistance",
        "Superhuman reflexes"
      ]
    },
    {
      "name" : "Eternal Flame",
      "age" : 1000000,
      "secretIdentity" : "Unknown",
      "powers" : [
        "Immortality",
        "Heat Immunity",
        "Inferno",
        "Teleportation",
        "Interdimensional travel"
      ]
    }
  ]
}

superHeroes["members"][1]["powers"][2]

```

#### JSON数组

数组对象也是一种合法的 JSON 对象

```
[
  {
    "name" : "Molecule Man",
    "age" : 29,
    "secretIdentity" : "Dan Jukes",
    "powers" : [
      "Radiation resistance",
      "Turning tiny",
      "Radiation blast"
    ]
  },
  {
    "name" : "Madame Uppercut",
    "age" : 39,
    "secretIdentity" : "Jane Wilson",
    "powers" : [
      "Million tonne punch",
      "Damage resistance",
      "Superhuman reflexes"
    ]
  }
]
上面是完全合法的 JSON。您只需要通过数组索引就可以访问数组元素，如 [0]["powers"][0]。
```

#### [其他注意事项](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Objects/JSON#其他注意事项)

- JSON 是一种**纯数据格式**，它**只包含属性**，**没有方法**。
- JSON 要求在字符串和属性名称周围**使用双引号**。**单引号无效**。
- 甚至一个错位的逗号或分号就可以导致 JSON 文件出错。您应该小心的检查您想使用的数据 (虽然计算机生成的 JSON 很少出错，只要生成程序正常工作)。您可以通过像 [JSONLint](http://jsonlint.com/) 的应用程序来检验 JSON。
- JSON 可以将任何标准合法的 JSON 数据格式化保存，不只是数组和对象。比如，一个单一的字符串或者数字可以是合法的 JSON 对象。虽然不是特别有用处……
- 与 JavaScript 代码中对象属性可以不加引号不同，**JSON 中只有带引号的字符串可以用作属性**。

#### 对象和文本间的转换

- [`parse()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse): 以文本字符串形式接受 JSON 对象作为参数，并返回相应的对象。

```
var jsonStr = '{"name":"John","age":30,"city":"New York"}';
var obj = JSON.parse(jsonStr);
console.log(obj.name); // 输出 "John"
console.log(obj.age); // 输出 30
console.log(obj.city); // 输出 "New York"
```

- [`stringify()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify): 接收一个对象作为参数，返回一个对应的 JSON 字符串。

```
var obj = { name: "John", age: 30, city: "New York" };
var jsonStr = JSON.stringify(obj);
console.log(jsonStr); // 输出 '{"name":"John","age":30,"city":"New York"}'
```



### LocalStorage

localStorage 存储的数据都是以**字符串的形式存储**的。无论是存储字符串、数字、对象还是数组，它们在存储到 localStorage 时都会被自动转换为字符串。

当你使用 `localStorage.setItem(key, value)` 方法设置键值对时，`value` 会被自动转换为字符串。如果 `value` 是一个对象或数组，它会被转换为 JSON 字符串表示形式。

当你使用 `localStorage.getItem(key)` 方法获取键对应的值时，返回的值始终是一个字符串。如果键不存在，则返回 `null`。

为了存储和读取非字符串类型的数据（如对象和数组），通常会使用 `JSON.stringify()` 和 `JSON.parse()` 来在存储和检索数据时进行转换。

`JSON.stringify()` 将数据转换为 JSON 字符串，`JSON.parse()` 将 JSON 字符串解析为对应的 JavaScript 对象或数组。

**LocalStorage语法**

`localStorage`是JavaScript提供的一种在客户端浏览器中存储数据的机制。它可以用于在浏览器会话之间持久保存数据，即使用户关闭浏览器或重新启动电脑，数据也将保留。

`localStorage`使用简单，以下是其常见的语法和用法：

1. **设置数据：** 使用`localStorage.setItem(key, value)`方法来设置数据，其中`key`是要保存的数据的名称，`value`是要保存的数据的值。例如：

```javascript
localStorage.setItem('username', 'John');
```

2. **获取数据：** 使用`localStorage.getItem(key)`方法来获取存储在`localStorage`中的数据。传入要获取的数据的名称`key`，它将返回对应的值。例如：

```javascript
const username = localStorage.getItem('username');
console.log(username); // 输出：John
```

3. **移除数据：** 使用`localStorage.removeItem(key)`方法来从`localStorage`中移除指定的数据。传入要移除的数据的名称`key`即可。例如：

```javascript
localStorage.removeItem('username');
```

4. **清空数据：** 使用`localStorage.clear()`方法可以将`localStorage`中的所有数据清空。这将删除所有保存的数据，所以要谨慎使用。例如：

```javascript
localStorage.clear();
```

需要注意的是，存储在`localStorage`中的数据以键值对的形式存在，其中键和值都必须是字符串。如果要存储非字符串类型的数据（如对象或数组），可以使用`JSON.stringify()`将其转换为字符串进行存储，并在需要时使用`JSON.parse()`将其转换回原始类型。

```javascript
const user = {
  name: 'John',
  age: 30
};

// 存储对象
localStorage.setItem('user', JSON.stringify(user));

// 获取对象
const storedUser = JSON.parse(localStorage.getItem('user'));
console.log(storedUser.name); // 输出：John
console.log(storedUser.age); // 输出：30
```

请注意，`localStorage`只能存储有限的数据量（通常为几MB），具体取决于浏览器和用户的设置。因此，不应将大量数据存储在`localStorage`中，以免影响性能和用户体验。





## 三、异步JavaScript

### 异步和同步

在编程中，选择使用异步或同步操作取决于特定的需求和场景。

异步操作通常用于处理耗时的任务、网络请求、文件读写等操作。它们**不会阻塞程序的执行**，而是通过**回调函数**、**Promise**、**async/await** 等机制来处理结果或执行后续操作。异步操作可以提高程序的**并发性和响应性**，使得程序能够同时处理多个任务。

然而，在某些情况下，同步操作可能更加合适。同步操作会阻塞程序的执行，直到操作完成并返回结果。同步操作通常用于需要**确保顺序执行**、**依赖前一步操作结果的情况**，或者需要在操作完成之前暂停程序执行的场景。

选择异步还是同步操作取决于你的需求和程序的特点。在处理复杂的任务、并发操作、用户交互等场景下，异步操作通常更加合适。而在简单的、线性执行的任务中，同步操作可能更加简单和直观。重要的是理解两者的差异，并根据具体情况做出合适的选择。



当涉及到网络请求时，异步操作非常常见。例如，当你需要从服务器获取数据时，使用异步操作可以避免阻塞程序的执行。你可以发起一个异步的网络请求，继续执行其他任务，而无需等待服务器的响应。一旦服务器返回响应，你可以通过回调函数、Promise 或 async/await 来处理返回的数据。

示例：
```javascript
// 使用异步操作发送 GET 请求
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => {
    // 处理返回的数据
    console.log(data);
  })
  .catch(error => {
    // 处理错误
    console.error(error);
  });

// 继续执行其他任务，不需要等待服务器响应
console.log('继续执行其他任务...');
```

另一个例子是处理耗时的任务，如图像处理、文件读写等。使用异步操作可以在任务执行期间允许程序继续执行其他操作，提高程序的并发性和响应性。

示例：
```javascript
// 异步读取文件
fs.readFile('file.txt', 'utf-8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});

// 继续执行其他任务，不需要等待文件读取完成
console.log('继续执行其他任务...');
```

在某些情况下，同步操作更加合适。例如，当需要确保顺序执行或依赖前一步操作的结果时，同步操作可以提供简单的控制流程。

示例：
```javascript
// 同步读取文件
const data = fs.readFileSync('file.txt', 'utf-8');
console.log(data);

// 在文件读取完成之前，不会执行下面的代码
console.log('继续执行其他任务...');
```

需要注意的是，在使用同步操作时，如果操作耗时较长或阻塞了程序的执行，可能会导致程序在此期间无法响应其他任务或用户操作。因此，同步操作应谨慎使用，以避免阻塞程序的执行。



JavaScript中大部分是同步执行的 异步的有：

使用 **setTimeout，AJAX 请求、定时器、事件监听**等。这些方法都可以让程序在执行到某个异步操作时继续执行后面的代码，而不需要等待异步操作完成。

除了异步操作外，还有一些语句或操作可以改变程序的执行流程，例如条件语句（`if`、`switch`）、循环语句（`for`、`while`）、函数调用等。通过合理使用这些语句和操作，可以控制代码的执行顺序和跳过特定的语句。

需要注意的是，在 JavaScript 中，异步操作是一种常见的编程模式，可以提高程序的性能和用户体验。通过合理地使用异步操作，可以避免阻塞程序执行，提高程序的响应能力。

[异步javascript简介](https://www.freecodecamp.org/chinese/news/asynchronous-javascript-explained/)



### 使用Promise

**Promise** 是现代 JavaScript 中异步编程的基础，是一个由异步函数返回的可以向我们指示当前操作所处的状态的对象。在 Promise 返回给调用者的时候，操作往往还没有完成，但 Promise 对象可以让我们操作最终完成时对其进行处理（无论成功还是失败）。





### Ajax

当我们浏览网页时，经常会看到一些无需刷新整个页面就能获取数据或更新页面内容的情况。这就是通过 Ajax 实现的。Ajax（Asynchronous JavaScript and XML）是一种用于在网页中进行异步通信的技术。

在传统的网页中，要获取新的数据或更新页面内容，通常需要刷新整个页面。但是，使用 Ajax 技术，我们可以在后台向服务器发送请求，获取数据并将其插入到当前页面的特定部分，而不需要刷新整个页面。这使得网页更加流畅、快速，并提供了更好的用户体验。

Ajax 的重要性体现在以下几个方面：

1. **实时性：** Ajax 允许网页与服务器之间进行异步通信，使得数据的获取和更新可以在后台进行，而不需要刷新整个页面。这使得网页能够以实时或接近实时的方式展示数据的变化，例如实时聊天、动态加载内容等。

2. **交互性：** Ajax 技术可以通过与服务器进行交互，实现更多的用户交互功能。例如，在一个表单中输入数据后，可以使用 Ajax 将数据发送到服务器进行验证，然后根据服务器的响应动态地更新页面，而无需刷新整个页面。

3. **性能优化：** 通过使用 Ajax，可以减少对服务器的请求次数，仅获取需要更新的数据，而不是整个页面的内容。这减轻了服务器的负担，并减少了网络带宽的消耗，从而提高了网页的性能和加载速度。

4. **无缝集成：** Ajax 可以与其他前端技术（如JavaScript、HTML、CSS）无缝集成，使得开发者可以更加灵活地处理网页的各种操作和交互。它可以与现有的网页技术和框架结合使用，为开发者提供更多的选择和自由度。

总而言之，Ajax 技术通过在后台进行异步通信，使网页能够以实时、动态和交互性强的方式与服务器进行数据交换，从而提升了用户体验、性能和功能的灵活性。





## 四、Node.js

### node运行程序

```
C:\Workspace>node D:\desktop\try\guidance\node,js\01-hello.js

运行文件
```

### node交互环境和直接运行的区别

在命令行模式运行`.js`文件和在Node交互式环境下直接运行JavaScript代码有所不同。Node交互式环境会把每一行JavaScript代码的结果自动打印出来，但是，直接运行JavaScript文件却不会。直接运行JavaScript文件，想要输出结果，必须自己用`console.log()`打印出来

直接输入`node`进入交互模式，相当于启动了Node解释器，但是等待你一行一行地输入源代码，每输入一行就执行一行。

直接运行`node hello.js`文件相当于启动了Node解释器，然后一次性把`hello.js`文件的源代码给执行了，你是没有机会以交互的方式输入源代码的。

### 使用严格模式

如果在JavaScript文件开头写上`'use strict';`，那么Node在执行该JavaScript时将使用严格模式。但是，在服务器环境下，如果有很多JavaScript文件，每个文件都写上`'use strict';`很麻烦。我们可以给Nodejs传递一个参数，让Node直接为所有js文件开启严格模式：

```
node --use_strict ×××.js
```

后续代码，如无特殊说明，我们都会直接给Node传递`--use_strict`参数来开启严格模式。

### 模块

要在模块中对外输出变量，用：

```
module.exports = variable;
```

输出的变量可以是任意对象、函数、数组等等。

要引入其他模块输出的对象，用：

```
var foo = require('other_module');
```

引入的对象具体是什么，取决于引入模块输出的对象。



JavaScript是一种函数式编程语言，它支持闭包。如果我们把一段JavaScript代码用一个函数包装起来，这段代码的所有“全局”变量就变成了函数内部的局部变量。



**导出多个函数** **变量**

```
///file1
const function1 = () => {
  // 函数1的逻辑
};

const function2 = () => {
  // 函数2的逻辑
};

const variable1 = "变量1";
const variable2 = "变量2";

module.exports = {
  function1,
  function2,
  variable1,
  variable2
};

///file2
const exportedFunctions = require('./file1');

exportedFunctions.function1(); // 调用导出的函数1
exportedFunctions.function2(); // 调用导出的函数2

console.log(exportedFunctions.variable1); // 访问导出的变量1
console.log(exportedFunctions.variable2); // 访问导出的变量2

```

### 基本模块

#### fs

Node.js内置的`fs`模块就是文件系统模块，负责读写文件。

**异步读文件**

```
'use strict';

var fs = require('fs');

fs.readFile('sample.txt', 'utf-8', function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});


异步读取时，传入的回调函数接收两个参数，当正常读取时，err参数为null，data参数为读取到的String。当读取发生错误时，err参数代表一个错误对象，data为undefined。这也是Node.js标准的回调函数：第一个参数代表错误信息，第二个参数代表结果。后面我们还会经常编写这种回调函数。

由于err是否为null就是判断是否出错的标志，所以通常的判断逻辑总是：
if (err) {
    // 出错了
} else {
    // 正常
}
```

```
如果我们要读取的文件不是文本文件，而是二进制文件.下面的例子演示了如何读取一个图片文件
'use strict';

var fs = require('fs');

fs.readFile('sample.png', function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
        console.log(data.length + ' bytes');
    }
});

当读取二进制文件时，不传入文件编码时，回调函数的data参数将返回一个Buffer对象。在Node.js中，Buffer对象就是一个包含零个或任意个字节的数组（注意和Array不同）。

Buffer对象可以和String作转换，例如，把一个Buffer对象转换成String
// Buffer -> String
var text = data.toString('utf-8');
console.log(text);

或者把一个String转换成Buffer：

// String -> Buffer
var buf = Buffer.from(text, 'utf-8');
console.log(buf);
```

**同步读文件**

```
除了标准的异步读取模式外，fs也提供相应的同步读取函数。同步读取的函数和异步函数相比，多了一个Sync后缀，并且不接收回调函数，函数直接返回结果。

用fs模块同步读取一个文本文件的代码如下：

'use strict';

var fs = require('fs');

var data = fs.readFileSync('sample.txt', 'utf-8');
console.log(data);

如果同步读取文件发生错误，则需要用try...catch捕获该错误：

try {
    var data = fs.readFileSync('sample.txt', 'utf-8');
    console.log(data);
} catch (err) {
    // 出错了
}
```

**写文件**

```
将数据写入文件是通过fs.writeFile()实现的：

'use strict';

var fs = require('fs');

var data = 'Hello, Node.js';
fs.writeFile('output.txt', data, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('ok.');
    }
});


和readFile()类似，writeFile()也有一个同步方法，叫writeFileSync()：

'use strict';

var fs = require('fs');

var data = 'Hello, Node.js';
fs.writeFileSync('output.txt', data);
```

**stat**

```
如果我们要获取文件大小，创建时间等信息，可以使用fs.stat()，它返回一个Stat对象，能告诉我们文件或目录的详细信息：

'use strict';

var fs = require('fs');

fs.stat('sample.txt', function (err, stat) {
    if (err) {
        console.log(err);
    } else {
        // 是否是文件:
        console.log('isFile: ' + stat.isFile());
        // 是否是目录:
        console.log('isDirectory: ' + stat.isDirectory());
        if (stat.isFile()) {
            // 文件大小:
            console.log('size: ' + stat.size);
            // 创建时间, Date对象:
            console.log('birth time: ' + stat.birthtime);
            // 修改时间, Date对象:
            console.log('modified time: ' + stat.mtime);
        }
    }
```



#### stream



#### http

#### crypto









## 五、一些其他的points

#### 一些 DOM 对象方法

这里提供一些您将在本教程中学到的常用方法：

| 方法                     | 描述                                                         |
| :----------------------- | :----------------------------------------------------------- |
| getElementById()         | 返回带有指定 ID 的元素。                                     |
| getElementsByTagName()   | 返回包含带有指定标签名称的所有元素的节点列表（集合/节点数组）。 |
| getElementsByClassName() | 返回包含带有指定类名的所有元素的节点列表。                   |
| appendChild()            | 把新的子节点添加到指定节点。                                 |
| removeChild()            | 删除子节点。                                                 |
| replaceChild()           | 替换子节点。                                                 |
| insertBefore()           | 在指定的子节点前面插入新的子节点。                           |
| createAttribute()        | 创建属性节点。                                               |
| createElement()          | 创建元素节点。                                               |
| createTextNode()         | 创建文本节点。                                               |
| getAttribute()           | 返回指定的属性值。                                           |
| setAttribute()           | 把指定属性设置或修改为指定的值。                             |





#### classList

`classList` 是 JavaScript 中用于操作元素的类列表的属性，它提供了一组方法来添加、移除、切换和检查类名。

`classList` 属性是一个只读属性，返回一个 `DOMTokenList` 对象。`DOMTokenList` 是一个类数组对象，它包含了元素的类名作为字符串。

以下是一些常用的 `classList` 方法：

- `add(className)`：向元素的类列表中添加一个或多个类名。
- `remove(className)`：从元素的类列表中移除一个或多个类名。
- `toggle(className)`：如果类名存在，则从元素的类列表中移除它；如果类名不存在，则向元素的类列表中添加它。
- `contains(className)`：检查元素的类列表中是否包含指定的类名，返回布尔值。

以下是一个示例，演示如何使用 `classList` 操作元素的类列表：

```
<div id="myElement" class="box">Hello</div>
var element = document.getElementById("myElement");

// 添加类名
element.classList.add("highlight");

// 移除类名
element.classList.remove("box");

// 切换类名
element.classList.toggle("active");

// 检查是否包含类名
var hasClass = element.classList.contains("highlight");
console.log(hasClass); // 输出: true
```

在上述示例中，我们首先通过 `document.getElementById` 方法获取具有 id "myElement" 的 `<div>` 元素，并将其存储在变量 `element` 中。

然后，我们使用 `classList` 的方法来添加、移除、切换和检查类名。在示例中，我们添加了 "highlight" 类名，移除了 "box" 类名，切换了 "active" 类名，并检查了是否包含 "highlight" 类名。

通过使用 `classList`，你可以方便地操作元素的类列表，添加或移除类名，实现样式的动态变化和交互效果。



#### stopPropagation()

当在一个事件处理器中调用时，可以防止事件向任何其他元素传递。

```
在这个示例中，我们的页面包含一个视频，最初它为隐藏状态；还有一个标记为“显示视频”的按钮。我们希望有如下交互：

当用户单击“显示视频”按钮时，显示包含视频的盒子，但不要开始播放视频。
当用户在视频上单击时，开始播放视频。
当用户单击盒子内视频以外的任何区域时，隐藏盒子。

const btn = document.querySelector("button");
const box = document.querySelector("div");
const video = document.querySelector("video");

btn.addEventListener("click", () => box.classList.remove("hidden"));

video.addEventListener("click", (event) => {
  event.stopPropagation();
  video.play();
});

box.addEventListener("click", () => box.classList.add("hidden"));
```



#### this

在 JavaScript 中，`this` 关键字用于引用当前执行代码的上下文。它的值取决于函数的调用方式。

在事件处理程序中，`this` 指向触发事件的元素，也就是**绑定了事件监听器的元素**。因此，在 `handleDelete` 函数中，`this` 就是指向 `destroyButton` 元素。

所以，当你在 `destroyButton` 的点击事件处理程序中使用 `this`，它就代表了当前点击的 `destroyButton` 元素本身。

值得注意的是，如果你在箭头函数中使用 `this`，它将捕获外层的上下文，而不是绑定到触发事件的元素。因此，在使用箭头函数时，可能需要使用其他方式来访问触发事件的元素。



`this` 和 `event.target` 都与事件处理相关，但它们表示不同的东西。

- `this` 是当前执行代码的上下文，指向绑定了事件监听器的元素。在事件处理程序中，`this` 引用触发事件的元素。
- `event.target` 是事件对象中的属性，表示触发事件的目标元素。它是事件冒泡过程中的当前目标，即接收事件的元素。

区别在于，`this` 是绑定事件监听器的元素，而 `event.target` 是触发事件的元素。

举个例子来说明：

```
function handleClick(event) {
  console.log(this); // 输出绑定事件监听器的元素
  console.log(event.target); // 输出触发事件的元素
}

var button = document.querySelector('button');
button.addEventListener('click', handleClick);
```

在上面的代码中，当按钮被点击时，`handleClick` 函数被调用。在函数中，`this` 指向按钮元素，而 `event.target` 指向触发点击事件的元素，可能是按钮自身或其内部的子元素。

总结来说，`this` 引用绑定事件监听器的元素，而 `event.target` 引用触发事件的元素。



#### 关于继承

##### call方法

`call` 方法是 JavaScript 中函数对象的一个方法，它允许你在指定的作用域中调用一个函数，并且可以指定函数执行时的上下文对象（即 `this` 值）和参数列表。

`call` 方法的语法如下：

```
function.call(thisArg, arg1, arg2, ...)
```

其中：

- `function` 是要调用的函数对象。
- `thisArg` 是函数执行时的上下文对象，即在函数内部可以通过 `this` 关键字访问的对象。
- `arg1`, `arg2`, ... 是传递给函数的参数列表。

当调用 `call` 方法时，它会立即执行函数，并将指定的上下文对象绑定到函数内部的 `this`。这样，函数内部可以通过 `this` 访问该上下文对象的属性和方法。

- ### [Using call() to invoke a function and specifying the this value](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call#using_call_to_invoke_a_function_and_specifying_the_this_value)

```
function greet() {
  console.log(this.animal, "typically sleep between", this.sleepDuration);
}

const obj = {
  animal: "cats",
  sleepDuration: "12 and 16 hours",
};

greet.call(obj); // cats typically sleep between 12 and 16 hours

```

- ### [Using call() to invoke a function without specifying the first argument](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call#using_call_to_invoke_a_function_without_specifying_the_first_argument)

```
globalThis.globProp = "Wisen";

function display() {
  console.log(`globProp value is ${this.globProp}`);
}

display.call(); // Logs "globProp value is Wisen"
```



##### Object.create()

`Object.create()` 是 JavaScript 中用于创建一个新对象，并将新对象的原型设置为指定的原型对象的方法。它的语法如下：

```javascript
Object.create(proto, [propertiesObject])
```

其中，`proto` 是新对象的原型对象，它可以是任何对象或 `null`。`propertiesObject` 是一个可选参数，用于定义新对象的可枚举属性。

`Object.create()` 的作用是创建一个新对象，该对象的原型链将继承自指定的原型对象。新对象将拥有原型对象的属性和方法，并且可以在新对象上添加或覆盖属性。

下面是一些示例用法：

```javascript
// 创建一个原型为 null 的新对象
var obj1 = Object.create(null);

// 创建一个原型为 Object.prototype 的新对象
var obj2 = Object.create(Object.prototype);

// 创建一个原型为自定义对象的新对象
var parent = {
  greeting: "Hello"
};

var child = Object.create(parent);
console.log(child.greeting); // 输出: Hello

// 在创建对象时指定属性
var person = Object.create(Object.prototype, {
  name: {
    value: "John",
    writable: true,
    enumerable: true,
    configurable: true
  },
  age: {
    value: 30,
    writable: false,
    enumerable: true,
    configurable: false
  }
});
```

通过使用 `Object.create()`，你可以基于现有对象创建新对象，并将新对象与现有对象建立原型链继承关系。这种继承方式非常灵活，允许你创建具有特定属性和方法的对象，并在原型链上共享通用的属性和方法。

总之括号里的是原型，新创建的可以继承原型的属性和方法



```
function Shape(x, y, velX, velY, exists) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    this.exists = exists;
}
function Ball(x, y, velX, velY, exists, color, size) {
    Shape.call(this,x, y, velX, velY, exists);
    this.color = color;
    this.size = size;
}

Ball.prototype = Object.create(Shape.prototype);
Ball.prototype.constructor = Ball;



`Shape.call(this, x, y, velX, velY, exists)` 是为了在 `Ball` 构造函数中调用父构造函数 `Shape`，并将当前实例作为上下文（`this`）传递给父构造函数。这样做的目的是为了在创建 `Ball` 实例时，将父构造函数 `Shape` 中的属性初始化到 `Ball` 实例中。

然而，这只是初始化实例的属性，并没有涉及到原型对象的继承。通过 `Shape.call(this, x, y, velX, velY, exists)`，我们只是将属性赋值给当前实例，并没有实现原型链上的继承关系。

所以，需要使用 `Object.create(Shape.prototype)` 来设置子构造器 `Ball` 的原型对象，以确保 `Ball` 实例可以继承父构造器 `Shape` 原型对象中的方法和属性。
同时，为了确保子构造器的原型对象的 constructor 属性指向正确的构造函数，需要执行 Ball.prototype.constructor = Ball 这句代码，将 constructor 属性重置为子构造器 Ball。

这样做的目的是为了保持对象的完整性和一致性。在继承关系中，通过正确设置原型和构造函数，可以确保对象在实例化和调用方法时具有正确的行为和标识。

综上所述，这两步是必要的，一步是为了属性的初始化，另一步是为了实现原型链上的继承。
```



#### 伪类 伪元素

伪类（Pseudo-classes）是用于选择元素的特定状态或状态变化的关键词。它们以`:`开头，如`:hover`、`:active`、`:focus`等。伪类选择器应用于元素的特定状态。

伪元素（Pseudo-elements）则是在文档树中创建的虚拟元素，用于在选定元素的内容前、后或内部插入特定样式。伪元素以`::`开头，如`::before`、`::after`等。伪元素可以在元素的内容前后插入内容，并且可以通过 CSS 设置其样式。

总结一下：

- `:`用于伪类，用于选中元素的特定状态。
- `::`用于伪元素，用于在选定元素的内容前、后或内部插入生成的内容。

需要注意的是，根据不同的 CSS 规范版本和浏览器支持，某些伪元素可能也可以使用单个冒号（`:`）作为前缀。因此，在实际使用中，请查阅相关规范并检查浏览器兼容性。

#### forEach

`forEach`是数组的一个方法，用于遍历数组中的每个元素并执行指定的操作。以下是使用`forEach`的示例：

```javascript
var fruits = ['apple', 'banana', 'orange'];

fruits.forEach(function(fruit) {
    console.log(fruit);
});
```

上述代码会输出：
```
apple
banana
orange
```

在`forEach`方法中，我们传递了一个回调函数作为参数，该回调函数将在每个数组元素上被调用。回调函数接受当前迭代的元素作为参数（在示例中是`fruit`），我们可以在回调函数中对元素进行处理。

如果需要使用箭头函数：
```javascript
fruits.forEach(fruit => {
    console.log(fruit);
});
```

注意：`forEach`方法只能用于数组，不能用于类似对象等其他数据结构。





#### querySelector和getElementsBy...

`querySelector` 和 `getElementsBy` 系列方法都用于在文档中查找元素，但它们返回的结果有一些区别。

1. **返回类型**：
   - `querySelector` **返回匹配的第一个元素**，如果没有匹配的元素，则返回 `null`。
   - `getElementsBy` 系列方法**返回一个类数组对象**，称为 HTMLCollection 或 NodeList（具体取决于方法），其中包含匹配的所有元素。

2. **查找范围**：
   - `querySelector` 在整个文档中查找匹配的元素。
   - `getElementsBy` 系列方法在指定的元素集合（如 `document`、特定元素或特定节点列表）中查找匹配的元素。

3. **使用灵活性**：
   - `querySelector` 支持更灵活的选择器语法，可以使用类似 CSS 选择器的语法来选择元素。例如，`.class`、`#id`、`element` 等。
   - `getElementsBy` 系列方法接受的参数是一个简单的标记名称（例如 `'div'`）或类名（例如 `'className'`），不支持复杂的选择器语法。

4. **实时性**：
   - `querySelector` 返回的是一个静态的结果。即使文档发生更改，它也不会自动更新匹配的元素。
   - `getElementsBy` 系列方法返回的是一个动态的结果。如果文档发生更改，它会自动更新匹配的元素。

综上所述，`querySelector` 提供了更强大和灵活的选择器功能，并且更适合于单个元素的选择。而 `getElementsBy` 系列方法适合于在指定的元素集合中查找匹配的元素。



## 六、遇到的问题

#### 事件委托棒棒哒

比如在自己编写的todoList代码中

为每个 <li> 元素添加双击事件监听器------这种方法是不行的

```
var todoListItems = document.querySelectorAll('.todo-list li');
todoListItems.forEach(function(item) {
  item.addEventListener('dblclick', startEditing);
});
```

将双击事件监听器绑定在父元素上--------正确做法

```
var todoList = document.querySelector('.todo-list');
todoList.addEventListener('dblclick', startEditing);
```

原因如下：
在实现双击编辑功能时，使用事件委托（event delegation）的方式将双击事件监听器绑定在父元素上有以下几个好处：

- 动态添加的元素也能够受到事件监听器的影响：当你通过 JavaScript 动态地添加新的 <li> 元素时，**这些新元素没有直接绑定事件监听器**。但是，如果你将监听器绑定在它们的父元素上，那么新添加的元素也会受到监听器的影响。这样可以避免在每次添加新元素时都要为它们单独设置事件监听器的麻烦。

- 提高性能和内存效率：将监听器绑定在父元素上可以减少事件监听器的数量。相对于为每个 <li> 元素都绑定监听器，只绑定一个监听器到父元素上可以提高性能和内存效率，特别是在大量元素存在的情况下。

- 方便处理事件委托：事件委托可以让你在父元素上捕获事件，然后根据事件的目标元素（即触发事件的元素）来执行相应的操作。在双击编辑功能的情况下，你可以通过检查事件的目标元素是否为 <label> 元素，来确定是否触发双击编辑功能。这样，你无需为每个 <li> 元素单独设置双击事件监听器，而是统一在父元素上处理。

综上所述，使用事件委托将事件监听器绑定在父元素上具有更好的灵活性、性能和内存效率，尤其适用于需要处理大量动态添加元素的情况。



#### 关于"提升"

##### 函数提升

在执行代码之前，JavaScript解释器会进行函数的解析，并将函数定义提升到作用域的顶部。

函数提升的机制使得函数在定义之前就可以进行调用，这在某些情况下非常方便。然而，尽管函数调用可以在定义之前，但是最佳实践是将函数的调用放在函数定义的后面，以提高代码的可读性和可维护性。

```
// 函数调用
sayHello(); // 输出：Hello!

// 函数定义
function sayHello() {
  console.log('Hello!');
}
```

以上是可行的

##### 函数表达式提升 ×

函数表达式不会被提升。例如：

```
sayHello(); // 抛出错误：sayHello is not a function

var sayHello = function() {
  console.log('Hello!');
};
```

在这个例子中，由于变量 `sayHello` 的声明和赋值是通过函数表达式完成的，而非函数声明，所以它不会被提升。因此，在调用函数之前，变量 `sayHello` 还未被赋值，导致抛出错误。

##### 变量提升

关于变量提升，JavaScript 会将变量声明提升到作用域的顶部，但不会提升赋值操作。例如：

```
console.log(x); // 输出：undefined

var x = 5;
```

在这个例子中，变量 `x` 被提升，但它的值在声明之前是 `undefined`。因此，当我们尝试在赋值之前输出它时，会得到 `undefined`。

**总结**：函数声明会被提升，函数表达式和变量赋值操作不会被提升。为了避免潜在的错误和代码可读性问题，建议在使用之前先进行函数声明和变量赋值操作。如果可能，将函数的调用放在函数定义之后，以提高代码的清晰性和可维护性。

```
以下是错误经历：
var evilcircle = new EvilCircle (
      ``````
    );
evilcircle.setControls();

--------

EvilCircle.prototype.setControls = function () {
    ``````
}
正确的应该先定义后调用，否则setControls的方法没有赋给EvilCircle的原型
```

