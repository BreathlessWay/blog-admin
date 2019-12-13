### 博客管理后台

> 技术选择

1. 框架选择: [React](https://zh-hans.reactjs.org/)
2. 开发语言: [TypeScript](https://www.tslang.cn/)
3. 路由: [React-Router](https://reacttraining.com/react-router/web/guides/quick-start)
4. 状态管理: [Mobx](https://cn.mobx.js.org/)
5. UI 组件库: [Ant Design](https://ant.design/index-cn)
6. 网络请求库: [axios](https://github.com/axios/axios)
7. 富文本编辑器: [braft-editor](https://braft.margox.cn/)
8. 参数格式转换库: [qs](https://github.com/ljharb/qs)
9. 颜色选择器: [react-color](http://casesandberg.github.io/react-color/)
10. CSS 扩展语言: [Sass](https://www.sass.hk/)
11. 时间处理库: [Moment.js](http://momentjs.cn/)
12. JavaScript 实用工具库: [Lodash](https://www.lodashjs.com/)
13. markdown 编辑器: [for-editor](https://md.kkfor.com/) ~~想自己试试写一个, TODO~~

> 代码规范

1. 代码格式化: [prettier](https://prettier.io/), [pretty-quick](https://github.com/azz/pretty-quick#readme)
2. git commit 规范化: [commitlint](https://commitlint.js.org/#/)
3. git 提交钩子辅助工具: [husky](https://github.com/typicode/husky#readme)

> 语法支持

1. 装饰器需要在`tsconfig`中开启`experimentalDecorators: true`, 编译配置
2. 要使用自判断属性链 [Optional_chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining), 需要添加`@babel/plugin-proposal-nullish-coalescing-operator`和`@babel/plugin-proposal-optional-chaining`两个 babel 插件
3. 图片懒加载使用的[IntersectionObserver](https://developer.mozilla.org/zh-CN/docs/Web/API/IntersectionObserver)

> 构建

1. 不生成 source-map: `"build": "GENERATE_SOURCEMAP=false node scripts/build.js",`
2. 为了减小打包文件体积，将公共模块抽离为外链 CDN, 使用 webpack 的 e 提供全局变量
   ```
   externals: {
       "react": "React",
       "react-dom": "ReactDOM",
       'react-dom/server': 'ReactDOMServer',
       'qs': 'Qs',
       'react-router-dom': 'ReactRouterDOM',
   },
   ```
3. 没有@types 的插件例如`axios mobx mobx-react`, 暂时无法抽离 CDN, 会报无法找到模块错误

> 其他

1. typescript 的 alias 要先配置`baseUrl`:
   ```
   "baseUrl": ".",
   "paths": {
     "@/*": [
       "src/*"
     ]
   }
   ```
2. inject 的组件在 typescript 中会报 props 缺失，可以先`as unknow`，再`as PropType`导出: `export default Comp as unknow as ComponentClass`
3. commitlint 相关规范
   ```
     build：主要目的是修改项目构建系统(例如 glup，webpack，rollup 的配置等)的提交
     ci：主要目的是修改项目继续集成流程(例如 Travis，Jenkins，GitLab CI，Circle等)的提交
     chore：不属于以上类型的其他类型
     docs：文档更新
     feat：新增功能
     fix：bug 修复
     perf：性能, 体验优化
     refactor：重构代码(既没有新增功能，也没有修复 bug)
     style：不影响程序逻辑的代码修改(修改空白字符，格式缩进，补全缺失的分号等，没有改变代码逻辑)
     test：新增测试用例或是更新现有测试
     revert：回滚某个更早之前的提交
   ```
4. 如果要跳过 git 的提交钩子可以使用 `git commit --no-verify -m "--no-verify 跳过检验规则"`
5. 目前菜单最多嵌套一层，为了能适配面包屑导航，使用 Query 代替 Params
6. 多个 HOC 可以使用[compose](https://github.com/reduxjs/redux/blob/master/src/compose.ts)组合
7. babel 可以通过`env`根据环境引入不同配置:
   ```
   {
   "env": {
   	"production": {
   		"plugins": [["transform-remove-console", { "exclude": ["error"] }]]
   	}
   }
   }
   ```
8. `brew install tree` 安装`tree`命令可以生成目录结构
   ```
   -a 显示所有文件和目录。
   -A 使用ASNI绘图字符显示树状图而非以ASCII字符组合。
   -C 在文件和目录清单加上色彩，便于区分各种类型。
   -d 显示目录名称而非内容。
   -D 列出文件或目录的更改时间。
   -f 在每个文件或目录之前，显示完整的相对路径名称。
   -F 在执行文件，目录，Socket，符号连接，管道名称名称，各自加上"*","/","=","@","|"号。
   -g 列出文件或目录的所属群组名称，没有对应的名称时，则显示群组识别码。
   -i 不以阶梯状列出文件或目录名称。
   -I 不显示符合范本样式的文件或目录名称。
   -l 如遇到性质为符号连接的目录，直接列出该连接所指向的原始目录。
   -n 不在文件和目录清单加上色彩。
   -N 直接列出文件和目录名称，包括控制字符。
   -p 列出权限标示。
   -P 只显示符合范本样式的文件或目录名称。
   -q 用"?"号取代控制字符，列出文件和目录名称。
   -s 列出文件或目录大小。
   -t 用文件和目录的更改时间排序。
   -u 列出文件或目录的拥有者名称，没有对应的名称时，则显示用户识别码。
   -x 将范围局限在现行的文件系统中，若指定目录下的某些子目录，其存放于另一个文件系统上，则将该子目录予以排除在寻找范围外。
   ```
9. 在 p 标签上使用多行省略号还是可以看的超出的文字问题，需要使用一个 block 标签将 p 标签包裹，并且不能设置 p 标签的高度/padding，只能用内容撑高

10. IntersectionObserver 所观察的子元素需要有初始高度，否则默认都在可观察区内，会都加载

11. [actions-gh-pages](https://github.com/peaceiris/actions-gh-pages), 结合 github action 发布 gh-page

12. 如果赋值 this 为一个变量，该赋值要在最上层，且该函数内的 this 都要用变量代替，否则编译出的代码 this 指向会变成 undefined
