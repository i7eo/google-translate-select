# dev 开发事项

## 重构事项

1. ~~使用 pnpm 创建项目~~
2. ~~使用 monorepo 架构~~
3. ~~分包:constants~~
4. ~~分包:theme-chalk~~
5. ~~分包:utils~~
6. 分包:vue2（将之前的代码迁移进来？使用ts重写？）
7. ~~分包:vue3~~
8. 分包:react
9. ~~tsup 打包，非ui组件~~
10. ~~tsup 打包样式~~
11. ~~vite 打包ui~~
12. ~~changeset发包~~
13. vitest 测试


## 思考

1. 是否需要把数据抛出去，让后拿着数据用自己项目中的ui生成组件？（需要讨论）
2. 使用 popver 动态计算位置并生成下拉菜单？
3. 使用 vue-demi 兼容 vue2 & vue3？
4. 使用qiankun将playground整合为一个？

## 本地开发

1. git commit 改用 pnpm commit 
2. 新建命令请先花半小时学习 turborepo，在 turbo.json 配置命令后然后在 pkg script 中写入
3. 本地调试，例如 vue3: pnpm dev:vue3。详情请查看turborepo