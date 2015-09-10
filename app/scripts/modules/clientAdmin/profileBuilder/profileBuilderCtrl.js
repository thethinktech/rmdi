define(['app'], function (app) {
  'use strict';

  app.controller('ProfileBuilderBuilderCtrl',['$scope',
	function ($scope) {

	$scope.droppedObjects = [];
	$scope.currentTab = 1;
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

	$scope.centerAnchor = true;
    $scope.toggleCenterAnchor = function () {$scope.centerAnchor = !$scope.centerAnchor}

	$scope.onDropComplete1=function(data,evt){
		if(data){
        var index = $scope.droppedObjects.indexOf(data);
        if (index == -1)
        $scope.droppedObjects.push(data);}	
    };

	}]);
});
