'use strict';

define(['angular','./services/constants','./services/utils','./services/commonServices','./services/adminServices','./services/userServices','./services/commonModalService'], 
	function (angular,constants,utils,commonServices,adminServices,userServices,commonModalService) {

	/* Services */
	var module = angular.module('services',[]);

	module.value('Constants',constants);
	module.factory('UTILS',utils);
	module.service('COMMONS',commonServices);
	module.service('ADMIN',adminServices);
	module.service('USER',userServices);
	module.service('COMMONMODAL',commonModalService);
	return module;
});
