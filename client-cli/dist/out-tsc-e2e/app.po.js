"use strict";
var protractor_1 = require('protractor');
var ClientCliPage = (function () {
    function ClientCliPage() {
    }
    ClientCliPage.prototype.navigateTo = function () {
        return protractor_1.browser.get('/');
    };
    ClientCliPage.prototype.getParagraphText = function () {
        return protractor_1.element(protractor_1.by.css('app-root h1')).getText();
    };
    return ClientCliPage;
}());
exports.ClientCliPage = ClientCliPage;
//# sourceMappingURL=app.po.js.map