'use strict';

angular.module('projectsApp')
  .controller('NavCtrl', function ($scope, basket, $rootScope) {
    $scope.basket = basket;
    $scope.setTempVar = function(val){
    	$rootScope.temp_var = val;
    	console.log(val);
    };
  });
