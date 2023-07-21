# Web

## Fetch API

### 常用语法

Fetch API 的常用语法如下：

```javascript
fetch(url, options)
  .then(response => {
    // 处理响应
  })
  .catch(error => {
    // 处理错误
  });
```

在上述代码中：

- `url` 是请求的目标网址，可以是完整的 URL 或相对路径。
- `options` 是一个可选的配置对象，用于设置请求的参数，例如请求方法、请求头、请求体等。常用的配置选项包括 `method`、`headers`、`body` 等。
- `fetch(url, options)` 返回一个 Promise 对象，可以通过 `then()` 方法来处理成功的响应，或通过 `catch()` 方法来处理错误。
- 在成功的响应处理函数中，可以使用 `response` 对象来获取响应的内容和元数据。
- 在错误处理函数中，可以使用 `error` 对象来获取错误信息。

示例用法：

```javascript
fetch('http://example.com/api/data', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  }
})
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('请求失败');
    }
  })
  .then(data => {
    // 处理响应数据
  })
  .catch(error => {
    // 处理错误
  });
```

在上述示例中，我们使用 Fetch API 发起一个 GET 请求，指定了目标网址和请求头的配置。在成功的响应处理函数中，我们通过 `response.json()` 方法将响应的内容解析为 JSON 格式，并继续处理数据。如果请求失败，将抛出一个错误并进入错误处理函数。

这只是 Fetch API 的基本用法示例，你可以根据具体的需求进一步扩展和调整代码。

### **异步用法**

```
async function createGroup() {
  const groupName = groupNameInput.value;
  const groupDescription = groupDescriptionInput.value;

  try {
    const response = await fetch('your_api_url_here', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        groupName: groupName,
        description: groupDescription
      })
    });

    const data = await response.json();

    if (response.ok) {
      const groupID = data.data.groupID;
      groupCodeInput.value = groupID;
    } else {
      console.error(data.hint);
    }
  } catch (error) {
    console.error('Error creating group:', error);
  }
}

const generateGroupButton = document.querySelector('.search-button2 button');
generateGroupButton.addEventListener('click', createGroup);

```

- ``const data = await response.json();` 这行代码使用了`await`关键字来异步地获取`response`对象的 JSON 数据，并将其保存在变量`data`中。

在Fetch API中，`response.json()`方法是一个异步方法，它返回一个Promise对象，该Promise对象在成功时会解析为从服务器返回的JSON数据。使用`await`关键字可以等待Promise对象的解析，并将解析后的JSON数据赋值给变量`data`。

换句话说，`await response.json()`会等待服务器响应的JSON数据，并将数据存储在变量`data`中，以便进一步处理或使用。这样可以简化处理异步数据的过程，使代码更加清晰和易读。但要注意，使用`await`必须在`async`函数内部。

- 在这段代码中，没有使用`.then`是因为`async/await`与`Promise`的功能相同，但是使用`async/await`可以使代码更加简洁和易于理解。

	`async/await`是一种异步编程的方式，它建立在`Promise`之上，可以使异步代码的编写和阅读更像是同步代码。在`CreateGroup()`函数中，使用了`async`关键字声明该函数为异步函数，它意味着该函数内部可以使用`await`关键字来等待一个返回`Promise`的异步操作完成。

	在调用`fetch()`函数时，使用了`await`来等待`fetch()`返回的`Promise`对象完成。如果请求成功，`await`会等待`response.json()`这个异步操作完成，并将结果赋值给`data`变量。在这个过程中，使用`try...catch`块来处理可能出现的异常。

	使用`async/await`的主要好处是它可以让异步代码的逻辑更加清晰，避免了深层嵌套的回调函数（callback hell），同时可以在代码中使用`try...catch`来捕获和处理异步操作的错误。这样，代码的结构更加简洁易读。

	总的来说，`async/await`是一种更加现代化和简洁的异步编程方式，推荐在使用现代JavaScript的项目中使用。但是请注意，`async/await`并不是完全替代了`Promise`，它们可以一起使用，根据需求和项目的具体情况来选择。

	##### knowledge points

`async`, `try`, 和 `await` 是 JavaScript 中用于处理异步操作的新特性，也称为异步编程。它们让你更容易地编写和理解异步代码。

1. `async`:
   - `async` 是一个关键字，用于声明一个函数是异步函数。异步函数在执行时会返回一个 Promise 对象。-	
   - 异步函数可以包含 `await` 关键字，用于暂停函数的执行，等待一个 Promise 对象的解决（即状态变为 fulfilled）后再继续执行。

2. `await`:
   - `await` 关键字只能在异步函数内部使用。
   - 在使用 `await` 时，需要将其放在一个返回 Promise 的异步函数之前。它会暂停函数的执行，直到 Promise 对象的状态变为 `fulfilled`（解决）或 `rejected`（拒绝）。
   - 当 `await` 后面的 Promise 对象解决时，它会返回解决的值，并将该值赋给变量。如果 Promise 被拒绝，则会抛出一个错误，可以使用 `try...catch` 来处理。

3. `try...catch`:
   - `try...catch` 是 JavaScript 中的错误处理机制。
   - `try` 块中包含可能抛出错误的代码，如果在 `try` 块中出现错误，控制权会转移到 `catch` 块，而不会中断程序的执行。
   - `catch` 块用于捕获并处理错误。在 `catch` 块中，你可以执行适当的操作来处理错误，例如输出错误信息或执行备用代码。

在上面的示例中，`async` 和 `await` 被用于处理 `fetch` 请求，而 `try...catch` 用于捕获可能出现的错误，以便更好地处理返回数据或异常情况。

异步编程对于处理网络请求、读取文件、定时任务等需要等待的操作非常有用。它让代码更易读、维护，避免了传统的回调地狱（callback hell）。但同时也需要注意异步函数的执行顺序，确保按预期处理异步操作的结果。

#### json()

`json()` 是一个内置的 JavaScript 方法，用于将从服务器返回的 JSON 格式的数据（字符串）转换为 JavaScript 对象。

当使用 Fetch API 或类似的方式从服务器获取数据时，服务器通常返回 JSON 格式的数据。这些数据在 JavaScript 中表示为字符串。为了在 JavaScript 中使用这些数据，我们需要将它们转换成对象。

`json()` 方法就是用来完成这个任务的。它接收一个 JSON 字符串作为输入，并返回一个解析后的 JavaScript 对象。

例如，假设从服务器获取的响应数据如下：

```json
'{"name": "John", "age": 30, "city": "New York"}'
```

如果我们使用 `response.json()` 来处理这个响应数据，它会将上述 JSON 字符串解析为 JavaScript 对象：

```javascript
{
  name: "John",
  age: 30,
  city: "New York"
}
```

这样，我们就可以方便地在 JavaScript 代码中使用这些数据了。

#### 发现错误

`catch(error)` 和 `response.ok` 的作用是不同的：

1. `catch(error)`:
   - 这是用于捕捉异步操作中发生的错误的方式之一。
   - 当 `try` 块中的代码出现错误，JavaScript 执行流程会跳转到 `catch` 块，执行 `catch` 块内的代码，并将错误信息传递给 `error` 参数。
   - 这样可以让你在异步操作中捕获并处理可能发生的异常或错误，从而防止整个程序崩溃。

2. `response.ok`:
   - 这是用于检查 HTTP 请求是否成功的属性。
   - 当你使用 Fetch API 发送请求后，得到的 `response` 对象中有一个 `ok` 属性，它是一个布尔值。
   - 当 `ok` 为 `true` 时，表示请求成功，HTTP 状态码在 200 到 299 之间。
   - 当 `ok` 为 `false` 时，表示请求失败，HTTP 状态码不在 200 到 299 之间。

所以，`catch(error)` 主要用于捕捉代码执行过程中的错误，而 `response.ok` 主要用于判断 HTTP 请求是否成功。在上述代码中，`try...catch` 主要是用来捕捉 Fetch API 可能出现的错误，而 `response.ok` 是用来判断服务器返回的 HTTP 响应是否成功。



## JWT

### Structure

A JWT contains three parts:

- **Header**

	: Consists of two parts:

	- The signing algorithm that’s being used.
	- The type of token, which, in this case, is mostly “JWT”.

- **Payload**: The payload contains the claims or the JSON object.

- **Signature**: A string that is generated via a cryptographic algorithm that can be used to verify the integrity of the JSON payload.

[![JWT_Structure](https://supertokens.com/static/b0172cabbcd583dd4ed222bdb83fc51a/f058b/jwt-structure.png)](https://supertokens.com/static/b0172cabbcd583dd4ed222bdb83fc51a/9af93/jwt-structure.png)

### How do they work

The easiest way to explain how a JWT works is via an example. We will start by creating a JWT for a specific JSON payload and then go about verifying it:

##### 1) Create a JSON

Let’s take the following minimal JSON payload:



```json
{
    "userId": "abcd123",
    "expiry": 1646635611301
}
```

##### 2) Create a JWT signing key and decide the signing algorithm

First, we need a signing key and an algorithm to use. We can generate a signing key using any secure random source. For the purpose of this post, let’s use:

- Signing key: `NTNv7j0TuYARvmNMmWXo6fKvM4o6nv/aUi9ryX38ZH+L1bkrnD1ObOQ8JAUmHCBq7Iy7otZcyAagBLHVKvvYaIpmMuxmARQ97jUVG16Jkpkp1wXOPsrF9zwew6TpczyHkHgX5EuLg2MeBuiT/qJACs1J0apruOOJCg/gOtkjB4c=`
- Signing algorithm: `HMAC + SHA256`, also known as `HS256`.

##### 3) Creating the “Header”

This contains the information about which signing algorithm is used. Like the payload, this is also a JSON and will be appended to the start of the JWT (hence the name header):



```json
{
    "typ": "JWT",
    "alg": "HS256"
}
```

##### 4) Create a signature

- First, we remove all the spaces from the payload JSON and then base64 encode it to give us `eyJ1c2VySWQiOiJhYmNkMTIzIiwiZXhwaXJ5IjoxNjQ2NjM1NjExMzAxfQ`. You can try pasting this string in an [online base64 decoder](https://www.base64decode.org/) to retrieve our JSON.

- Similarly, we remove the spaces from the header JSON and base64 encode it to give us: `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9`.

- We concatenate both the base 64 strings, with a `.` in the middle like `<header>.<payload>`, giving us `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiJhYmNkMTIzIiwiZXhwaXJ5IjoxNjQ2NjM1NjExMzAxfQ`. There is no special reason to do it this way other than to set a convention that the industry can follow.

- Now we run the `Base64 + HMACSHA256` function on the above concatenated string and the secret to give us the signature:

	```text
	Base64URLSafe(
	    HMACSHA256("eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiJhYmNkMTIzIiwiZXhwaXJ5IjoxNjQ2NjM1NjExMzAxfQ", "NTNv7j0TuYARvmNMmWXo6fKvM4o6nv/aUi9ryX38ZH+L1bkrnD1ObOQ8JAUmHCBq7Iy7otZcyAagBLHVKvvYaIpmMuxmARQ97jUVG16Jkpkp1wXOPsrF9zwew6TpczyHkHgX5EuLg2MeBuiT/qJACs1J0apruOOJCg/gOtkjB4c=")
	)
	
	Results in:
	3Thp81rDFrKXr3WrY1MyMnNK8kKoZBX9lg-JwFznR-M
	```

	We base64 encode it only as an industry convention.

##### 5) Creating the JWT

Finally, we append the generated signature like `<header>.<body>.<signature>` to create our JWT:

```text
eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiJhYmNkMTIzIiwiZXhwaXJ5IjoxNjQ2NjM1NjExMzAxfQ.3Thp81rDFrKXr3WrY1MyMnNK8kKoZBX9lg-JwFznR-M
```

##### 6) Verifying the JWT

The auth server will send the JWT back to the client’s frontend. The frontend will attach the JWT to network requests to the client’s api layer. The api layer will do the following steps to verify the JWT:

- Fetches the header part of the JWT (`eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9`).
- Does base64 decoding on it to get the plain text JSON: `{"typ":"JWT","alg":"HS256"}`
- Verifies that the `typ` field’s value is `JWT` and the `alg` is `HS256`. If not, it would reject the JWT.
- Fetches signing secret key and runs the same `Base64URLSafe(HMACSHA256(...))` operation as step number (4) on the header and body of the incoming JWT. Note that if the incoming JWT’s body is different, this step will generate a different signature than in step (4).
- Checks that the generated signature is the same as the signature from the incoming JWT. If it’s not, then the JWT is rejected.
- We base64 decode the body of the JWT (`eyJ1c2VySWQiOiJhYmNkMTIzIiwiZXhwaXJ5IjoxNjQ2NjM1NjExMzAxfQ`) to give us `{"userId":"abcd123","expiry":1646635611301}`.
- We reject the JWT if the current time (in milliseconds) is greater than the JSON’s `expiry` time (since the JWT is expired).







## Web表单

### < input >

#### ::placeholder

默认情况下，占位符文本的外观是半透明或浅灰色。[`::placeholder`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/::placeholder) 伪元素是输入的 [`placeholder` 文本](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/input#placeholder)。可以使用有限的 CSS 属性子集为其赋予样式。

```
::placeholder {
  color: blue;
}
```

只有适用于 [`::first-line`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/::first-line) 伪元素的 CSS 属性子集可以在选择器中使用 `::placeholder` 的规则。

##### 占位符不具有无障碍性

[`placeholder`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/input#placeholder) 属性可以让你指定在 `<input>` 元素的内容区域本身为空时出现的文本。不应该依靠占位符去理解表单。它不是一个标签，也不应该被用来替代。占位符是用来提示输入的值应该是什么样子，而不是解释。

不仅屏幕阅读器无法访问占位符，而且一旦用户在表单控件中输入任何文本，或者如果表单控件已经有一个值，占位符就会消失。具有自动页面翻译功能的浏览器在翻译时可能会跳过属性，这意味着 `placeholder` 可能不会被翻译。

**备注：** 尽可能不要使用 [`placeholder`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/input#placeholder) 属性。如果需要标记 `<input>` 元素，请使用 [``](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/label) 元素。

#### 标签

需要标签来将辅助性文本与 `<input>` 联系起来。[``](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/label) 元素提供了关于一个表单字段的适合的解释信息（除了任何布局方面的考虑）。使用 `<label>` 解释输入至 `<input>` 或 [``](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/textarea) 的内容总是好的。

##### 关联标签

`<input>` 和 `<label>` 元素的语义配对对于屏幕阅读器等辅助技术是很有用的。通过使用 `<label>` 的 [`for`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/label#for) 属性对它们进行配对，可以将标签与输入结合起来，让屏幕阅读器更精确地描述输入。

仅仅在 `<input>` 元素旁边有纯文本是不够的。相反，可用性和无障碍性要求包含隐式或显式 [``](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/label)：

```
<!-- 非无障碍的 -->
<p>输入你的名字：<input id="name" type="text" size="30" /></p>

<!-- 隐式标签 -->
<p>
  <label>输入你的名字：<input id="name" type="text" size="30" /></label>
</p>

<!-- 显式标签 -->
<p>
  <label for="name">输入你的名字：</label>
  <input id="name" type="text" size="30" />
</p>
```

第一个示例没有无障碍性：提示和 `<input>` 元素没有关系。

除了无障碍名称外，标签还提供了一个更大的“命中”区域，供鼠标和触摸屏用户点击或触摸。通过将 `<label>` 和 `<input>` 配对，点击任何一个元素将聚焦 `<input>` 元素。如果你使用纯文本来给你的输入元素作“标签”，将不会享受到以上特性。将激活区的提示部分用于输入，对有运动控制条件的人是有帮助的。

作为 web 开发者，我们永远不要假定使用者知道所有的事情。使用 web 的人的多样性——可能延伸到你的网站中——实际上保证了你的网站的一些访问者在思维过程和/或情况上会有一些变化，导致他们在没有明确和适当的标签的情况下对你的表单有非常不同的解释。



#### 自定义验证错误

如果你想在一个字段验证失败时显示一个自定义的错误信息，你需要使用[约束验证 API](https://developer.mozilla.org/zh-CN/docs/Learn/Forms/Form_validation#使用_javascript_校验表单)，在 `<input>`（及相关）元素上可用。以下面的表格为例：

HTMLPlayCopy to Clipboard

```
<form>
  <label for="name">输入用户名（允许使用大小写字母）：</label>
  <input type="text" name="name" id="name" required pattern="[A-Za-z]+" />
  <button>提交</button>
</form>
```

如果你试图提交的表单没有填写有效的内容，或者是一个不符合 `pattern` 的值，基本的 HTML 表单验证功能将使其产生一个默认的错误信息。

如果你想转而显示自定义的错误信息，你可以使用下面这样的 JavaScript 代码：

```
const nameInput = document.querySelector("input");
nameInput.addEventListener("input", () => {
  nameInput.setCustomValidity("");
  nameInput.checkValidity();
});
nameInput.addEventListener("invalid", () => {
  if (nameInput.value === "") {
    nameInput.setCustomValidity("输入一个用户名！");
  } else {
    nameInput.setCustomValidity(
      "用户名只能包含大写或小写字母，请再试一遍。"
    );
  }
});
```



#### 无障碍考虑

##### 标签

当包括输入元素时，在旁边添加标签是一项无障碍要求，这样那些使用辅助技术的人就可以知道输入的内容是什么。另外，点击或触摸一个标签会将焦点集中到该标签的相关表单控件上。这提高了视力用户的可及性和可用性，增加了用户可以点击或触摸以激活表单控件的区域。这对单选按钮和复选框特别有用（甚至非常必要），因为它们很小

以下示例是将 `<label>` 和一个 `<input>` 元素建立联系。你需要赋予 `<input>` 元素一个 `id` 属性。 `<label>` 需要一个 `for` 属性，其值与输入的 `id` 相同。

```
<label for="peas">你喜欢豌豆吗？</label>
<input type="checkbox" name="peas" id="peas">
```









## 一些问题

### 路径问题

#### path模块

如果你担心在不同平台上的路径分隔符问题，可以使用Node.js内置的`path`模块来处理路径，这样可以确保代码在不同操作系统上都能正确工作。

首先，确保你已经安装了Node.js，然后可以使用`path.join()`方法来拼接路径，它会根据当前操作系统的规则来正确处理路径分隔符。

在你的代码中，可以像这样使用`path.join()`来拼接URL：

```javascript
const path = require('path');

const baseURL = 'http://localhost:8080/api';
const currentGroupID = 123;

// 使用path.join()来拼接路径
const endpoint = path.join('/groups', currentGroupID.toString(), 'members');

const fullURL = baseURL + endpoint;
console.log(fullURL); // 输出：http://localhost:8080/api/groups/123/members
```

在这里，我们使用`path.join()`方法来拼接路径，它会根据当前操作系统的规则来添加正确的路径分隔符。这样可以确保在不同操作系统上都能正确地构建URL地址。

请注意，`path.join()`方法是Node.js的核心模块，在前端浏览器环境中无法直接使用。如果你的代码是在浏览器环境中运行的，那么使用模板字符串的方法仍然是可行的，并且在大多数情况下都能正常工作。只有当你的代码是在Node.js环境中运行，并且涉及到文件路径操作时，使用`path.join()`会更加可靠。

#### new URL()

在 JavaScript 中，可以使用 `new URL()` 构造函数来拼接文件路径，这样可以避免跨平台问题。`new URL()` 构造函数可以确保生成正确的 URL，不受操作系统或浏览器的影响。

例如，假设有一个基本路径 `baseURL` 和一个文件名 `fileName`，你可以使用以下代码拼接文件路径：

```javascript
function joinPaths(baseURL, fileName) {
  const url = new URL(fileName, baseURL);
  return url.href;
}

const baseURL = 'http://example.com/'; // 基本路径，可以是相对路径或绝对路径
const fileName = 'folder/file.txt';    // 文件名

const fullPath = joinPaths(baseURL, fileName);
console.log(fullPath); // 输出：http://example.com/folder/file.txt
```

在这个例子中，`joinPaths()` 函数将基本路径和文件名作为参数，使用 `new URL()` 构造函数来拼接文件路径，并返回完整的 URL。

使用 `new URL()` 构造函数可以确保生成的路径是规范的 URL，适用于不同的操作系统和浏览器。



### URL规则

#### 查询参数

这是关于URL中查询参数的规则。在URL中，查询参数是用于向服务器传递额外信息的一种方式。查询参数通常以 `?` 开始，并且由 `&` 符号分隔多个参数。每个查询参数由一个键和一个值组成，中间用等号 `=` 分隔。

例如，考虑以下URL：

```
http://example.com/page?name=John&age=30
```

在这个URL中，`?` 标识查询参数的开始，而 `&` 用于分隔不同的查询参数。URL中包含两个查询参数：`name=John` 和 `age=30`。其中，`name` 是键，`John` 是对应的值；`age` 是键，`30` 是对应的值。

在某些情况下，同一个参数可以有多个值。这种情况下，可以使用相同的键，但是不同的值来表示。例如：

```
http://example.com/page?color=red&color=blue&color=green
```

在这个URL中，有一个查询参数 `color`，但它有三个值：`red`、`blue` 和 `green`。

为了在URL中传递特殊字符或非ASCII字符，需要进行URL编码。URL编码使用百分号后跟两个十六进制数字来表示字符的编码。例如，空格在URL中是 `%20`，而中文字符“我”在URL中可能是 `%E6%88%91`（具体编码取决于字符集和编码方式）。

总结一下，URL查询参数的规则如下：

- 查询参数以 `?` 开始，多个查询参数之间用 `&` 分隔。
- 每个查询参数由键值对组成，使用 `=` 分隔键和值。
- 同一个参数可以有多个值，使用相同的键来表示。
- 特殊字符或非ASCII字符需要进行URL编码。