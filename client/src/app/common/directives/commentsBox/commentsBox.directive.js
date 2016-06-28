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
      vm.comments = [];
      vm.isError = false;
      commentsModel.getComments(vm.id).then(function (res) {
        vm.comments = res.map(function (item) {
          item.created_on = moment(item.created_on).format('LL, h:mm');
          return item;
        });
      });

        vm.rate = 7;
        vm.max = 10;
        vm.isReadonly = false;
        vm.ratingStates = [
          {stateOn: 'glyphicon-ok-sign', stateOff: 'glyphicon-ok-circle'},
          {stateOn: 'glyphicon-star', stateOff: 'glyphicon-star-empty'},
          {stateOn: 'glyphicon-heart', stateOff: 'glyphicon-ban-circle'},
          {stateOn: 'glyphicon-heart'},
          {stateOff: 'glyphicon-off'}
        ];

      vm.saveComment = function (commentObject) {
        debugger;
        commentsModel.saveComment(commentObject).then(function (newComment) {
          newComment.created_on = moment(newComment.created_on).format('LL, h:mm');
          vm.comments.push(newComment);
        }, function (e) {
          debugger;
          vm.isError = true;
          throw new Error(e);
        });
      }
    }  
})();

