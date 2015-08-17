'use strict';

define(['angular','common/header/headerDirective','common/footer/footerDirective'], function (angular,headerDirective,footerDirective) {

	/* Directives */
	var module = angular.module('directives',[]);

	module.directive('appHeader',headerDirective);
	module.directive('appFooter',footerDirective);

	return module;
});
