export default routesConfig;

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true).hashPrefix('!');
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('app', {
            url: '/app',
            component: 'app'
        })
        .state('app.home', {
            url: '/home',
            component: 'home'
        })
        .state('app.homeDetails', {
            url: '/home/:id',
            component: 'home'
        })
        .state('app.about', {
            url: '/about',
            component: 'about'
        });
}
