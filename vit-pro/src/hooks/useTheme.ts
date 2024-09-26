// ref 创建响应式的数据
// watchEffect 用于监视响应式数据的变化并执行副作用
import { ref, watchEffect } from "vue"
import { getActiveThemeName, setActiveThemeName } from "../utils/cache/local-storage"

const DEFAULT_THEME_NAME = "normal"
// 取DefaultThemeName类型和DEFAULT_THEME_NAME一样 将来赋值给DefaultThemeName的值的类型必须是和DEFAULT_THEME_NAME一样
type DefaultThemeName = typeof DEFAULT_THEME_NAME


/** 注册的主题名称, 其中 DefaultThemeName 是必填的 */
//通过使用 | 符号，ThemeName 可以是 DefaultThemeName 类型中的任何一个值，也可以是 "dark" 或 "dark-blue"
export type ThemeName = DefaultThemeName | "dark" | "dark-blue"

interface ThemeList {
    title: string
    name: ThemeName
}

/** 主题列表 */
const themeList: ThemeList[] = [
    {
        title: "默认",
        name: DEFAULT_THEME_NAME
    },
    {
        title: "黑暗",
        name: "dark"
    },
    {
        title: "深蓝",
        name: "dark-blue"
    }
]

/** 正在应用的主题名称 */
// ref 是 Vue 3 中用于创建响应式数据的函数。
// <ThemeName> 是 TypeScript 的泛型，指示 activeThemeName 的类型为 ThemeName，确保它只能包含 ThemeName 中定义的值
const activeThemeName = ref<ThemeName>(getActiveThemeName() || DEFAULT_THEME_NAME)

/** 设置主题 */
// 声明一个箭头函数接入value参数类型是ThemeName改变activeThemeName
const setTheme = (value: ThemeName) => {
    activeThemeName.value = value
}

/** 在 html 根元素上挂载 class */
// 动态调整样式
const setHtmlRootClassName = (value: ThemeName) => {
    document.documentElement.className = value
}

/** 初始化 */
// 副作用是指在函数执行过程中产生的影响或变化，通常是对外部状态或环境的修改。
// watchEffect 是 Vue.js 中的一个响应式 API，用于自动追踪依赖，并在依赖变化时重新执行传入的函数。
const initTheme = () => {
    // watchEffect 来收集副作用
    watchEffect(() => {
        const value = activeThemeName.value
        setHtmlRootClassName(value)
        setActiveThemeName(value)
    })
}

/** 主题 hook */
// 变量也要抛出
export function useTheme() {
    return { themeList, activeThemeName, initTheme, setTheme }
}
