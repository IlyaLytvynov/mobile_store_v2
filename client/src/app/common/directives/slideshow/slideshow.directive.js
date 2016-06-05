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
            var slides = angular.element(el).find('.slide-img'),
                slidesCount = slides.length;

          
            debugger; 

        },
        controllerAs : 'vm',
        bindToController: true
      }
    }); 

    function Controller ($scope, constant) {
      var vm = this;

      vm.baseUrl = constant.baseUrl;
      console.log(vm.images);
      console.log('init showSlider');
      $scope.$watch('scope.vm.images', function (newVal) {
            debugger;
          })
    }  
})();

