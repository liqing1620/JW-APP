# 全局核心组件

````
全局注册组件

AppRegister.registerComponents = (vue) => {
    const requireComponent = require.context(
        // 其组件目录的相对路径
        '../components',
        // 是否查询其子目录
        false,
        // 匹配基础组件文件名的正则表达式 //Base
        /[A-Z]\w+\.(vue|js)$/
    )
    requireComponent.keys().forEach(fileName => {
        // 获取组件配置
        const componentConfig = requireComponent(fileName)

        // 获取组件的 PascalCase 命名
        const componentName = upperFirst(
            camelCase(
                // 获取和目录深度无关的文件名
                fileName
                    .split('/')
                    .pop()
                    .replace(/\.\w+$/, '')
            )
        )
        // 如果这个组件选项是通过 `export default` 导出的，
        // 那么就会优先使用 `.default`，
        // 否则回退到使用模块的根。
        let componentDef = componentConfig.default || componentConfig
        // 全局注册组件
        Vue.component(
            componentName,
            componentDef
        )
    })
}
````
## 核心组件创建注意事项
- 核心组件已在vue初始化全局注册无需单独import引入，可直接使用,例如:<name-type>;
- 多页面多模块项目，如有需要可在components目录下单独创建文件夹，需单独import引入;
- 核心组件的常见最好不要实现具体的业务逻辑,仅做数据传递和展示;
- 组件样式命名请遵循模块命名规则,如：tlc-menu-item
