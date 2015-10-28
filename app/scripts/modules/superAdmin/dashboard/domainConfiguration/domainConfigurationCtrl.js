define(['app'], function (app) {
  'use strict';

  app.controller('DomainConfigurationCtrl',['$scope', '$location', 'ADMIN', 'UTILS',
    function ($scope,$location,ADMIN,UTILS) {

        $scope.usersList = [];

        $scope.goToUrl = function(url){
            $location.path(url);
        };

        var init = function(){
        };
        init();

    }]);
});
