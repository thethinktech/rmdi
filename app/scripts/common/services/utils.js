define(['angular','store'], function (angular,store) {
	'use strict';

		/* Utils */

		return ['md5','$window','$location',function (md5,$window,$location) {					
			return {
			encryptCredential: function(value) {
				var result  = md5.createHash(value || '');
				return result;
			},
		    
		    setInSession: function(key,value) {
	           store.session.set(key,value);
	        },

	        getFromSession: function(key) {
	            return store.session.get(key);
	        },

	        removeFromSession: function(key) {
	          store.session.remove(key);
	        },

	        clearSession: function() {
	          store.session.clear();
	        },

	        setInLocalStorage: function(key,value) {
	          store.set(key,value);
	        },

	        getFromLocalStorage: function(key) {
	          return store.get(key);
	        },

	        removeFromLocalStorage: function(key) {
	          store.remove(key);
	        },

	        clearStorage: function(){
			  store.clear();
	        },

	        formatDate: function(dateValue){
	        	if(dateValue == null)
	        		return;
	        	if(typeof(dateValue) === "string"){
	        		return dateValue;
	        	}
	        	//var m_names = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
	        	var m_names = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec");
				var curr_day = dateValue.getDate();
				var curr_month = dateValue.getMonth();
				var curr_year = dateValue.getFullYear();
				var curr_date = curr_day + "-" + m_names[curr_month] + "-" + curr_year;
				return curr_date;
	        },

	        removeKeyFromUrl: function(key) {
	          delete $location.$$search[key];
	        }
        }
	}];
});