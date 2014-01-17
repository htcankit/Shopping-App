'use strict';

angular.module('projectsApp')
  .controller('MainCtrl', function ($scope, $rootScope, catalog, basket) {
  	$scope.categoryID = 'ELECTRONICS';
    $scope.catalog = catalog;
    $scope.basket = basket;
  });
