'use strict';

define([
    'appcommons',
    'routes',
    'interceptor',
    'mockModule'
], function(angularAMD, routes,interceptor) {
    // Declare app level module which depends on views, and components
    var app = angular.module('rmdi', [
        'ngRoute',
        'mockModule',
        'directives',
        'filters',
        'services',
        'ngSanitize',
        'angular-md5',
        'ngDraggable',
        'ui.bootstrap',
        'ngTagsInput',
        'color.picker'
    ]);

    app.config(routes);
    app.config(interceptor);
    
    app.run(['$rootScope','UTILS',function($rootScope,UTILS){
        $rootScope.theme = {};
        $rootScope.theme.themeColor =  UTILS.getFromLocalStorage("themeColor");
        if(!$rootScope.theme.themeColor){
            $rootScope.theme.themeColor = '#FFFFFF';
        }
    }]);

    return angularAMD.bootstrap(app);
});

