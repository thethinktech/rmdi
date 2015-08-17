define(['angularAMD'], 
    function(angularAMD) {
    'use strict';
	return ['$routeProvider', function($routeProvider) {

        $routeProvider.when('/login', angularAMD.route({
            templateUrl: 'scripts/modules/admin/login/loginView.html',
            controller: 'LoginCtrl',
            controllerUrl: 'modules/admin/login/loginCtrl'
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

        $routeProvider.otherwise({redirectTo: '/login'});
	}]
});
