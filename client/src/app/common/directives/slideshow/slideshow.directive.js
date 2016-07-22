(function() {
  'use strict';

  angular
    .module('client')
    .directive('slideshow', function() {
      return {
        restrict: 'E',
        templateUrl: 'app/common/directives/slideShow/slideshow.view.html',
        scope: { //?
          images: '='
        },
        controller : Controller,
        link: function (scope, el, attr) {
        },
        controllerAs : 'vm',
        bindToController: true
      }
    }); 

    function Controller ($scope, constant) {
      var vm = this;

      vm.activeImg = vm.images && vm.images[0];


      vm.previewImg = function (img) {
        vm.activeImg = img;
      };

      vm.width = function (count) {
        return {width: 155*count +'px'};
      };

      $scope.$watch(function () {
        return vm.images;
      }, function (newVal) {
        vm.activeImg = newVal && vm.images[0]              
      });
    }  
})();

