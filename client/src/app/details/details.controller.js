(function () {
    'use strict';

    angular
        .module('client')
        .controller('DetailsController', DetailsController);

    /** @ngInject */
    function DetailsController(phonesModel, $stateParams, constant) {
        var vm = this;
        vm.phone = [];
        vm.baseUrl = constant.baseUrl;
        vm.id = $stateParams.id;

        phonesModel.getOne(vm.id).then(function (response) {
            vm.phone = response;
            vm.phone.images = vm.phone.images.map(function (item) {
                return vm.baseUrl + item;
            });
        });


    }
})();