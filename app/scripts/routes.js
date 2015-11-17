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
        $routeProvider.when('/sadashboard', angularAMD.route({
            templateUrl: 'scripts/modules/superAdmin/dashboard/superAdminDashboardView.html',
            controller: 'SuperAdminDashboardCtrl',
            controllerUrl: 'modules/superAdmin/dashboard/superAdminDashboardCtrl'
        }));

        $routeProvider.when('/sadashboard/themebuilder', angularAMD.route({
            templateUrl: 'scripts/modules/superAdmin/dashboard/themeBuilderView.html',
            controller: 'ThemeBuilderCtrl',
            controllerUrl: 'modules/superAdmin/dashboard/themeBuilderCtrl'
        }));

        $routeProvider.when('/sadashboard/domainconfig', angularAMD.route({
            templateUrl: 'scripts/modules/superAdmin/dashboard/domainConfiguration/domainConfigurationView.html',
            controller: 'DomainConfigurationCtrl',
            controllerUrl: 'modules/superAdmin/dashboard/domainConfiguration/domainConfigurationCtrl'
        }));

        $routeProvider.when('/sadashboard/domainconfig/domainbuilder', angularAMD.route({
            templateUrl: 'scripts/modules/superAdmin/dashboard/domainConfiguration/domainBuilder/domainBuilderView.html',
            controller: 'DomainBuilderCtrl',
            controllerUrl: 'modules/superAdmin/dashboard/domainConfiguration/domainBuilder/domainBuilderCtrl'
        }));

        //Temporary Designer Routes
        //1.1
        $routeProvider.when('/superadmin', angularAMD.route({
            templateUrl: 'scripts/modules/superAdmin/superAdminView.html'
        }));
        //1.2
        $routeProvider.when('/superadmin/configureobjectgrid', angularAMD.route({
            templateUrl: 'scripts/modules/superAdmin/configureObjectGrid.html'
        }));
        //1.3
        $routeProvider.when('/superadmin/sousermanagement', angularAMD.route({
            templateUrl: 'scripts/modules/superAdmin/systemObjectUserManagement.html'
        }));

        $routeProvider.otherwise({redirectTo: '/login'});
    }]
});
