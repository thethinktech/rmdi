define(['app'], function (app) {
  'use strict';

  app.controller('LoginCtrl',['$scope','$location','UTILS','$rootScope',
	function ($scope,$location,UTILS,$rootScope) {

		$scope.loginRequest = {};
		$rootScope.theme = {};

		$scope.login = function(value){
			if(value){
				$rootScope.theme.themeColor =  UTILS.getFromLocalStorage("themeColor");
				if(!$rootScope.theme.themeColor){
					$rootScope.theme.themeColor = '#FFFFFF';
				}

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
