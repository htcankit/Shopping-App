'use strict';

angular.module('projectsApp')
  .controller('MainCtrl', function ($scope, catalog, basket) {
    $scope.catalog = catalog;
    $scope.basket = basket;
  });
