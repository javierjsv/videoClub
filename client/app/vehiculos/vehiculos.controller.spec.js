'use strict';

describe('Component: VehiculosComponent', function () {

  // load the controller's module
  beforeEach(module('videoClubApp'));

  var VehiculosComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    VehiculosComponent = $componentController('vehiculos', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
