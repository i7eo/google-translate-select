# dev 开发事项

## 重构事项

1. 使用 pnpm 创建项目
2. 使用 monorepo （后期把master 的 vue2项目也放进来）
3. core
4. tsup 打包，考虑图片处理
5. changeset发包
6. 使用 vue-demi 兼容 vue2 & vue3？
7. postinstall 调 gulp 生成 base64.json 然后转成scss变量

## 本地开发

1. git commit 改用 pnpm commit 
2. 新建命令请先花半小时学习 turborepo，在 turbo.json 配置命令后然后在 pkg script 中写入