define(['app'], function (app) {
  'use strict';

  app.controller('ThemeBuilderCtrl',['$scope', 'UTILS', '$location','$rootScope',
	function ($scope,UTILS,$location,$rootScope) {

		var init = function(){
			// $scope.themeColor =  UTILS.getFromLocalStorage("themeColor");
			// if(!$scope.themeColor){
			// 	$scope.themeColor = '#FFFFFF';
			// }
		};

		$scope.saveTheme = function(){
			UTILS.setInLocalStorage('themeColor',$rootScope.theme.themeColor);
			$location.path('sadashboard');
		};

		init();
	}]);
});
