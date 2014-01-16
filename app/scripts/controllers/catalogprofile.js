'use strict';

angular.module('projectsApp')
  .controller('CatalogprofileCtrl', function ($scope, $routeParams, catalog, basket) {
    $scope.catalog = catalog;
    $scope.basket = basket;
    console.log(catalog[$routeParams.subCatalogId][$routeParams.catalogId]);
    $scope.item = catalog[$routeParams.subCatalogId][$routeParams.catalogId];
    $scope.currentImage = $scope.item.img_list[0];
    $scope.setImage = function(index){
    	$scope.currentImage = $scope.item.img_list[index];
    };

  });
