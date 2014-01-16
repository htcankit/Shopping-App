'use strict';

angular.module('projectsApp')
  .controller('MainCtrl', function ($scope, catalog, basket) {
  	$scope.categoryID = 'ELECTRONICS';
    $scope.catalog = catalog;
    $scope.basket = basket;
    $scope.setCategoryId = function(id){
    	$scope.categoryID = id;
    };
  });
