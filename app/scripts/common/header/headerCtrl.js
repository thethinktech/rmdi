define(['app'], function () {
'use strict';
 /* Footer Controller */
	return ['$scope','UTILS', function ($scope,UTILS) {

		var init = function(){
			$scope.themeColor =  UTILS.getFromLocalStorage("themeColor");
			if(!$scope.themeColor){
				$scope.themeColor = '#FFFFFF';
			}
		};
		init();
	}];
});