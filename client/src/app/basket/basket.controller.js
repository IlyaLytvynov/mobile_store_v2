(function () {
    'use strict';

    angular
        .module('client')
        .controller('BasketController', BasketController);

    /** @ngInject */
    function BasketController(basketModel, $stateParams) {
        var vm = this;
        vm.items = [];

        vm.items = basketModel.getItems();
    }
})();