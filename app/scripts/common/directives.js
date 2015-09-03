'use strict';

define(['angular','common/header/headerDirective','common/footer/footerDirective'], function (angular,headerDirective,footerDirective) {

	/* Directives */
	var module = angular.module('directives',[]);

	module.directive('appHeader',headerDirective);
	module.directive('appFooter',footerDirective);

	module.directive('renderElement',['$compile',function($compile){
		return{
			restrict : 'E',
			scope : {
				customization:'='
			},
			template: function(element, attrs){
			},
			link: function(scope, element, attrs, ngModel){
				var template = '';
			 	switch(scope.customization.type){
					case 'TEXT' : template = '<input type="{{customization.type}}" class="form-control" ng-required="customization.required"' +
													'placeholder="{{customization.placeholder}}" ng-model="customization.dataValue">';
					break;

					case 'DROPDOWNLIST' : template = '<div class="col-sm-6 form-group marginBottom5">' + 
												'<label for="" class="col-xs-12 col-sm-4 control-label" ng-bind="::customization.displayLabel"></label>' +
												'<div class="col-xs-12 col-sm-8">' + '<select class="form-control" ng-required="customization.required" ng-model="customization.dataValue"' +
													 'ng-options="value as value.valueText for value in customization.customizationValues">' + 
													 '<option value="" ng-bind="::customization.defaultValue"></option>' +
													 '</select>' + 
												'</div>' +
											    '<div class="clearfix"></div>' +
											 '</div>';
					break;

					case 'PASSWORD' : template = '<input type="{{customization.type}}" class="form-control" ng-required="customization.required"' +
													'placeholder="{{customization.placeholder}}" ng-model="customization.dataValue">';
					break;

					case 'CALENDAR' : template = '';
					break;

					case 'TEXTAREA' : template = '<textarea rows="4" cols="50" class="form-control" ng-required="customization.required"' +
													'placeholder="{{customization.placeholder}}" ng-model="customization.dataValue">' +
													'</textarea>';
					break;

					case 'NUMBER' : template = '<input type="{{customization.type}}" class="form-control" ng-required="customization.required"' +
													'placeholder="{{customization.placeholder}}" ng-model="customization.dataValue">';
					break;

					case 'EMAIL' : template = '<input type="{{customization.type}}" class="form-control" ng-required="customization.required"' +
													'placeholder="{{customization.placeholder}}" ng-model="customization.dataValue">';
					break;

				}
				template = $compile(template)(scope);
				$(element).replaceWith(template);
			}
		}
	}]);

	return module;
});
