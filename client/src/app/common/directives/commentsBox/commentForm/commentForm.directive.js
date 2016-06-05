(function() {
  'use strict';

  angular
    .module('client')
    .directive('commentsForm', function() {
      return {
        restrict: 'E',
        templateUrl: 'app/common/directives/commentsBox/commentForm/commentForm.view.html',
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

      vm.newComment = {};
      vm.saveComment = function () {
        vm.newComment.item_id = vm.id;
        commentsModel.saveComment(vm.newComment);
      }
    }  
})();

