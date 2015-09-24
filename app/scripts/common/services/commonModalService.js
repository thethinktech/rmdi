define(['angular'], function (angular) {

	'use strict';

	return ['$modal', function ($modal) {

		return {
			showModal: function(templateUrl, scope, size,controller){
				var obj = {
					templateUrl: templateUrl,
					scope: scope,
					size: size,
					backdrop: 'static',
		            keyboard: false,
		            modalFade: true	
				};
				if(controller)
					obj.controller = controller;
				if(!scope)
					delete obj.scope;
				return $modal.open(obj);
			}
		}
	}];
});