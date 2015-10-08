'use strict';

define(['angular'], function (angular) {

	return ['$httpBackend', function($httpBackend) {

		var usersList = [
			{
				"id" : 1,
				"name" : "Jack",
				"status" : "Active",
				"lastModifiedDate" : "04/25/2015",
				"role" : "Admin",
				"snapImgUrl" : ""
			},
			{
				"id" : 2,
				"name" : "Jhon",
				"status" : "Active",
				"lastModifiedDate" : "10/29/2008",
				"role" : "SuperAdmin",
				"snapImgUrl" : ""
			},
			{
				"id" : 3,
				"name" : "Tim",
				"status" : "Active",
				"lastModifiedDate" : "01/15/2015",
				"role" : "DataAnalyst",
				"snapImgUrl" : ""
			},
			{
				"id" : 4,
				"name" : "Andy",
				"status" : "Active",
				"lastModifiedDate" : "06/18/2010",
				"role" : "Admin",
				"snapImgUrl" : ""
			},
			{
				"id" : 5,
				"name" : "Steff",
				"status" : "Active",
				"lastModifiedDate" : "12/04/2009",
				"role" : "DataAnalyst",
				"snapImgUrl" : ""
			},
			{
				"id" : 6,
				"name" : "Sam",
				"status" : "Active",
				"lastModifiedDate" : "03/25/2014",
				"role" : "Admin",
				"snapImgUrl" : ""
			},
			{
				"id" : 7,
				"name" : "Snep",
				"status" : "Active",
				"lastModifiedDate" : "02/11/2012",
				"role" : "Admin",
				"snapImgUrl" : ""
			}
		];

		var manadatoryFieldsList = [
            {
                "id" : 1,
                "required" : true,
                "displayLabel" : "Username",
                "placeholder" : "Username",
                "type" : "TEXT",
                "defaultValue" : "",
                "validationExp" : "",
                "name" : "Username"
            },
            {
                "id" : 2,
                "required" : true,
                "displayLabel" : "Password",
                "placeholder" : "Password",
                "type" : "PASSWORD",
                "defaultValue" : "",
                "validationExp" : "",
                "name" : "Password"
            },
            {
                "id" : 3,
                "required" : true,
                "displayLabel" : "First Name",
                "placeholder" : "First Name",
                "type" : "TEXT",
                "defaultValue" : "",
                "validationExp" : "",
                "name" : "First Name"
            },
            {
                "id" : 4,
                "required" : true,
                "displayLabel" : "Last Name",
                "placeholder" : "Last Name",
                "type" : "TEXT",
                "defaultValue" : "",
                "validationExp" : "",
                "name" : "Last Name"
            },
            {
                "id" : 5,
                "required" : true,
                "displayLabel" : "Role",
                "placeholder" : "Role",
                "type" : "DROPDOWNLIST",
                "defaultValue" : "Select Role",
                "validationExp" : "",
                "name" : "Role",
                "customizationValues" : [
                {
                    "id" : 1,
                    "valueText" : "Admin"
                },
                {
                    "id" : 2,
                    "valueText" : "Super Admin"
                },
                {
                    "id" : 3,
                    "valueText" : "Data Analyst"
                },
                {
                    "id" : 4,
                    "valueText" : "Analyst"
                }]
            },
            {
                "id" : 6,
                "required" : true,
                "displayLabel" : "Client ID",
                "placeholder" : "Client ID",
                "type" : "TEXT",
                "defaultValue" : "",
                "validationExp" : "",
                "name" : "Client ID"
            }];

            var additionalFieldsList = [
            {
                "id" : 1,
                "required" : true,
                "displayLabel" : "Sin Number",
                "placeholder" : "Sin Number",
                "type" : "TEXT",
                "defaultValue" : "",
                "validationExp" : "",
                "name" : "Sin Number"
            },
            {
                "id" : 2,
                "required" : true,
                "displayname" : "DOB",
                "placeholder" : "DOB",
                "type" : "CALENDAR",
                "defaultValue" : "",
                "validationExp" : "",
                "name" : "DOB"
            },
            {
                "id" : 3,
                "required" : true,
                "displayLabel" : "Email",
                "placeholder" : "Email",
                "type" : "EMAIL",
                "defaultValue" : "",
                "validationExp" : "",
                "name" : "Email"
            },
            {
                "id" : 4,
                "required" : true,
                "displayLabel" : "Phone Number",
                "placeholder" : "Phone Number",
                "type" : "NUMBER",
                "defaultValue" : "XXX-XXX-XXXX",
                "validationExp" : "",
                "name" : "Phone Number"
            },
            {
                "id" : 5,
                "required" : true,
                "displayLabel" : "Address",
                "placeholder" : "Address",
                "type" : "TEXTAREA",
                "defaultValue" : "",
                "validationExp" : "",
                "name" : "Address"
            }
        ];

		// returns the current list of all users
    	$httpBackend.whenGET('/admin/action/users/list').respond(usersList);

    	// returns the current list of all manadatory signup fields
    	$httpBackend.whenGET('/admin/action/user/signup/manadatory/list').respond(manadatoryFieldsList);

    	// returns the current list of all additional signup fields
    	$httpBackend.whenGET('/admin/action/user/signup/additional/list').respond(additionalFieldsList);

      	$httpBackend.whenGET(/scripts\//).passThrough();
    }];
});
