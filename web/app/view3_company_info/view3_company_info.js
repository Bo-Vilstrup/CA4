'use strict';

angular.module('myApp.view3_company_info', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/view3_company_info', {
                templateUrl: 'app/view3_company_info/view3_company_info.html',
                controller: 'view3_company_infoCtrl'
            });
        }])

    .controller('view3_company_infoCtrl', function ($http, $scope) {
        $http({
            method: 'GET',
            url: 'api/demouser'
        }).then(function successCallback(res) {
            $scope.data = res.data.message;
        }, function errorCallback(res) {
            $scope.error = res.status + ": " + res.data.statusText;
        });

    });
