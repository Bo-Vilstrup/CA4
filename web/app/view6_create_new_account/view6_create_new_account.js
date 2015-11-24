'use strict';

angular.module('myApp.view6_create_new_account', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view6_create_new_account', {
            templateUrl: 'app/view6_create_new_account/view6_create_new_account.html',
            controller: 'view6_create_new_accountCtrl'
        });
    }])

    .controller('view6_create_new_accountCtrl', function ($scope) {
        
    });