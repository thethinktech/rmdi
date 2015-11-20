define(['app'], function () {
'use strict';
 /* Footer Controller */
	return ['$scope','UTILS', '$rootScope', function ($scope,UTILS,$rootScope) {

		var init = function(){
			// $rootScope.themeColor =  UTILS.getFromLocalStorage("themeColor");
			// if(!$rootScope.themeColor){
			// 	$rootScope.themeColor = '#FFFFFF';
			// }
		};
		init();
	}];
});