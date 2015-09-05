define(['app'], function (app) {
  'use strict';

  app.controller('ProfileBuilderBuilderCtrl',['$scope',
	function ($scope) {

		$scope.droppedObjects = [];
	$scope.draggableObjects = [
	{
		"name": "email",
		"placeholder" : "Email",
		"displayName" : "Email"

	},
	{
		"name": "username",
		"placeholder" : "Username",
		"displayName" : "Username"

	},
	{
		"name": "password",
		"placeholder" : "Password",
		"displayName" : "Password"

	},
	{
		"name": "repeat password",
		"placeholder" : "Repeat Password",
		"displayName" : "Repeat Password"

	},
	{
		"name": "firstname",
		"placeholder" : "Firstname",
		"displayName" : "Firstname"

	},
	{
		"name": "middlename",
		"placeholder" : "Middlename",
		"displayName" : "Middlename"

	},
	{
		"name": "lastname",
		"placeholder" : "Lastname",
		"displayName" : "Lastname"

	},
	{
		"name": "age",
		"placeholder" : "Age",
		"displayName" : "Age"

	},
	{
		"name": "clientname",
		"placeholder" : "Clientname",
		"displayName" : "Clientname"

	},
	{
		"name": "phonenumber",
		"placeholder" : "Phone Number",
		"displayName" : "Phone Number"

	},
	{
		"name": "other",
		"placeholder" : "Other",
		"displayName" : "Other"

	}
	];

	$scope.popItems = [{
      name: "Number of Characters"
    }, {
      name: "Format"
    }, {
      name: "Required"
    }, {
      name: "Other"
    }, {
      name: "Other"
    }];

	$scope.centerAnchor = true;
    $scope.toggleCenterAnchor = function () {$scope.centerAnchor = !$scope.centerAnchor}

	$scope.onDropComplete1=function(data,evt){
		if(data){
        var index = $scope.droppedObjects.indexOf(data);
        if (index == -1)
        $scope.droppedObjects.push(data);}	
    };

    $scope.onDragSuccess1=function(data,evt){
        // console.log("133","$scope","onDragSuccess1", "", evt);
        // var index = $scope.droppedObjects1.indexOf(data);
        // if (index > -1) {
        //     $scope.droppedObjects1.splice(index, 1);
        // }
    };

	}]);
});
