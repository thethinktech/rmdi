define(['angularAMD'], 
    function(angularAMD) {
    'use strict';
	return ['$routeProvider', function($routeProvider) {

        //Client Admin Module Routes
        $routeProvider.when('/login', angularAMD.route({
            templateUrl: 'scripts/modules/clientAdmin/login/loginView.html',
            controller: 'LoginCtrl',
            controllerUrl: 'modules/clientAdmin/login/loginCtrl'
        }));

        $routeProvider.when('/dashboard', angularAMD.route({
            templateUrl: 'scripts/modules/clientAdmin/dashboard/dashboardView.html',
            controller: 'DashboardCtrl',
            controllerUrl: 'modules/clientAdmin/dashboard/dashboardCtrl'
        }));

        $routeProvider.when('/usermanagement', angularAMD.route({
            templateUrl: 'scripts/modules/clientAdmin/userManagement/userManagementView.html',
            controller: 'UserManagementCtrl',
            controllerUrl: 'modules/clientAdmin/userManagement/userManagementCtrl'
        }));

        $routeProvider.when('/signup', angularAMD.route({
            templateUrl: 'scripts/modules/clientAdmin/signup/signupView.html',
            controller: 'SignupCtrl',
            controllerUrl: 'modules/clientAdmin/signup/signupCtrl'
        }));

        $routeProvider.when('/profilemanagement', angularAMD.route({
            templateUrl: 'scripts/modules/clientAdmin/profileManagement/profileManagementView.html',
            controller: 'ProfileManagementCtrl',
            controllerUrl: 'modules/clientAdmin/profileManagement/profileManagementCtrl'
        }));

        $routeProvider.when('/profilebuilder', angularAMD.route({
            templateUrl: 'scripts/modules/clientAdmin/profileBuilder/profileBuilderView.html',
            controller: 'ProfileBuilderBuilderCtrl',
            controllerUrl: 'modules/clientAdmin/profileBuilder/profileBuilderCtrl'
        }));

        

        //User Module Routes
        $routeProvider.when('/user', angularAMD.route({
            templateUrl: 'scripts/modules/user/userView.html',
            controller: 'UserCtrl',
            controllerUrl: 'modules/user/userCtrl'
        }));

        //Super Admin Module Routes
        $routeProvider.when('/superadmin', angularAMD.route({
            templateUrl: 'scripts/modules/superAdmin/superAdminView.html',
            controller: 'SuperAdminCtrl',
            controllerUrl: 'modules/superAdmin/superAdminCtrl'
        }));
        
        $routeProvider.otherwise({redirectTo: '/login'});
	}]
});
