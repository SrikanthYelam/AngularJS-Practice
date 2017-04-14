var numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Number Array: ", numberArray);

var filteredNumberArray = numberArray.filter(function (value) {
  return value > 5;
});
console.log("Filtered Number Array: ", filteredNumberArray);

// function Above5Filter(value) {
//   return value > 5;
// }
// var filteredNumberArray = numberArray.filter(Above5Filter);
// console.log("Filtered Number Array: ", filteredNumberArray);

var shoppingList1 = ["Milk", "Donuts", "Cookies", "Chocolate"];
console.log("Shopping List: ", shoppingList1);

var searchValue = "o";
function containsFilter(value) {
  return value.indexOf(searchValue) != -1;
}
var searchShoppingList = shoppingList1.filter(containsFilter);
console.log("Searched Shopping List: ", searchShoppingList);
