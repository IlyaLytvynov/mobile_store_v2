(function () {
    'use strict';

    angular
        .module('client')
        .directive('slideshow', function () {
            return {
                restrict: 'E',
                templateUrl: 'app/common/directives/slideShow/slideshow.view.html',
                scope: { //?
                    images: '='
                },
                controller: Controller,
                link: function (scope, el, attr) {
                    var carouselControls = el.find('.carousel-controls-container'),
                        carouselImgLarge = el.find('.carousel-img-large');

                    carouselControls.on('click', function (e) {
                        if (angular.element(e.target).hasClass('carousel_controls_img')) {
                            carouselImgLarge.stop().hide(0, function () {
                                angular.element(this).fadeIn(500);
                            });
                        }
                    })
                },
                controllerAs: 'vm',
                bindToController: true
            }
        });

    function Controller($scope, constant) {
        var vm = this;

        vm.activeImg = vm.images && vm.images[0];


        vm.previewImg = function (img) {
            vm.activeImg = img;
        };

        vm.width = function (count) {
            return {width: 155 * count + 'px'};
        };

        $scope.$watch(function () {
            return vm.images;
        }, function (newVal) {
            vm.activeImg = newVal && vm.images[0]
        });
    }
})();

