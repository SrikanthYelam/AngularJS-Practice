(function () {
'use strict';

var shoppingList1 = ["Milk", "Donuts", "Cookies", "Chocolate"];

angular.module('ShoppingListApp', [])
.controller('ShoppingListController', ShoppingListController);

ShoppingListController.$inject = ['$scope'];
function ShoppingListController($scope) {
  $scope.ShoppingList1 = shoppingList1;
}

})();
