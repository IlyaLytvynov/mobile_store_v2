/**
 * Created by IlyaLitvinov on 30.10.16.
 */
export default function routerConfig($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.when('/', '/catalog');
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state("main", {
            url: '/',
            component: "mainPage"//главный компонет
        }).state("main.about", {
            url: 'about',
            component: "aboutPage"
        })
        .state("main.catalog", {
            url: 'catalog',
            component: "catalogPage"
        })
        .state("main.cart", {
            url: 'cart',
            component: "cartPage"
        })
        .state("main.details", {
            url: 'details/:id',
            component: "detailsPage"
        })
}