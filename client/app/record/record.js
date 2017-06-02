'use strict';

angular.module('demoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('record', {
        url: '/record',
        templateUrl: 'app/record/record.html',
        controller: 'RecordCtrl'
      });
  });