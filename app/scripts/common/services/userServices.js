define(['angular'], function (angular) {
 'use strict';
 return ['$http',function($http){
 	
 	var jsonConfig = { 
        headers:{
                    'Content-Type':'application/json'
                }
        };

	    //Get all manadatory signup fields
		this.getManadatoryFields = function(payLoadData){
			return $http.get('/admin/action/user/signup/manadatory/list');
		};

		//Get all additional signup fields
		this.getAdditionalFields = function(payLoadData){
			return $http.get('/admin/action/user/signup/additional/list');
		};
 }];
});