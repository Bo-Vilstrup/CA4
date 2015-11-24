'use strict';

angular.module('myApp.view2_documentation', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view2_documentation', {
            templateUrl: 'app/view2_documentation/view2_documentation.html',
            controller: 'view2_documentationCtrl'
        });
    }])

    .controller('view2_documentationCtrl', function ($scope) {
        
    });