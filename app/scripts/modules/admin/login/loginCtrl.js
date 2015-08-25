define(['app'], function (app) {
  'use strict';

  app.controller('LoginCtrl',['$scope','$location','UTILS',
	function ($scope,$location,UTILS) {

		$scope.loginRequest = {};

		$scope.login = function(value){
			if(value){
				$location.path('dashboard');
			}
		};

	}]);
});
