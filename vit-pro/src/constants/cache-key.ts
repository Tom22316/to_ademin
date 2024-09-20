// 存储缓存数据
// 系统取名 v3-admin-vite
const SYSTEM_NAME = "v3-admin-vite"

// static: 表示 TOKEN 是一个静态属性，属于类 CacheKey 本身，而不是类的实例。这意味着你可以通过 CacheKey.TOKEN 直接访问，而不需要创建 CacheKey 的实例。
//readonly: 表示这个属性是只读的，一旦被赋值后就不能再被修改。这有助于保证键名的一致性和安全性
class CacheKey {
    
    //生成一个用于存储用户身份验证令牌的唯一键名
    static readonly TOKEN = `${SYSTEM_NAME}-token-key`
    //这个属性用于存储用户的布局配置，比如界面设置和排列方式。
    static readonly CONFIG_LAYOUT = `${SYSTEM_NAME}-config-layout-key`
    //该属性用于存储侧边栏的状态（例如打开或关闭）。这有助于在用户重新访问应用时保持其界面的连续性。
    static readonly SIDEBAR_STATUS = `${SYSTEM_NAME}-sidebar-status-key`
    //此属性用于存储当前使用的主题名称，方便用户在应用中选择和切换不同的主题。
    static readonly ACTIVE_THEME_NAME = `${SYSTEM_NAME}-active-theme-name-key`
    //这个属性用于记录用户访问过的视图或页面，有助于实现导航历史功能，提供更好的用户体验。
    static readonly VISITED_VIEWS = `${SYSTEM_NAME}-visited-views-key`
    //此属性用于存储缓存的视图或组件，以提高应用的性能，减少重新渲染的时间。
    static readonly CACHED_VIEWS = `${SYSTEM_NAME}-cached-views-key`
}

export default CacheKey