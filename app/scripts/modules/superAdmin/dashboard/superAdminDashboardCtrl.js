define(['app'], function (app) {
  'use strict';

  app.controller('SuperAdminDashboardCtrl',['$scope','$location','UTILS',
	function ($scope,$location,UTILS) {

		$scope.goToUrl = function(url,icon,name){
			var temp = {"name" : name,"icon" : icon};
			UTILS.setInSession('selectedOption',temp);
			$location.path(url);
		};

	}]);
});
