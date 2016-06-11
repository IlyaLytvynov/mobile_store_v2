(function() {
  'use strict';

  angular
    .module('client')
    .directive('commentsForm', function() {
      return {
        restrict: 'E',
        templateUrl: 'app/common/directives/commentsBox/commentForm/commentForm.view.html',
        controller : Controller,
        link: function (scope, el, attr){
          var commentForm = angular.element(el).find('.commentForm-wrapper'),
              btnOpenForm = angular.element(el).find('.openCommentForm'),
              closeComForm = angular.element(el).find('.closeIcon');
          btnOpenForm.on('click', function () { 
            commentForm.addClass('active');
          });          
          closeComForm.on('click', function () {                    
            commentForm.removeClass('active');
          });
        },
        scope: {
          id: '='
        },
        controllerAs : 'vm',
        bindToController: true
      }
    }); 

    function Controller (commentsModel) {
      var vm = this;

      vm.newComment = {};
      vm.saveComment = function () {
        vm.newComment.item_id = vm.id;
        commentsModel.saveComment(vm.newComment);
      }
    }  
})();

