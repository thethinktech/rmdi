define(['app'], function (app) {
  'use strict';

  app.controller('UserManagementCtrl',['$scope',
	function ($scope) {

		$scope.usersList = [
			{
				"id" : "1",
				"name" : "Jack",
				"status" : "Active",
				"lastModified" : "25/04/2015",
				"role" : "",
				"snapImgUrl" : ""
			},
			{
				"id" : "2",
				"name" : "Jhon",
				"status" : "Active",
				"lastModified" : "29/10/2015",
				"role" : "",
				"snapImgUrl" : ""
			},
			{
				"id" : "3",
				"name" : "Tim",
				"status" : "Active",
				"lastModified" : "15/01/2015",
				"role" : "",
				"snapImgUrl" : ""
			},
			{
				"id" : "4",
				"name" : "Andy",
				"status" : "Active",
				"lastModified" : "25/06/2010",
				"role" : "",
				"snapImgUrl" : ""
			},
			{
				"id" : "5",
				"name" : "Steff",
				"status" : "Active",
				"lastModified" : "25/04/2015",
				"role" : "",
				"snapImgUrl" : ""
			},
			{
				"id" : "6",
				"name" : "Sam",
				"status" : "Active",
				"lastModified" : "25/03/2014",
				"role" : "",
				"snapImgUrl" : ""
			},
			{
				"id" : "7",
				"name" : "Snep",
				"status" : "Active",
				"lastModified" : "02/11/2012",
				"role" : "",
				"snapImgUrl" : ""
			}
		];
		
	}]);
});
