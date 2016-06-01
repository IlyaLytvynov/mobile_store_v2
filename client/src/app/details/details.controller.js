(function() {
  'use strict';

  angular
    .module('client')
    .controller('DetailsController', DetailsController);

  /** @ngInject */
  function DetailsController(phonesModel, $stateParams) {
    console.log("Details ctrl init")
    var vm = this;
    vm.phone = [];

    vm.coments = {
      "text": "comment for comment asdasdasdasdasdasdasd",
      "author": "test authordfsdfsdfdsf"
    };
    phonesModel.getOne($stateParams.id).then(function (response) {
      vm.phone = response;
    });


  }
})();
