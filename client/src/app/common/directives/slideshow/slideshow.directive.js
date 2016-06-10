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
                slidesCount = slides.length,
                prevBtn = angular.element(el).find('.prev'),
                nextBtn = angular.element(el).find('.next');
        },
        controllerAs : 'vm',
        bindToController: true
      }
    }); 

    function Controller ($scope, constant) {
      var vm = this;

      vm.baseUrl = constant.baseUrl;
      $scope.$watch('scope.vm.images', function (newVal) {
            
      })
    }  
})();

