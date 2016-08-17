
### Cordova插件 cordova-plugin-htmltopdf


*优点：*
* 可以把vue.js、angular.js这些模板类html生成pdf, 支持运行js
* 支持中文，要自行添加字体文件，插件里面默认带一个宋体字体
* 生成的pdf是矢量级，不是单纯的截图

*缺点:*
* 解析时不支持导入外部文件
* 部分样式不支持 ([支持样式参考](http://demo.itextsupport.com/xmlworker/itextdoc/CSS-conformance-list.htm))
* 换个html解析引擎可能说解决以上问题
* 仅支持android


---

### 例子用法

```js

    let html = `<!DOCTYPE html>
            <html>
                <head>
                    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                    <title></title>
                    <link href="file://android_asset/www/css/test.css" rel="stylesheet" />
                    <script src="file://android_asset/www/lib/angular/angular.min.js"></script>
                    <script src="file://android_asset/www/lib/zepto/zepto.min.js"></script>
                </head>
            <body ng-app="printApp">
                <div ng-controller="formController">
                    <p>{{data}}</p>
                    <div id="aaa"></div>
                    <p>{{data}}</p>
                </div> 
                <script>
                    var app = angular.module('printApp', []);
                    app.controller('formController', function ($scope) {
                        $scope.data = 'test';
                    });
                </script>
            </body>
            </html>`;
    cordova.plugins.htmltopdf.create(html, `${cordova.file.applicationStorageDirectory}test.pdf`, function () {
        console.log('success');
    }, console.error);

```

---


>参考资料
> * [itext](https://github.com/itext/itextpdf) 
> * [jsoup](https://github.com/jhy/jsoup/)
> * [XmlWorker css支持表](http://demo.itextsupport.com/xmlworker/itextdoc/CSS-conformance-list.htm)
> * [itext5文档](http://developers.itextpdf.com/examples/xml-worker-itext5)  
> * [itext生成中文解决方案](http://my.oschina.net/mobinchao/blog/524112)
> * [获取网页数据](http://my.oschina.net/yuanxulong/blog/511039)
