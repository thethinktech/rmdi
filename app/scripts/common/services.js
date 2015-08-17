'use strict';

define(['angular','./services/constants','./services/utils','./services/commonServices'], 
	function (angular,constants,utils,commonServices) {

	/* Services */
	var module = angular.module('services',[]);

	module.value('Constants',constants);
	module.factory('UTILS',utils);
	module.service('COMMONS',commonServices);
	return module;
});
