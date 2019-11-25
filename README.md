### 博客管理后台

1. typescript 的 alias 要先配置`baseUrl`:
   ```
   "baseUrl": ".",
   "paths": {
     "@/*": [
       "src/*"
     ]
   }
   ```
2. inject 的组件，可以先`as unknow`，再`as PropType`导出
3. commitlint
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
4. git commit --no-verify -m "--no-verify 跳过检验规则"

5. 目前菜单最多嵌套一层，为了能适配面包屑导航，使用 Query 代替 Params
