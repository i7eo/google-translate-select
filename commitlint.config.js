module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // type 类型定义
    'type-enum': [2, 'always', [
      "feat", // 新功能 feature
      "chore", // 构建过程或辅助工具的变动
      "fix", // 修复 bug
      "docs", // 文档注释
      "refactor", // 重构(既不增加新功能，也不是修复bug)
      "test", // 增加测试
      "style", // 代码格式(不影响代码运行的变动)
      "perf", // 性能优化
      "revert", // 回退
      "ci", // 持续集成
      "build", // 打包
      "continue" // 继续开发某个功能
    ]],
    // subject 大小写不做校验
    // 自动部署的BUILD ROBOT的commit信息大写，以作区别
    'subject-case': [0]
  }
};