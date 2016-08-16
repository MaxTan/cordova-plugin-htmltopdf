
### cordova-plugin-htmltopdf





---

### 使用方法:

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
            </html>`
    cordova.plugins.htmltopdf.create(html, `${cordova.file.applicationStorageDirectory}test.pdf`, function () {
        console.log('success');
    }, console.error);

```

---


>参考资料

* [XmlWorker css支持表](http://demo.itextsupport.com/xmlworker/itextdoc/CSS-conformance-list.html)
* [itext5文档](http://developers.itextpdf.com/examples/xml-worker-itext5) 
* [itext github](https://github.com/itext/itextpdf) 
* [jsoup github](https://github.com/jhy/jsoup/) 