define(['app'], function (app) {
  'use strict';

  app.controller('LoginCtrl',['$scope','UTILS',
	function ($scope,UTILS) {

		$scope.loginRequest = {};
		// UTILS.setInSession('test','value');
		// console.log(UTILS.getFromSession('test'));
		// console.log(UTILS.encryptCredential('12345'));

		$scope.login = function(value){
			if(value){
				alert("Login Successful");
			}
		};

	}]);
});
