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
      vm.comments = {};
      commentsModel.getComments(vm.id).then(function (res) {
        vm.comments = res.map(function (item) {
          item.created_on = moment(item.created_on).format('MMMM Do YYYY, h:mm:ss a');
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

    }  
})();

