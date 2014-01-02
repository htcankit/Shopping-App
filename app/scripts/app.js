'use strict';

angular.module('projectsApp', ["ngRoute"])
 .config(function ($routeProvider) {
   $routeProvider
     .when('/', {
       templateUrl: 'views/main.html',
       controller: 'MainCtrl'
     })
     .when('/checkout', {
       templateUrl: 'views/checkout.html',
       controller: 'CheckoutCtrl'
     })
     .otherwise({
       redirectTo: '/'
     });
 });