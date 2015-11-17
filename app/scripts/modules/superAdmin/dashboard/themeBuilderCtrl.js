define(['app'], function (app) {
  'use strict';

  app.controller('ThemeBuilderCtrl',['$scope', 'UTILS', '$location',
	function ($scope,UTILS,$location) {

		var init = function(){
			$scope.themeColor =  UTILS.getFromLocalStorage("themeColor");
			if(!$scope.themeColor){
				$scope.themeColor = '#FFFFFF';
			}
		};

		$scope.saveTheme = function(){
			UTILS.setInLocalStorage('themeColor',$scope.themeColor);
			$location.path('sadashboard');
		};

		init();
	}]);
});
