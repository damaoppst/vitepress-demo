# vitepress-demo

## 部署

修改Dockerfile文件

## 安装

```shell
npm install
```

## 使用

```shell
npm run dev
```

## 项目介绍
### seo标题
`.vitepress\config.js`文件中，配置`title`

### LOGO标题

`.vitepress\config.js`文件中，配置`themeConfig.logoTitle`
### 导航栏

`.vitepress\config.js`文件中，配置`themeConfig.nav`


### Banner

`.vitepress\config.js`文件中，配置`themeConfig.banner`
### 新增分类


posts目录下，新增文件夹，文件夹名称一般为分类名称

### 新增文档


- posts目录下，添加md文档


- md文档顶部，添加标题，时间，以及标签
```md
---
title: demo
date: 2018-09-14 13:57:02
tags:
  - demo
---
```


## 新增布局Blog举例


### 新增布局组件
`.vitepress\theme\components\`目录下，新建一个`Blog.vue`文件，写法可以参考`.vitepress\theme\components\Default.vue`
### 使用布局组件

#### 注册组件

`.vitepress\theme\index.js`中注册组件

```
...
app.component('Search', Search)
...
```
#### pages目录下，添加一个blog.md

```md
---
page: true
title: blog笔记
description: blog笔记
sidebar: false
---
<Blog/>

```
#### 导航添加
`.vitepress\config.js` 文件中，配置`themeConfig.nav`
```
{ text: 'blog', link: '/pages/blog',icon:'🌞' }
```



