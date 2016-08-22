(function () {
    'use strict';

    angular
        .module('client')
        .directive('navBar', function () {
            return {
                restrict: 'E',
                templateUrl: 'app/common/directives/navbar/navbar.view.html',
                controller: Controller,
                link: function (scope, el) {
                    var navbar = angular.element(el).find('.navbar'),
                        scrollState = 'top';
                    $(window).scroll(function () {
                        var scrollPos = $(window).scrollTop();

                        if ((scrollPos != 0) && (scrollState === 'top')) {
                            navbar.addClass('scrolledNav');
                            scrollState = 'scrolled';
                        } else if ((scrollPos === 0) && (scrollState === 'scrolled')) {
                            navbar.removeClass('scrolledNav');
                            scrollState = 'top';
                        }

                    });

                },
                controllerAs: 'vm',
                bindToController: true
            }
        });

    function Controller($state, basketModel, $rootScope) {
        var vm = this;

        vm.menuItems = [
            "Basket",
            "About",
            "Catalog",
            "Home"
        ]

        $rootScope.$watchCollection('items', function (newValue, oldValue) {
            vm.totalPrice = basketModel.getTotalPrice();
        });

        vm.activeTab = vm.menuItems[3].toLowerCase();

        vm.changeTab = function (tabId) {
            vm.activeTab = tabId.toLowerCase();
        }

        vm.totalPrice = basketModel.getTotalPrice();
    }
})();

