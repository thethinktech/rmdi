'use strict';

define(['angular','./services/constants','./services/utils','./services/commonServices','./services/adminServices'], 
	function (angular,constants,utils,commonServices,adminServices) {

	/* Services */
	var module = angular.module('services',[]);

	module.value('Constants',constants);
	module.factory('UTILS',utils);
	module.service('COMMONS',commonServices);
	module.service('ADMIN',adminServices);
	return module;
});
