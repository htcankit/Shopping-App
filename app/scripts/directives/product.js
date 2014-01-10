'use strict';

angular.module('projectsApp')
  .directive('product', function () {
    return {
      template: '<h3>{{item.name}}<h3>' +
      '<img ng-src="{{item.img}}" width=220px href="/catalogprofile/">' +
      '{{item.price | currency}}',
      restrict: 'E',
      scope: {
      	'item': '='
      }
    };
  });
