'use strict';

(function(){

class VehiculosComponent {
  constructor() {
      this.vehiculos = [{
        id:1,
        marca:"Kia",
        descripcion:"color gris, trasmision automatica",
        valorAlquiler: 1000000,
        tipo:"pequeño"
    },
    {
      id:2,
      marca:"Reanaul",
      descripcion:"color gris, trasmision manual",
      valorAlquiler: 201723,
      tipo:"pequeño"
  },
  {
    id:3,
    marca:"iphone 7s",
    descripcion:"color rojo , trasmision manual",
    valorAlquiler: 401723,
    tipo:"mediano "
  },

  {
    id:4,
    marca:"windasi",
    descripcion:"color rojo , trasmision manual",
    valorAlquiler: 801723,
    tipo:"mediano "
  },
  {
    id:5,
    marca:"Zenus",
    descripcion:"color rojo , trasmision manual",
    valorAlquiler: 901723,
    tipo:"mediano "
  },
  {
    id:6,
    marca:"iItal",
    descripcion:"color rojo , trasmision manual",
    valorAlquiler: 291723,
    tipo:"mediano "
  }

  ];
    }
$onInit(){
// var datos = [1,2,4,5,4]
// for (var i = 0; i < datos.length; i++) {
//   datos[i]
// }
  for (var i = 0; i < this.vehiculos; i++) {
    console.log(this.vehiculos[i].valorAlquiler = this.vehiculos[i].valorAlquiler * 0.15 + this.vehiculos[i].valorAlquiler);
    if (this.vehiculos[i].tipo == "mediano") {
    console.log(this.vehiculos.valorAlquiler =  this.vehiculos.valorAlquiler - 0.15 )  ;
    }

  }

}

  }


angular.module('videoClubApp')
  .component('vehiculos', {
    templateUrl: 'app/vehiculos/vehiculos.html',
    controller: VehiculosComponent,
    controllerAs: 'vm'
  });

})();
