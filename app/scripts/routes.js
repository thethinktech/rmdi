define(['angularAMD'], 
    function(angularAMD) {
    'use strict';
	return ['$routeProvider', function($routeProvider) {

        $routeProvider.when('/login', angularAMD.route({
            templateUrl: 'scripts/modules/admin/login/loginView.html',
            controller: 'LoginCtrl',
            controllerUrl: 'modules/admin/login/loginCtrl'
        }));

        $routeProvider.when('/dashboard', angularAMD.route({
            templateUrl: 'scripts/modules/admin/dashboard/dashboardView.html',
            controller: 'DashboardCtrl',
            controllerUrl: 'modules/admin/dashboard/dashboardCtrl'
        }));

        $routeProvider.when('/usermanagement', angularAMD.route({
            templateUrl: 'scripts/modules/admin/userManagement/userManagementView.html',
            controller: 'UserManagementCtrl',
            controllerUrl: 'modules/admin/userManagement/userManagementCtrl'
        }));

        $routeProvider.when('/signup', angularAMD.route({
            templateUrl: 'scripts/modules/admin/signupFormBuilderView.html',
            controller: 'SignupFormBuilderCtrl',
            controllerUrl: 'modules/admin/login/signupFormBuilderCtrl'
        }));

        $routeProvider.when('/user', angularAMD.route({
            templateUrl: 'scripts/modules/user/userView.html',
            controller: 'UserCtrl',
            controllerUrl: 'modules/user/userCtrl'
        }));

        $routeProvider.when('/signup', angularAMD.route({
            templateUrl: 'scripts/modules/user/signup/signupView.html',
            controller: 'SignupCtrl',
            controllerUrl: 'modules/user/signup/signupCtrl'
        }));

        $routeProvider.otherwise({redirectTo: '/login'});
	}]
});
