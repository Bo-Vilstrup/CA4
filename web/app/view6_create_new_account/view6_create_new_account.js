'use strict';

angular.module('myApp.view6_create_new_account', ['ngRoute'])

        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/view6_create_new_account', {
                templateUrl: 'app/view6_create_new_account/view6_create_new_account.html',
                controller: 'view6_create_new_accountCtrl'
            });
        }])

        .controller('view6_create_new_accountCtrl', function ($scope, $http ) {

        $scope.submit = function () {

            var credential = JSON.stringify({
                
                    username: $scope.userName,
                    password: $scope.password
                });
        
            var req = {
                method: 'POST',
                url: 'api/allusers',
                headers: { 'Content-Type': 'application/json' },
                data: credential
            };

        $http(req).then(function successCallback(response) {
            // this callback will be called asynchronously
            // when the response is available
            $scope.userName = "";
            $scope.password = "";
        }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            alert("failure");
        });
         

        }; // End of submit


    }); // End of controller