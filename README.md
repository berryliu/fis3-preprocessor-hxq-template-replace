# fis3-preprocessor-hxq-template-replace
好学区编译 html 模板插值，fis3 组件

# 使用方式

在 `fis-config.js` 文件里配置

```
fis.match('*.html', {
    preprocessor: [
        fis.plugin('hxq-template-replace')
    ]
});
```
