(function () {
    'use strict';

    angular
        .module('client')
        .service('basketModel', Model);

    /** @ngInject */
    function Model($http, $q, constant, $rootScope) {
        var items = $rootScope.items = JSON.parse(localStorage.getItem("mobile_store")) || [];

        this.getItems = function () {
            return items;
        };
        this.addItem = function (newItem) {
            console.log($rootScope.items);

            items.push(newItem);
            syncStorage(items);
        };
        this.getTotalPrice = function () {
            var totalPrice = 0;
            items.forEach(function (item) {
                totalPrice += item.price;
            });

            return totalPrice;
        };

        function syncStorage(data) {
            localStorage.setItem("mobile_store", JSON.stringify(data));
        }
    }
})();