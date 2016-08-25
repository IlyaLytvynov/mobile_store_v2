(function() {
  'use strict';

  angular
    .module('client')
    .directive('navbar', navbar);

  /** @ngInject */
  function navbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      scope: {},
      controller: NavbarController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController(navbarConfig) {
      var vm = this;

      debugger;
      vm.menuItems = navbarConfig();
      // "vm.creationDate" is available by directive option "bindToController: true"
    }
  }

})();
