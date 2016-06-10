(function() {
  'use strict';

  angular
    .module('client')
    .service('commentsModel', Model);

  /** @ngInject */
  function Model($http, $q, constant, $rootScope) {
    
    this.getComments = function (id) {
      return $http({
        url: constant.baseUrl + 'comments/' + id,
        method: 'GET'
      }).then(function (resp) {
        return resp.data;
      })
    };

    this.saveComment = function (newComment) {
      return $http({
        url: constant.baseUrl + 'comments',
        method: 'POST',
        data: newComment
      }).then(function (resp) {
        return resp.data;
      })
    }   
  }
})();