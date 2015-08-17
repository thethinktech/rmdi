'use strict';

define([
    'angular',
    'angularMocks',
    'common/mockServices'
], function(angular, angularMocks, mockServices) {
    var mock = angular.module('mockModule', [
        'ngMockE2E'
    ]);

    mock.run(mockServices);

    return mock;
});

