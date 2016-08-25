(function () {
    angular.module('client')
        .controller('DetailController', DetailsController);

    function DetailsController ($stateParams) {
        var vm = this;
        debugger;

        vm.menuItems = [
            {
                state: 'home',
                title: 'to home'
            },
            {
                state: 'details.test',
                title: 'to test1'
            },
            {
                state: 'details.test2',
                title: 'to test2'
            }
        ];
        console.log('Details controller');
    }
})();