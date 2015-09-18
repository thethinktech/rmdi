define(['app'], function (app) {
  'use strict';

  app.controller('AddUserCtrl',['$scope','USER',
	function ($scope,USER) {

		$scope.manadatoryFieldsList = [];
		$scope.additionalFieldsList = [];


		var init = function(){
			USER.getManadatoryFields()
			.success(function(data,status,headers,config){
				if(data){
					$scope.manadatoryFieldsList = data;
				}
			})
			.error(function(data,status,headers,config){
				console.log('Error Occrrued');
			});

			USER.getAdditionalFields()
			.success(function(data,status,headers,config){
				if(data){
					$scope.additionalFieldsList = data;
				}
			})
			.error(function(data,status,headers,config){
				console.log('Error Occrrued');
			});

		};
		init();

	}]);
});
