'use strict';

angular.module('projectsApp')
  .controller('NavCtrl', function ($scope, basket) {
    $scope.basket = basket;
  });
