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

        $routeProvider.when('/dashboard/usermanagement', angularAMD.route({
            templateUrl: 'scripts/modules/clientAdmin/dashboard/userManagement/userManagementView.html',
            controller: 'UserManagementCtrl',
            controllerUrl: 'modules/clientAdmin/dashboard/userManagement/userManagementCtrl'
        }));

        $routeProvider.when('/dashboard/usermanagement/adduser', angularAMD.route({
            templateUrl: 'scripts/modules/clientAdmin/dashboard/userManagement/addUser/addUserView.html',
            controller: 'AddUserCtrl',
            controllerUrl: 'modules/clientAdmin/dashboard/userManagement/addUser/addUserCtrl'
        }));

        $routeProvider.when('/dashboard/profilemanagement', angularAMD.route({
            templateUrl: 'scripts/modules/clientAdmin/dashboard/profileManagement/profileManagementView.html',
            controller: 'ProfileManagementCtrl',
            controllerUrl: 'modules/clientAdmin/dashboard/profileManagement/profileManagementCtrl'
        }));

        $routeProvider.when('/dashboard/profilemanagement/profilebuilder', angularAMD.route({
            templateUrl: 'scripts/modules/clientAdmin/dashboard/profileManagement/profileBuilder/profileBuilderView.html',
            controller: 'ProfileBuilderBuilderCtrl',
            controllerUrl: 'modules/clientAdmin/dashboard/profileManagement/profileBuilder/profileBuilderCtrl'
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

        //Temporary Designer Routes
        $routeProvider.when('/superadmin/configureobjectgrid', angularAMD.route({
            templateUrl: 'scripts/modules/superAdmin/configureObjectGrid.html',
            controller: 'configureObjectGridCtrl',
            controllerUrl: 'modules/superAdmin/configureObjectGridCtrl'
        }));

        $routeProvider.when('/superadmin/sousermanagement', angularAMD.route({
            templateUrl: 'scripts/modules/superAdmin/systemObjectUserManagement.html',
            controller: 'systemObjectUserManagementCtrl',
            controllerUrl: 'modules/superAdmin/systemObjectUserManagementCtrl'
        }));

        $routeProvider.otherwise({redirectTo: '/login'});
    }]
});
