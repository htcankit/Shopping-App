'use strict';

describe('Controller: CatalogprofileCtrl', function () {

  // load the controller's module
  beforeEach(module('projectsApp'));

  var CatalogprofileCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CatalogprofileCtrl = $controller('CatalogprofileCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
