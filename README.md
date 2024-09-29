#### https://github.com/Tom22316/to_ademin git地址

1--关于export
2--关于type import
3--关于export interface 
4--关于export直接抛出对象
5--关于自定义全局文件编译
6--关于ref,reactive
7--关于箭头函数
8--关于回调函数
9--关于高阶函数
10--关于请求
11--关于Cookies
12--关于js-cookie库
13--关于http请求
14--关于命名空间导入
15--关于vue.js的键盘监听事件
16--关于pinia


1. 关于export
export 用于命名导出，允许多个导出。导入时需要使用相同的名称 import { xxx, xxx } from 'xxx/xxx/xxx';

export default 用于默认导出，适合导出单个值。导入时可以自定义名称 import xxx from 'xxx/xxx/xx';

export type 专门用于导出类型。导入时也需要使用相同的名称 import { xxx, xxx } from 'xxx/xxx/xxx';

2.关于type import
ts在引入的时候加上type import { type xxx } from "xxx/xxx/xxx" 作用就是优化性能没有改变用法

3.关于export interface 
export interface   interface 定义了一个对象的类型，可以指定对象中包含的属性和这些属性的类型

4.关于export直接抛出对象
export type LoginCodeResponseData = ApiResponseData<string>; type的作用就是起一个别名,这个别名就代表ApiResponseData<string>

5.关于自定义全局文件编译
在src的同级目录下建types文件夹里面建api.d.ts在tsconfig.json里面定义编译这个文件文件,可以不export,types文件中可以定义接口的数据格式和类型
include 在tsconfig.json中的作用tsconfig.app.json文件中 可以加入指定自定义文件编译 例如："include":["types/**/*.d.ts"]
types/: 这是一个文件夹名称，表示你要查找的根目录。通常用于存放类型定义文件。
**/: 这个符号表示匹配任意层级的子目录。也就是说，它会递归地查找所有子文件夹。
*.d.ts: *.d.ts 是一个通配符模式，表示匹配所有以 .d.ts 结尾的文件。这些文件是 TypeScript 的声明文件，通常用于定义模块的类型信息

6.关于ref,reactive
ref是响应式数据
reactive是响应式对象

7.关于箭头函数，几种写法
箭头函数更简洁，自动捕获this
function Counter() {
    this.count = 0;
    setInterval(() => {
        this.count++; // `this` 指向 Counter
    }, 1000);
}

8.关于回调函数
回调函数是指作为参数传递给另一个函数的函数。它通常在特定事件发生或某个操作完成后被调用。回调函数广泛用于异步编程和事件处理。
如果一个函数作为参数传递给另外一个函数这时这个被传递的函数就是回调函数
例如：
// 定义一个回调函数
function myCallback() {
    console.log("This is a callback function");
}

// 定义一个接受函数作为参数的函数
function executeCallback(callback) {
    console.log("Before calling the callback.");
    callback(); // 调用传入的回调函数
    console.log("After calling the callback.");
}

// 将回调函数传递给另一个函数
executeCallback(myCallback);
//validate会对loginFormRef.value做校验，校验完成之后传入valid: boolean, fields给回调函数，回调函数去处理验证表单逻辑
loginFormRef.value?.validate((valid: boolean, fields) => {
  // 回调函数的内容
});

9.关于高阶函数
会返回一个函数这个返回的函数可以是一个泛型函数，<T> 表示类型参数，可以在调用时指定返回值的类型。

10.关于请求
创建Axios实例： 作用就是为了规范请求配置
请求拦截器：在请求被发送之前进行处理。这可以用来添加授权Token、修改请求头、记录请求信息等。通过拦截器，你可以确保所有请求都符合预定的规范
响应拦截器：处理服务器返回的数据。它可以解析响应，处理错误代码，显示用户友好的消息，或执行特定的逻辑（如登出）。这使得你可以集中处理所有响应，而不必在每个请求中重复逻辑。

Axios的两个常用类型
AxiosInstance：定义了一个 Axios 实例的类型，包含所有可用的方法和属性。这使得你在使用 Axios 实例时可以享受到 TypeScript 的类型检查。
AxiosRequestConfig：定义了用于配置 HTTP 请求的对象结构，包括请求的 URL、方法、头部、参数等。这确保你传递给 Axios 的配置是有效的，并符合预期的格式。

get 和 merge 是 lodash-es 库中常用的两个函数，
get 用于安全地访问对象的嵌套属性。它接受一个对象和一个路径，返回路径对应的值。如果路径不存在，返回 undefined 或者你指定的默认值。
merge 用于深度合并两个或多个对象。它会递归地合并源对象的属性到目标对象中，如果有相同的属性，则以源对象的属性为准。

11.关于Cookies

12.关于js-cookie库
是一个轻量级的 JavaScript 库，用于方便地处理浏览器中的 cookies。它提供了一些简单的 API 来创建、读取和删除 cookies，使得 cookie 的操作变得更加简洁易用。

13.关于http请求

14.关于命名空间导入
命名空间导入: * as Login 表示将模块中所有导出的类型作为一个命名空间 Login 导入。这种方式允许你使用 Login 作为前缀来引用从 ./types/login 模块导入的所有类型。

15.关于vue.js的键盘监听事件
keyup.enter--按下回车触发函数

16.关于pinia
import { defineStore } from "pinia" 是 Pinia 状态管理库中的一个函数，用于定义一个新的 store