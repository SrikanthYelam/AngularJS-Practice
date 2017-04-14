(function () {
'use strict';

var shoppingList1 = ["Milk", "Donuts", "Cookies", "Chocolate"];

var shoppingList2 = [
  {
    name: "Milk",
    quantity: "2"
  },
  {
    name: "Donuts",
    quantity: "3"
  },
  {
    name: "Cookies",
    quantity: "5"
  },
  {
    name: "Chocolate",
    quantity: "7"
  }
];

angular.module('ShoppingListApp', [])
.controller('ShoppingListController', ShoppingListController);

ShoppingListController.$inject = ['$scope'];
function ShoppingListController($scope) {
  $scope.ShoppingList1 = shoppingList1;
  $scope.ShoppingList2 = shoppingList2;

  $scope.addToList() = function () {
    var newItem = {
      name: $scope.newItemName,
      quantity: $scope.newItemQuantity
    };

    $scope.ShoppingList2.push(newItem);
  };
}

})();
