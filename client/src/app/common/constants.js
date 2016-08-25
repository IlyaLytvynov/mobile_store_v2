(function() {
    'use strict';

    angular
        .module('client')
        .constant('navbarConfig', function () {
            return [
                {
                    state: 'home',
                    title: 'home'
                }
            ]
        });

})();
