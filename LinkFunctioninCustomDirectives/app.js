(function () {
'use strict';

angular.module('ControllerAsApp', [])
.controller('ShoppingListController1', ShoppingListController1)
.factory('ShoppingListFactory', ShoppingListFactory)
.directive('shoppingList', ShoppingList);

function ShoppingList() {
  var ddo = {
    templateUrl: "shoppingList.html",
    scope: {
      items: '<',
      myTitle: '@title',
      onRemove: '&'
    },
    controller: shoppingListDirectiveController,
    controllerAs: 'list',
    bindToController: true,
    link: shoppingListDirectiveLink,
    transclude: true
  };
  return ddo;
}

function shoppingListDirectiveLink(scope, element, attrs, controller) {
  console.log("Link scope is: ", scope);
  console.log("Controller instance is: ", controller);
  console.log("Element is: ", element);

  scope.$watch('list.cookiesInList()', function (newValue, oldValue) {
    console.log("Old Value: ", oldValue);
    console.log("New Value: ", newValue);

    if(newValue == true){
      displayCookieWarning();
    }
    else{
      removeCookieWarning();
    }
  });

  function displayCookieWarning() {
    //using Angular jqLite
    // var warningElem = element.find("div");
    // warningElem.css('display', 'block');

    //If Jquery included before Angular
    var warningElem = element.find("div.error");
    warningElem.slideDown(900);
  }

  function removeCookieWarning() {
    //using Angular jqLite
    // var warningElem = element.find("div");
    // warningElem.css('display', 'none');

    //If Jquery included before Angular
    var warningElem = element.find("div.error");
    warningElem.slideUp(900);
  }
}

function shoppingListDirectiveController() {
  var list = this;

  list.cookiesInList = function () {
    for(var i = 0; i < list.items.length; i++){
      var item = list.items[i].name;
      if(item.toLowerCase().indexOf("cookie") !== -1){
        return true;
      }
    }

    return false;
  };
}

//Controller 1
ShoppingListController1.$inject = ['ShoppingListFactory'];
function ShoppingListController1(ShoppingListFactory) {
 var list1 = this;

 var shoppingList = ShoppingListFactory();

 list1.items = shoppingList.getItems();
 var origTitle = "Shopping List #1";
 list1.title = origTitle + " (" + list1.items.length + " items)";

 list1.warning = "Cookies Detected!";

 list1.itemName = "";
 list1.itemQuantity = "";

 list1.addItem =  function () {
    shoppingList.addItem(list1.itemName, list1.itemQuantity);
    list1.title = origTitle + " (" + list1.items.length + " items)";
 }

 list1.removeItem = function (itemIndex) {
    console.log("this is: ", this);
    this.lastRemoved = "Last item removed was: " + this.items[itemIndex].name;
    shoppingList.removeItem(itemIndex);
    list1.title = origTitle + " (" + list1.items.length + " items)";
 };
}

function ShoppingListService(maxItems) {
  var service = this;

  // List of shopping items
  var items = [];

  service.addItem = function (itemName, itemQuantity) {
    if((maxItems == undefined) || (maxItems != undefined) && (items.length < maxItems)){
      var item = {
        name: itemName,
        quantity: itemQuantity
      };
      items.push(item);
    }
    else{
      throw new Error("Max Items (" + maxItems + ") reached.")
    }
  };

  service.removeItem = function (itemIndex) {
    items.splice(itemIndex, 1);
  };

  service.getItems = function () {
    return items;
  };
}

function ShoppingListFactory() {
  var factory = function (maxItems) {
    return new ShoppingListService(maxItems);
  };
  return factory;
}

})();
