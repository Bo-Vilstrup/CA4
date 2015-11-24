'use strict';

angular.module('myApp.view5_all_users', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view5_all_users', {
            templateUrl: 'app/view5_all_users/view5_all_users.html',
            controller: 'view5_all_usersCtrl'
        });
    }])

    .controller('view5_all_usersCtrl', function ($http, $scope) {
        $http.get('api/demoadmin')
            .success(function (data, status, headers, config) {
                $scope.data = data;
            })
            .error(function (data, status, headers, config) {

            });

    });