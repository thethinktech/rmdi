define(['app'], function (app) {
  'use strict';

  app.controller('AddUserCtrl',['$scope','USER','$location','UTILS',
	function ($scope,USER,$location,UTILS) {

		$scope.manadatoryFieldsList = [];
		$scope.additionalFieldsList = [];
		$scope.addUserObj = {};
		$scope.addUserObj.selectedRoles = [];

		$scope.roleList = [
                    { 
                    	"id" : 1,
                    	"name": "Admin",
                    	"description" : ""
                    },
                    { 
                    	"id" : 2,
                    	"name": "Super Admin",
                    	"description" : ""
                    },
                    { 
                    	"id" : 3,
                    	"name": "Data Analyst",
                    	"description" : ""
                    },
                    { 
                    	"id" : 4,
                    	"name": "Analyst",
                    	"description" : ""
                    }
                ];

        $scope.loadLabels = function(labels,$query) {
            return labels.filter(function(label) {
                return label.name.toLowerCase().indexOf($query.toLowerCase()) != -1;
            });
        };

		$scope.addUser = function(){
			$scope.addUserObj.name = angular.copy($scope.manadatoryFieldsList[0].dataValue);
			$scope.addUserObj.status = angular.copy($scope.manadatoryFieldsList[4].dataValue);
			$scope.addUserObj.startDate = angular.copy($scope.additionalFieldsList[5].dataValue);
			$scope.addUserObj.endDate = angular.copy($scope.additionalFieldsList[6].dataValue);
			$scope.addUserObj.manadatoryFieldsList = angular.copy($scope.manadatoryFieldsList);
			$scope.addUserObj.additionalFieldsList = angular.copy($scope.additionalFieldsList);
			var temp = [];
			if(UTILS.getFromLocalStorage("usersList")){
				temp = UTILS.getFromLocalStorage("usersList");
			}
			temp.push($scope.addUserObj);
			UTILS.setInLocalStorage("usersList",temp);
			$location.path('dashboard/usermanagement');
		};


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
