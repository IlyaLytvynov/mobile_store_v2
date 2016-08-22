(function () {
    'use strict';

    angular
        .module('client')
        .controller('CatalogController', MainController);

    /** @ngInject */
    function MainController(phonesModel, basketModel, constant, $state) {
        var vm = this;

        vm.items = [];

        phonesModel.fetchData().then(function (response) {
            response = response.map(function (item) {
                item.imgUrl = constant.baseUrl + item.imgUrl;
                return item;
            });
            vm.items = response;
        });

        vm.addItem = function (newItem) {
            basketModel.addItem(newItem);
        };
    }
})();
