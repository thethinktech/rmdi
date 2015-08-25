'use strict';

define(['angular'], function (angular) {

	/* Filters */
	var module = angular.module('filters',[]);

	module.filter('formatDate',['$filter' ,function($filter) {
	  return function(dateString,format) {
	  	var dateOut = new Date(dateString);
	  	return $filter('date')(dateOut, format);
	  };
	}]);

	return module;
});
