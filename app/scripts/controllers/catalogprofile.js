'use strict';

angular.module('projectsApp')
  .controller('CatalogprofileCtrl', function ($scope, catalog, basket) {
    $scope.catalog = catalog;
    $scope.basket = basket;
  });
