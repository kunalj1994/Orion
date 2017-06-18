'use strict';
var app = angular.module('app', ['ui.bootstrap', 'ngAnimate']);
app.config(['$compileProvider', '$uibModalProvider',
    function ($compileProvider, $uibModalProvider) {
        $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|tel|file|blob|chrome-extension):/);
}]);
