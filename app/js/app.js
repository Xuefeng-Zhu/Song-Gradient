'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/main', {templateUrl: 'partials/main.html', controller: 'MainCtrl'});
  $routeProvider.when('/main2', {templateUrl: 'partials/main2.html', controller: 'MainCtrl2'});
  $routeProvider.when('/visualization', {templateUrl: 'partials/visualization.html', controller: 'VisualCtrl'});
  $routeProvider.when('/visualization2', {templateUrl: 'partials/visualization2.html', controller: 'VisualCtrl2'});
  $routeProvider.otherwise({redirectTo: '/main'});
}]);

google.load("visualization", "1", {packages:["corechart"]});
