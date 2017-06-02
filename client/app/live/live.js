'use strict';

angular.module('demoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('live', {
        url: '/live',
        templateUrl: 'app/live/live.html',
        controller: 'LiveCtrl'
      });
  });