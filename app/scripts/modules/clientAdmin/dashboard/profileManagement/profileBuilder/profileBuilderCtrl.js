define(['app'], function (app) {
  'use strict';

  app.controller('ProfileBuilderBuilderCtrl',['$scope', 'COMMONMODAL',
	function ($scope,COMMONMODAL) {

	$scope.selectedFields = [];
	$scope.currentTab = 1;
	var index = 0;

	var textModel = 
	{
		"name" : "text",
		"type" : "TEXT", 
		"placeholder" : "Text",
		"displayName" : "Text",
		"imgUrl" : "img/text.png",
		"properties" : [
			{
				"name" : "Label",
				"type" : "TEXT",
				"value": ""
			},
			{
				"name" : "Minimum Length",
				"type" : "NUMBER",
				"value" : 0
			},
			{
				"name" : "Maximum Length",
				"type" : "NUMBER",
				"value" : 0
			},
			{
				"name" : "Required",
				"type" : "RADIO",
				"value" : false
			}
		]
	};

	var dropDownModel = 
	{
		"name" : "dropdown",
		"type" : "DROPDOWN",
		"placeholder" : "Drop-downs",
		"displayName" : "Drop-downs",
		"imgUrl" : "img/dropdown.png",
		"properties" : [
			{
				"name" : "Label",
				"type" : "TEXT",
				"value": ""
			},
			{
				"name" : "Minimum Length",
				"type" : "NUMBER",
				"value" : 0
			},
			{
				"name" : "Maximum Length",
				"type" : "NUMBER",
				"value" : 0
			},
			{
				"name" : "Required",
				"type" : "RADIO",
				"value" : false
			}
		]
	};

	var numberModel = 
	{
		"name" : "number",
		"type" : "NUMBER", 
		"placeholder" : "Number",
		"displayName" : "Number",
		"imgUrl" : "img/number.png",
		"properties" : [
			{
				"name" : "Label",
				"type" : "TEXT",
				"value": ""
			},
			{
				"name" : "Minimum Number",
				"type" : "NUMBER",
				"value" : 0
			},
			{
				"name" : "Maximum Number",
				"type" : "NUMBER",
				"value" : 0
			},
			{
				"name" : "Required",
				"type" : "RADIO",
				"value" : false
			}
		]
	};
	var dateTimeModel = 
	{
		"name" : "datetime",
		"type" : "DATETIME", 
		"placeholder" : "Date/Time",
		"displayName" : "Date/Time",
		"imgUrl" : "img/datetime.png",
		"properties" : [
			{
				"name" : "Label",
				"type" : "TEXT",
				"value": ""
			},
			{
				"name" : "Format",
				"type" : "TEXT",
				"value" : ""
			},
			{
				"name" : "Required",
				"type" : "RADIO",
				"value" : false
			}
		]
	};
	var buttonModel = 
	{
		"name" : "button",
		"type" : "BUTTON", 
		"placeholder" : "Button",
		"displayName" : "Button",
		"imgUrl" : "img/button.png",
		"properties" : [
			{
				"name" : "Label",
				"type" : "TEXT",
				"value": ""
			}
		]
	};
	var gridModel = 
	{
		"name" : "grid",
		"type" : "GRID", 
		"placeholder" : "Grid",
		"displayName" : "Grid",
		"imgUrl" : "img/grid.png",
		"properties" : [
			{
				"name" : "Label",
				"type" : "TEXT",
				"value": ""
			},
			{
				"name" : "Required",
				"type" : "RADIO",
				"value" : false
			},
			{
				"name" : "Show/Hide",
				"type" : "RADIO",
				"value" : false
			}
		]
	};
	var groupModel = 
	{
		"name" : "group",
		"type" : "GROUP", 
		"placeholder" : "Group",
		"displayName" : "Group",
		"imgUrl" : "img/group.png",
		"properties" : [
			{
				"name" : "Label",
				"type" : "TEXT",
				"value": ""
			},
			{
				"name" : "Required",
				"type" : "RADIO",
				"value" : false
			},
			{
				"name" : "Show/Hide",
				"type" : "RADIO",
				"value" : false
			}
		]
	};
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

	$scope.showPropertiesModal = function(value){
		$scope.selected = {index : value, object : $scope.selectedFields[value]};
		$scope.modalInstance = COMMONMODAL.showModal('scripts/modules/clientAdmin/dashboard/profileManagement/profileBuilder/propertiesModalView.html',$scope,'');
	};


    $scope.toggleCenterAnchor = function () {$scope.centerAnchor = !$scope.centerAnchor}

	$scope.onDropComplete=function(data,evt){
		switch(data.type){
			case 'TEXT': var tempModel = angular.copy(textModel);
							break;
			case 'DROPDOWN': var tempModel = angular.copy(dropDownModel);
							break;
			case 'NUMBER': var tempModel = angular.copy(numberModel);
							break;
			case 'DATETIME': var tempModel = angular.copy(dateTimeModel);
							break;
			case 'BUTTON': var tempModel = angular.copy(buttonModel);
							break;
			case 'GRID': var tempModel = angular.copy(gridModel);
							break;
			case 'GROUP': var tempModel = angular.copy(groupModel);
							break;
		}
			tempModel.id = ++index;
			$scope.selectedFields.push(tempModel);
    };

    $scope.cancel = function () {
	    $scope.modalInstance.dismiss('cancel');
	};

	$scope.saveProperties = function(){
		$scope.selectedFields[$scope.selected.index] = $scope.selected.object;
		$scope.selectedFields[$scope.selected.index].displayName = $scope.selected.object.properties[0].value;
		$scope.modalInstance.close(true);
	};

	}]);
});
