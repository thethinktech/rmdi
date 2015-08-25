'use strict';

define(['angular'], function (angular) {

	return function($httpBackend) {

		var usersList = [
			{
				"id" : "1",
				"name" : "Jack",
				"status" : "Active",
				"lastModifiedDate" : "04/25/2015",
				"role" : "Admin",
				"snapImgUrl" : ""
			},
			{
				"id" : "2",
				"name" : "Jhon",
				"status" : "Active",
				"lastModifiedDate" : "10/29/2008",
				"role" : "SuperAdmin",
				"snapImgUrl" : ""
			},
			{
				"id" : "3",
				"name" : "Tim",
				"status" : "Active",
				"lastModifiedDate" : "01/15/2015",
				"role" : "DataAnalyst",
				"snapImgUrl" : ""
			},
			{
				"id" : "4",
				"name" : "Andy",
				"status" : "Active",
				"lastModifiedDate" : "06/18/2010",
				"role" : "Admin",
				"snapImgUrl" : ""
			},
			{
				"id" : "5",
				"name" : "Steff",
				"status" : "Active",
				"lastModifiedDate" : "12/04/2009",
				"role" : "DataAnalyst",
				"snapImgUrl" : ""
			},
			{
				"id" : "6",
				"name" : "Sam",
				"status" : "Active",
				"lastModifiedDate" : "03/25/2014",
				"role" : "Admin",
				"snapImgUrl" : ""
			},
			{
				"id" : "7",
				"name" : "Snep",
				"status" : "Active",
				"lastModifiedDate" : "02/11/2012",
				"role" : "Admin",
				"snapImgUrl" : ""
			}
		];

		// returns the current list of all users
    	$httpBackend.whenGET('/admin/action/users/list').respond(usersList);

      	$httpBackend.whenGET(/scripts\//).passThrough();
    };
});
