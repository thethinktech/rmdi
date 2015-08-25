define(['angular'], function (angular) {
 'use strict';
 return ['$http',function($http){
 	
 	var jsonConfig = { 
        headers:{
                    'Content-Type':'application/json'
                }
        };

	    //Get all userslist
		this.getUsers = function(payLoadData){
			return $http.get('/admin/action/users/list');
		};
 }];
});