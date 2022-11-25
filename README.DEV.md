# dev 开发事项

## 重构事项

1. ~~使用 pnpm 创建项目~~
2. 使用 monorepo （后期把master 的 vue2项目也放进来）
3. ~~core~~
4. ~~tsup 打包，考虑图片处理~~
5. ~~changeset发包~~
6. ~~使用 vue-demi 兼容 vue2 & vue3？~~
7. ~~postinstall 调 gulp 生成 base64.json 然后转成scss变量~~
8. ~~导出去一个 use hook 让用自定义ui？~~
9. 是否需要把数据抛出去，让后拿着数据用自己项目中的ui生成组件？（需要讨论）

## 本地开发

1. git commit 改用 pnpm commit 
2. 新建命令请先花半小时学习 turborepo，在 turbo.json 配置命令后然后在 pkg script 中写入
3. 本地调试，例如 vue3: pnpm dev:vue3。详情请查看turborepo