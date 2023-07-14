'use strict';

var s = 'Hello';
var t = 'bye';

function greet(name) {
    console.log(s + ',' + name + '!');
}

function bye(name) {
    console.log(t + ',' + name + '!');
}

module.exports = {greet,bye};
// 把函数greet作为模块的输出暴露出去，这样其他模块就可以使用greet函数了。
// 导出多个变量 函数 要封装起来

