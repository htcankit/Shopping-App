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
     .when('/catalogprofile/:subCatalogId/:catalogId', {
       templateUrl: 'views/catalogprofile.html',
       controller: 'CatalogprofileCtrl'
     })
     .when('/subcategory/:subCatalogId', {
       templateUrl: 'views/catalogprofile.html',
       controller: 'CatalogprofileCtrl'
     })
     .otherwise({
       redirectTo: '/'
     });
 }).run(function($rootScope){
    $rootScope.temp_var = "";
 });