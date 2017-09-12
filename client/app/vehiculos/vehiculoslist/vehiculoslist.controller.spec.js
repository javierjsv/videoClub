'use strict';

describe('Component: VehiculoslistComponent', function () {

  // load the controller's module
  beforeEach(module('videoClubApp'));

  var VehiculoslistComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    VehiculoslistComponent = $componentController('vehiculoslist', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
