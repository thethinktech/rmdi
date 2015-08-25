define(['app'], function (app) {
  'use strict';

  app.controller('UserManagementCtrl',['$scope', 'ADMIN',
	function ($scope,ADMIN) {

		$scope.usersList = [];

		var init = function(){
			ADMIN.getUsers()
			.success(function(data,status,headers,config){
				if(data){
					$scope.usersList = data;
				}
			})
			.error(function(data,status,headers,config){
				console.log('Error Occrrued');
			});
		};
		init();
		
	}]);
});
