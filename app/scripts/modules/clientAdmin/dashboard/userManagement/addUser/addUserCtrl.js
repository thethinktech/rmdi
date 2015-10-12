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
                    	"text": 'Admin' 
                    },
                    { 
                    	"id" : 2,
                    	"text": 'Super Admin' 
                    },
                    { 
                    	"id" : 3,
                    	"text": 'Data Analyst' 
                    },
                    { 
                    	"id" : 4,
                    	"text": 'Analyst' 
                    }
                ];

        $scope.loadLabels = function(labels,$query) {
            return labels.filter(function(label) {
                return label.text.toLowerCase().indexOf($query.toLowerCase()) != -1;
            });
        };

		$scope.addUser = function(){
			console.log($scope.manadatoryFieldsList);
			// $scope.addUserObj.status = "Active";
			$scope.addUserObj.lastModified = new Date();
			$scope.addUserObj.name = angular.copy($scope.manadatoryFieldsList[2].dataValue);
			$scope.addUserObj.status = angular.copy($scope.manadatoryFieldsList[4].dataValue);
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
