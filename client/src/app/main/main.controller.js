(function() {
  'use strict';

  angular
    .module('client')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, $http) {
    var vm = this;

    $http({
      method: 'GET',
      url: 'http://localhost:4001/api/v1/phones'
    }).then(function (resp) {
      debugger;
      vm.items = resp.data;
    });

    console.log('Main page!');
  }
})();
