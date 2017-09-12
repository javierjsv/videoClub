'use strict';

(function(){

class VehiculoslistComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('videoClubApp')
  .component('vehiculoslist', {
    templateUrl: 'app/vehiculos/vehiculoslist/vehiculoslist.html',
    controller: VehiculoslistComponent,
    controllerAs: 'vehiculoslistCtrl'
  });

})();
