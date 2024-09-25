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

9.关于高阶函数