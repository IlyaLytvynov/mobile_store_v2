(function () {
    'use strict';

    angular
        .module('client')
        .config(routerConfig);

    /** @ngInject */
    function routerConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'app/main/main.html',
                controller: 'MainController',
                controllerAs: 'vm'
            })
            .state('details', {
                url: '/details',
                templateUrl: 'app/details/details.view.html',
                controller: 'DetailController',
                controllerAs: 'vm'
            })
            .state('details.test', {
                url: '/test/:id',
                templateUrl: 'app/details/details.test.view.html',
                controller: 'DetailControllerNested',
                controllerAs: 'vm'
            })
            .state('details.test2', {
                url: '/test2',
                templateUrl: 'app/details/details.test2.view.html',
                controller: 'DetailControllerNested',
                controllerAs: 'vm'
            });

        $urlRouterProvider.otherwise('/');
    }

})();
