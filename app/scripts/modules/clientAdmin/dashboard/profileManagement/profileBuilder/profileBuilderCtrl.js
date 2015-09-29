define(['app'], function (app) {
  'use strict';

  app.controller('ProfileBuilderBuilderCtrl',['$scope', 'COMMONMODAL',
	function ($scope,COMMONMODAL) {

	$scope.selectedFields = [];
	$scope.currentTab = 1;
	var index = 0;

	$scope.predefinedFields = [
		{
			"label" : "Created",
			"sysGroup" : "Header",
			"groupLabel" : "Basic Data",
			"type" : "DATETIME",
			"subType" : "",
			"format" : "YYYY-MM-DD",
			"length" : "",
			"tabSequence" : 1
		},
		{
			"label" : "User ID",
			"sysGroup" : "Header",
			"groupLabel" : "Basic Data",
			"type" : "TEXT",
			"subType" : "Short",
			"format" : "",
			"length" : "6",
			"tabSequence" : 2
		},
		{
			"label" : "Prefix",
			"sysGroup" : "Body",
			"groupLabel" : "User Info",
			"type" : "DROPDOWN",
			"subType" : "",
			"format" : "",
			"length" : "250",
			"tabSequence" : 3
		},
		{
			"label" : "First Name",
			"sysGroup" : "Body",
			"groupLabel" : "User Info",
			"type" : "TEXT",
			"subType" : "",
			"format" : "",
			"length" : "250",
			"tabSequence" : 4
		}
	];

	var textModel = 
	{
		"label" : "Text",
		"type" : "TEXT", 
		"placeholder" : "Text",
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
		"label" : "Dropdown",
		"type" : "DROPDOWN",
		"placeholder" : "Drop-downs",
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
		"label" : "Number",
		"type" : "NUMBER", 
		"placeholder" : "Number",
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
		"label" : "Datetime",
		"type" : "DATETIME", 
		"placeholder" : "Date/Time",
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
		"label" : "Button",
		"type" : "BUTTON", 
		"placeholder" : "Button",
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
		"label" : "Grid",
		"type" : "GRID", 
		"placeholder" : "Grid",
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
		"label" : "Group",
		"type" : "GROUP", 
		"placeholder" : "Group",
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
			"label" : "Text",
			"type" : "TEXT", 
			"placeholder" : "Text",
			"imgUrl" : "img/text.png"
		},
		{
			"label" : "Dropdown",
			"type" : "DROPDOWN",
			"placeholder" : "Drop-downs",
			"imgUrl" : "img/dropdown.png"
		},
		{
			"label" : "Number",
			"type" : "NUMBER", 
			"placeholder" : "Number",
			"imgUrl" : "img/number.png"
		},
		{
			"label" : "Date/Time",
			"type" : "DATETIME", 
			"placeholder" : "Date/Time",
			"imgUrl" : "img/datetime.png"
		}
	];

	$scope.formControlsList = [
		{
			"label" : "Button",
			"type" : "BUTTON", 
			"placeholder" : "Button",
			"imgUrl" : "img/button.png"
		},
		{
			"label" : "Grid",
			"type" : "GRID", 
			"placeholder" : "Grid",
			"imgUrl" : "img/grid.png"
		},
		{
			"label" : "Group",
			"type" : "GROUP", 
			"placeholder" : "Group",
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
		$scope.selectedFields[$scope.selected.index].label = $scope.selected.object.properties[0].value;
		$scope.modalInstance.close(true);
	};

	}]);
});
