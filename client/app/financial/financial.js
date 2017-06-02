'use strict';

angular.module('demoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('financial', {
        url: '/financial',
        templateUrl: 'app/financial/financial.html',
        controller: 'FinancialCtrl'
      });
  });