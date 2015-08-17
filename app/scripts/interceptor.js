define(['angular', 'app'], function(angular, app) {
 'use strict';

  return ['$provide','$httpProvider', function($provide, $httpProvider) {

      $httpProvider.interceptors.push(['$q','$location','$rootScope','$injector',function($q,$location,$rootScope,$injector) {
        return {
         'request': function(config) {
              return config || $q.when(config);
          },

          'responseError': function(rejection) {
            return $q.reject(rejection);
          }
        };
      }]);
  }];
});