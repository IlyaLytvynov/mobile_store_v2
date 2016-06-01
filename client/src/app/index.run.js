(function() {
  'use strict';

  angular
    .module('client')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log, $location) {
    $location.path('/');
    
    $log.debug('runBlock end');
  }

})();
