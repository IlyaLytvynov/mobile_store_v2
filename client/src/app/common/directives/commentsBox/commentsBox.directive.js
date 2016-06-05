(function() {
  'use strict';

  angular
    .module('client')
    .directive('commentsBox', function() {
      return {
        restrict: 'E',
        templateUrl: 'app/common/directives/commentsBox/commentsBox.view.html',
        controller : Controller,
        scope: {
          id: '='
        },
        controllerAs : 'vm',
        bindToController: true
      }
    }); 

    function Controller (constant, commentsModel) {
      var vm = this;
      debugger;
      vm.comments = {};

      commentsModel.getComments(vm.id).then(function (res) {
        debugger;
        vm.comments = res;
      })
    }  
})();

