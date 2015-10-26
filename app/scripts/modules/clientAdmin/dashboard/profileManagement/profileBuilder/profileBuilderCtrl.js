define(['app'], function (app) {
  'use strict';

  app.controller('ProfileBuilderBuilderCtrl',['$scope', 'COMMONMODAL', 'UTILS', '$location',
	function ($scope,COMMONMODAL,UTILS,$location) {

	$scope.selectedFields = [];
	$scope.currentTab = 1;
	var index = 0;

	$scope.profileBuilderObj = {
		"name" : "",
		"setupFields" : [
		{
			"question" : "Select data input requirements",
			"choices" : [
				{
					"id" : 1,
					"answer" : "Single Line"
				},
				{
					"id" : 2,
					"answer" : "Multiple Line"
				}
			]
		},
		{
			"question" : "Is data input staged?",
			"choices" : [
				{
					
					"id" : 1,
					"answer" : "Yes"
				},
				{
					"id" : 2,
					"answer" : "No"
				}
			]
		},
		{
			"question" : "Is search grid required?",
			"choices" : [
				{
					"id" : 1,
					"answer" : "Yes"
				},
				{
					"id" : 2,
					"answer" : "No"
				}
			]
		},
		{
			"question" : "Is search mandatory before data input is enabled?",
			"choices" : [
				{
					"id" : 1,
					"answer" : "Yes"
				},
				{
					"id" : 2,
					"answer" : "No"
				}
			]
		},
		{
			"question" : "Select form validation requirements:",
			"choices" : [
				{
					"id" : 1,
					"answer" : "Validation on Submit"
				},
				{
					"id" : 2,
					"answer" : "Explicit Validation"
				}
			]
		},
		{
			"question" : "Select form approval options",
			"choices" : [
				{
					"id" : 1,
					"answer" : "No Approval"
				},
				{
					"id" : 2,
					"answer" : "Single Approva"
				},
				{
					"id" : 3,
					"answer" : "Multiple Approvals"
				}
			]
		}
	],
	"predefinedFields" : [
		{
			"label" : "Created",
			"type" : "DATETIME",
			"sysGroup" : "Header",
			"groupLabel" : "Basic Data",
			"subType" : "",
			"tabSequence" : 1,
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
		},
		{
			"label" : "User ID",
			"type" : "TEXT",
			"sysGroup" : "Header",
			"groupLabel" : "Basic Data",
			"subType" : "Short",
			"tabSequence" : 2,
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
		},
		{
			"label" : "Prefix",
			"type" : "DROPDOWN",
			"sysGroup" : "Body",
			"groupLabel" : "User Info",
			"subType" : "",
			"tabSequence" : 3,
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
		},
		{
			"label" : "First Name",
			"type" : "TEXT",
			"sysGroup" : "Body",
			"groupLabel" : "User Info",
			"subType" : "",
			"tabSequence" : 4,
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
		}
	],
	"selectedFields" : []
	};

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
			},
			{
				"name" : "Field Type",
				"type" : "TEXT",
				"value" : "text"
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
		// {
		// 	"label" : "Grid",
		// 	"type" : "GRID", 
		// 	"placeholder" : "Grid",
		// 	"imgUrl" : "img/grid.png"
		// },
		{
			"label" : "Group",
			"type" : "GROUP", 
			"placeholder" : "Group",
			"imgUrl" : "img/group.png"
		}
	];

	$scope.profileStatusList = [
		{
			"id" : 1,
			"name" : "Active",
			"description" : "Active"
		},
		{
			"id" : 2,
			"name" : "Inactive",
			"description" : "Inactive"
		},
		{
			"id" : 3,
			"name" : "Published",
			"description" : "Published"
		},
		{
			"id" : 4,
			"name" : "Archieved",
			"description" : "Archieved"
		}
	];
	$scope.centerAnchor = true;

	$scope.showPropertiesModal = function(value){
		$scope.selected = {index : value, object : $scope.profileBuilderObj.selectedFields[value]};
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
			$scope.profileBuilderObj.selectedFields.push(tempModel);
    };

    $scope.cancel = function () {
	    $scope.modalInstance.dismiss('cancel');
	};

	$scope.saveProperties = function(){
		$scope.profileBuilderObj.selectedFields[$scope.selected.index] = $scope.selected.object;
		$scope.profileBuilderObj.selectedFields[$scope.selected.index].label = $scope.selected.object.properties[0].value;
		$scope.modalInstance.close(true);
	};

	$scope.saveProfile = function(){
		UTILS.setInLocalStorage("profileBuilderObj",$scope.profileBuilderObj);
	};

	$scope.openStatusModal = function(){
		$scope.statusModalInstance = COMMONMODAL.showModal('scripts/modules/clientAdmin/dashboard/profileManagement/profileBuilder/profileStatusModalView.html',$scope,'');
	};

	$scope.publishProfile = function(){
		$scope.statusModalInstance.close(true);
		// $scope.profileBuilderObj.status = "Published";
		$scope.profileBuilderObj.createdBy = "Admin";
		$scope.profileBuilderObj.createdDate = new Date();
		$scope.profileBuilderObj.version = 0;
		var temp = [];
		if(UTILS.getFromLocalStorage("profilesList")){
			temp = UTILS.getFromLocalStorage("profilesList");
		}
		temp.push($scope.profileBuilderObj);
		UTILS.setInLocalStorage("profilesList",temp);
		$location.path('dashboard/profilemanagement');
	};

	$scope.closeStatusModal = function(){
	    $scope.statusModalInstance.dismiss('cancel');
	};

	}]);
});
