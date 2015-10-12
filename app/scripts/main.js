'use strict';

require.config({
	paths: {
		angular: '../bower_components/angular/angular',
		angularRoute: '../bower_components/angular-route/angular-route',
		angularMocks: '../bower_components/angular-mocks/angular-mocks',
		text: '../bower_components/requirejs-text/text',
		angularAMD: '../bower_components/angularAMD/angularAMD',
		underscore: '../bower_components/underscore/underscore',
		jquery:'../bower_components/jquery/dist/jquery',
		angularSanitize: '../bower_components/angular-sanitize/angular-sanitize',
		interceptor: 'interceptor',
		bootstrap:'vendor/bootstrap',
		store: '../bower_components/store2/src/store2',
		angularMd5: '../bower_components/angular-md5/angular-md5',
		draggable: '../bower_components/ngDraggable/ngDraggable',        //Ref : https://github.com/fatlinesofcode/ngDraggable
		UIBootstrap: '../bower_components/angular-bootstrap/ui-bootstrap-tpls',
		ngTagInput: '../bower_components/ng-tags-input/ng-tags-input'				//Ref : http://mbenford.github.io/ngTagsInput/
	},
	waitSeconds:600,
	shim: {
		'angular' : { deps: ['jquery'],'exports' : 'angular'},
		'angularRoute': ['angular'],
		'angularMocks': {
			deps:['angular'],
			'exports':'angular.mock'
		},
		'angularAMD' : {
			deps : ['angular']
		},
		'angularSanitize': {
			deps : ['angular']
		},
		'bootstrap': {
			deps: ['jquery']
		},
		'angularMd5': {
			deps:['angular']
		},
		'draggable': {
			deps:['angular','jquery']
		},
		'UIBootstrap': {
			deps: ['angular']
		},
		'ngTagInput' : {
			deps: ['angular']
		}
	},
	priority: [
		"angular"
	],
	deps: ['app']
});