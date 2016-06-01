(function() {
  'use strict';

  angular
    .module('client')
    .service('basketModel', Model);

  /** @ngInject */
  function Model($http, $q, constant, $rootScope) {
    var items = $rootScope.items =  [{
      _id: "571c9437d7c37374201d5aae",
      name: "Dell Streak 7",
      price: 100,
      imgUrl: "img/phones/dell-streak-7.0.jpg",
      description: "Introducing Dell™ Streak 7. Share photos, videos and movies together. It’s small enough to carry aro...",
      average_rating: 4
      }
    ];

    this.getItems = function () {
      return this.items;
    };
    this.addItem = function (newItem) {
      console.log($rootScope.items);
      items.push(newItem);
    };
    this.getTotalPrice = function () {
      var totalPrice = 0;
      items.forEach(function(item) {
        totalPrice += item.price;
      });

      return totalPrice;
    };
  }
})();