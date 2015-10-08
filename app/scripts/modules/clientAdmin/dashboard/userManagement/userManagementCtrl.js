define(['app'], function (app) {
  'use strict';

  app.controller('UserManagementCtrl',['$scope', '$location', 'ADMIN', 'UTILS',
	function ($scope,$location,ADMIN,UTILS) {

		$scope.usersList = [];

		$scope.goToUrl = function(url){
			$location.path(url);
		};

		var init = function(){

			$scope.usersList =  UTILS.getFromLocalStorage("usersList");
			// ADMIN.getUsers()
			// .success(function(data,status,headers,config){
			// 	if(data){
			// 		$scope.usersList = data;
			// 	}
			// })
			// .error(function(data,status,headers,config){
			// 	console.log('Error Occrrued');
			// });
		};
		init();
		
	}]);
});
