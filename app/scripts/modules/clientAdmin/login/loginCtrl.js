define(['app'], function (app) {
  'use strict';

  app.controller('LoginCtrl',['$scope','$location','UTILS',
	function ($scope,$location,UTILS) {

		$scope.loginRequest = {};

		$scope.login = function(value){
			if(value){
				if($scope.loginRequest.username == 'admin@gmail.com' && $scope.loginRequest.password == 'admin')
				{
					$location.path('dashboard');
				}
				else if($scope.loginRequest.username == 'user@gmail.com' && $scope.loginRequest.password == 'user')
				{
					$location.path('user');
				}
				else if($scope.loginRequest.username == 'superadmin@gmail.com' && $scope.loginRequest.password == 'superadmin')
				{
					$location.path('sadashboard');
				}
				else
				{
					alert("Invalid Credentials");
				}
			}
		};

	}]);
});
