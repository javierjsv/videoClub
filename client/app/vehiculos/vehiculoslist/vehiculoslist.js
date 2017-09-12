'use strict';

angular.module('videoClubApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('vehiculoslist', {
        url: '/vehiculoslist',
        template: '<vehiculoslist></vehiculoslist>'
      });
  });
