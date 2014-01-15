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
     .when('/catalogprofile/:catalogId', {
       templateUrl: 'views/catalogprofile.html',
       controller: 'CatalogprofileCtrl'
     })
     .otherwise({
       redirectTo: '/'
     });
 });