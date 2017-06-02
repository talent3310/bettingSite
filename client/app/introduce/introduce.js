'use strict';

angular.module('demoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('introduce', {
        url: '/introduce',
        templateUrl: 'app/introduce/introduce.html',
        controller: 'IntroduceCtrl'
      });
  });