# Vue3-TinyMCE

Vue3-TinyMCE 是一个基于 `vue3.x` + `tinymce@5.10.x` 的TinyMCE富文本编辑器模块。



## 较官方模块区别

相较于官方模块 [tinymce-vue](https://github.com/tinymce/tinymce-vue) 和[tinymce](https://github.com/tinymce/tinymce)，Vue3-TinyMCE的使用则非常方便，无需大量配置，真正的开箱即用。



## 使用方法

1、在项目上安装Vue3-TinyMCE：

```bash
# NPM 安装
npm i @zssaer/vue3-tinymce
# Yarn 安装
yarn add @zssaer/vue3-tinymce
```

2、将`node_modules/@zssaer/vue3-tinymce`下langs文件夹、plugins文件夹、skins文件夹拷贝至项目`public文件夹`下。（这一步，属实是无奈之举，TinyMCE官方的主题接口均处于在Init时的Src导入，纯纯ES导入依然会加载默认地址造成404。后续等待解决）

3、在项目的入口文件`main.js`上使用`Vue3-TinyMCE`:

```typescript
import { createApp } from "vue";
import App from "./App.vue";
...
import TinyMceEditor from '@zssaer/vue3-tinymce'
...
const app = createApp(App);
app.use(TinyMceEditor);
```

4、在项目中Vue模板中使用：

```html
<TinyMceEditor v-model="content" language="zh_CN"/>
```

其中`v-model`接受一个响应式变量，用作文本的双向绑定。

language默认为英文，使用`zh_CN`表示加载中文语言包。



## 高级

`TinyMceEditor`模块拥有如下可配置属性（使用V-Bind进行操作）：

| 属性名            | 属性说明                                                     | 属性类型       |
| ----------------- | :----------------------------------------------------------- | -------------- |
| **disabled**      | 关闭操作                                                     | Boolean        |
| **plugins**       | 加载插件。按需求加载插件。详细使用请浏览https://www.tiny.cloud/docs/configure/integration-and-setup/#plugins | String / Array |
| **toolbar**       | 工具栏。使用空格分隔，使用`|`进行分组。详细使用请浏览https://www.tiny.cloud/docs/configure/editor-appearance/#toolbar | String / Array |
| **toolbarMode**   | 工具栏显示模式。默认wrap不收缩工具栏，floating 为悬浮显示，sliding为下滑显示，scrolling则为横线滑动显示 | String         |
| **height**        | 文本栏默认高度                                               | String         |
| **placeholder**   | 文本为空时的默认显示文字                                     | String         |
| **statusbar**     | 右下方字数统计栏                                             | Boolean        |
| **fontTypeList**  | 文字字体库配置，每一个字体都使用分号分割。详细使用请浏览https://www.tiny.cloud/docs/configure/editor-appearance/#font_formats | String         |
| **LineHightList** | 行高库配置，详细使用请浏览https://www.tiny.cloud/docs/configure/editor-appearance/#lineheight_formats | String         |
| **contentStyle**  | 内容风格样式配置，详细使用请浏览https://www.tiny.cloud/docs/configure/content-appearance/#content_style | String         |
| **language**      | 编辑器语言，默认为英文，配置后将会自动加载对应项目`public\langs`下对应语言文件。 | String         |



## 补充

全语言下载：https://download.tiny.cloud/tinymce/community/languagepacks/5/langs.zip?_ga=2.161687420.1183867042.1652668676-1903525033.1652668676

