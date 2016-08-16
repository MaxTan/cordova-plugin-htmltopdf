var exec = require('cordova/exec');

exports.coolMethod = function (html, filePath, success, error) {
    exec(success, error, "HtmlToPdf", "create", [html, filePath])
};
