#### https://github.com/Tom22316/to_ademin git地址
1.
export 用于命名导出，允许多个导出。导入时需要使用相同的名称 import { xxx, xxx } from 'xxx/xxx/xxx';

export default 用于默认导出，适合导出单个值。导入时可以自定义名称 import xxx from 'xxx/xxx/xx';

export type 专门用于导出类型。导入时也需要使用相同的名称 import { xxx, xxx } from 'xxx/xxx/xxx';

2.ts在引入的时候加上type import { type xxx } from "xxx/xxx/xxx" 作用就是优化性能没有改变用法