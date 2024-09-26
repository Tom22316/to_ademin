/** 统一处理 localStorage */

import CacheKey from "../../constants/cache-key"
// import { type SidebarOpened, type SidebarClosed } from "../../constants/app-key"
import { type ThemeName } from "../../hooks/useTheme"
// import { type TagView } from "@/store/modules/tags-view"
// import { type LayoutSettings } from "@/config/layouts"

//#region 获取当前主题名称
// 从 localStorage 中获取当前活动的主题名。
// 返回存储的主题名（类型为 ThemeName）或 null，如果没有找到对应的值。
export const getActiveThemeName = () => {
    return localStorage.getItem(CacheKey.ACTIVE_THEME_NAME) as ThemeName | null
}
// 将指定的主题名存储到 localStorage 中。
// 接受一个参数 themeName（类型为 ThemeName），并将其存储。
export const setActiveThemeName = (themeName: ThemeName) => {
    localStorage.setItem(CacheKey.ACTIVE_THEME_NAME, themeName)
}
//#endregion