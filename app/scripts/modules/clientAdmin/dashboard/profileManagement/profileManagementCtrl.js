define(['app'], function (app) {
  'use strict';

  app.controller('ProfileManagementCtrl',['$scope', '$location', 'ADMIN', 'UTILS',
	function ($scope,$location,ADMIN,UTILS) {

		$scope.profilesList = [];

		$scope.goToUrl = function(url){
			$location.path(url);
		};

		var init = function(){
			$scope.profilesList =  UTILS.getFromLocalStorage("profilesList");
		};
		init();
		
	}]);
});
