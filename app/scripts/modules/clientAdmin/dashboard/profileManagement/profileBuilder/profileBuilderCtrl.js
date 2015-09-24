define(['app'], function (app) {
  'use strict';

  app.controller('ProfileBuilderBuilderCtrl',['$scope', 'COMMONMODAL',
	function ($scope,COMMONMODAL) {

	$scope.droppedObjects = [];
	$scope.currentTab = 1;
	$scope.fieldControlsList = [
		{
			"name" : "text",
			"type" : "TEXT", 
			"placeholder" : "Text",
			"displayName" : "Text",
			"imgUrl" : "img/text.png"
		},
		{
			"name" : "dropdown",
			"type" : "DROPDOWN",
			"placeholder" : "Drop-downs",
			"displayName" : "Drop-downs",
			"imgUrl" : "img/dropdown.png"
		},
		{
			"name" : "number",
			"type" : "NUMBER", 
			"placeholder" : "Number",
			"displayName" : "Number",
			"imgUrl" : "img/number.png"
		},
		{
			"name" : "datetime",
			"type" : "DATETIME", 
			"placeholder" : "Date/Time",
			"displayName" : "Date/Time",
			"imgUrl" : "img/datetime.png"
		}
	];

	$scope.formControlsList = [
		{
			"name" : "button",
			"type" : "BUTTON", 
			"placeholder" : "Button",
			"displayName" : "Button",
			"imgUrl" : "img/button.png"
		},
		{
			"name" : "grid",
			"type" : "GRID", 
			"placeholder" : "Grid",
			"displayName" : "Grid",
			"imgUrl" : "img/grid.png"
		},
		{
			"name" : "group",
			"type" : "GROUP", 
			"placeholder" : "Group",
			"displayName" : "Group",
			"imgUrl" : "img/group.png"
		}
	];
	$scope.centerAnchor = true;

	$scope.showPropertiesModal = function(){
		$scope.modalInstance = COMMONMODAL.showModal('scripts/modules/clientAdmin/dashboard/profileManagement/profileBuilder/propertiesModalView.html',$scope,'');
	};


    $scope.toggleCenterAnchor = function () {$scope.centerAnchor = !$scope.centerAnchor}

	$scope.onDropComplete=function(data,evt){
		if(data)
        	var index = $scope.droppedObjects.indexOf(data);
        if (index == -1)
        	$scope.droppedObjects.push(data);
    };

    $scope.cancel = function () {
	    $scope.modalInstance.dismiss('cancel');
	};

	}]);
});
