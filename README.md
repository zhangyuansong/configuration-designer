# Vue 3 + Vite

这个模板应该有助于您开始在 Vite 中使用 Vue 3 进行开发。模板使用 Vue 3`<script setup>`SFC，请查看[script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-脚本设置）以了解更多信息。

## 推荐的 IDE 设置

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

## 一. 基本概述

### 1. 软件名称： 组态设计器

### 2. 编程语言：JavaScript

### 3. 构建工具：Vite 3.x

### 4. 前端框架：Vue 3.x

### 5. 路由工具：Vue Router 4.x

### 6. 状态管理：Vuex 4.x

### 7. CSS 预编译：Sass

### 8. HTTP 工具： Axios

## 二. 项目工程环境搭建

参考文档 https://juejin.cn/post/6951649464637636622#heading-55
下面列举一下出现的问题

### 1. 使用 npm init @vitejs/app 快速初始化项目雏形

这里 @vitejs/create 应用程序已弃用，请改用 npm init vite
使用 npm init vite <项目名称>即可创建 vite 的项目

### 2. 挂载 UI 框架 Element Plus 中的导入 css 文件改写为如下命令

import 'element-plus/dist/index.css';

### 3. 项目集成了 ESLint 配置后，页面的引入都出现了 eslint 提示, 但是项目能正常运行

解决方案： 在 .eslintrc.js 文件中进行如下配置
extends: [
'plugin:vue/essential',
'plugin:import/recommended', // ***1.解决引入问题
'airbnb-base',
'plugin:prettier/recommended' // ***1.解决引入问题
],
settings: {
'import/resolver': {
alias: {
map: [['@', './src']],
extensions: ['.js', '.jsx'] // \*\*\*2.解决引入问题
}
}
}

## 三. 规范目录结构

├── publish/
└── src/
├── assets/ // 静态资源目录
├── common/ // 通用类库目录
├── components/ // 公共组件目录
├── router/ // 路由配置目录
├── store/ // 状态管理目录
├── style/ // 通用 CSS 目录
├── utils/ // 工具函数目录
├── views/ // 页面组件目录
├── App.vue
├── main.ts
├── shims-vue.d.ts
├── tests/ // 单元测试目录
├── index.html
├── tsconfig.json // TypeScript 配置文件
├── vite.config.ts // Vite 配置文件
└── package.json

## 四. 代码规范

### 1. 集成 EditorConfig 配置

EditorConfig 有助于为不同 IDE 编辑器上处理同一项目的多个开发人员维护一致的编码风格。

在项目根目录下增加 .editorconfig 文件

VSCode 使用 EditorConfig 需要去插件市场下载插件 EditorConfig for VS Code

### 2. 集成 Prettier 配置

Prettier 是一款强大的代码格式化工具，支持 JavaScript、TypeScript、CSS、SCSS、Less、JSX、Angular、Vue、GraphQL、JSON、Markdown 等语言，基本上前端能用到的文件格式它都可以搞定，是当下最流行的代码格式化工具。

在项目根目录下增加 .prettierrc 文件

Prettier 安装且配置好之后，就能使用命令来格式化代码： npx prettier --write . 格式化所有文件（. 表示所有文件）
不过更推荐在 vs code 中进行设置自动保存后 Prettier 自动格式化代码：https://blog.csdn.net/weixin_47481102/article/details/124384446

VSCode 编辑器使用 Prettier 配置需要下载插件 Prettier - Code formatter 。
Prettier 配置好以后，在使用 VSCode 或 WebStorm 等编辑器的格式化功能时，编辑器就会按照 Prettier 配置文件的规则来进行格式化，避免了因为大家编辑器配置不一样而导致格式化后的代码风格不统一的问题。

prettier 和 eslint 的差异：https://juejin.cn/post/7156893291726782500#heading-14

### 3. 集成 ESLint 配置

ESLint 是一款用于查找并报告代码中问题的工具，并且支持部分问题自动修复。

该项目 ESLint 选择的风格为 Airbnb
