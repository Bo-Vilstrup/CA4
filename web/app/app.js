'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'ngAnimate',
  'ui.bootstrap',
  'myApp.security',
  'myApp.view1',
  'myApp.view2_documentation',
  'myApp.view3_company_info',
  'myApp.view4_exchange_rate_info',
  'myApp.view5_all_users',
  'myApp.view6_create_new_account',
//  'myApp.view4',
  'myApp.filters',
  'myApp.directives',
  'myApp.factories',
  'myApp.services'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]).
config(function ($httpProvider) {
   $httpProvider.interceptors.push('authInterceptor');
});


