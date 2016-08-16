var exec = require('cordova/exec');

exports.create = function (html, filePath, success, error) {
    exec(success, error, "HtmlToPdf", "create", [html, filePath])
};
