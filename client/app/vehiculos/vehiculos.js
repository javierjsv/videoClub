'use strict';

angular.module('videoClubApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('vehiculos', {
        url: '/vehiculos',
        template: '<vehiculos></vehiculos>'
      });
  });
