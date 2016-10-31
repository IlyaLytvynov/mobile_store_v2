/**
 * Created by IlyaLitvinov on 30.10.16.
 */
export default function routerConfig ($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');

    $stateProvider.state("main", {
        url: '/',
        component: "main"
    });
}