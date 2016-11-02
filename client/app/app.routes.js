/**
 * Created by IlyaLitvinov on 30.10.16.
 */
export default function routerConfig($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.when('/', '/catalog');
    $urlRouterProvider.otherwise('/catalog');

    $stateProvider.state("main", {
        url: '/',
        component: "main"//главный компонет
    }).state("main.catalog", {
        url: 'catalog',
        component: "catalog"
    }).state("main.about", {
        url: 'about',
        component: "about"
    });
}