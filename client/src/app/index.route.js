(function() {
  'use strict';

  angular
    .module('client')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/frontpage/frontpage.view.html',
        controller: 'FrontpageController',
        controllerAs: 'vm'
      })
      .state('catalog', {
        url: '/catalog',
        templateUrl: 'app/catalog/catalog.html',
        controller: 'CatalogController',
        controllerAs: 'vm'
      })
      .state('details', {
        url: '/details/:id',
        templateUrl: 'app/details/details.view.html',
        controller: 'DetailsController',
        controllerAs: 'vm'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'app/about/about.view.html',
        controller: 'AboutController',
        controllerAs: 'vm'
      })
      .state('basket', {
        url: '/basket',
        templateUrl: 'app/basket/basket.view.html',
        controller: 'BasketController',
        controllerAs: 'vm'
      });;

    $urlRouterProvider.otherwise('/');
  }

})();
