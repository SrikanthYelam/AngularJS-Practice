(function () {
'use strict';

angular.module('msgApp', [])
.controller('msgController', MsgController)
.filter('loves', LovesFilter)
.filter('truth', TruthFilter);

MsgController.$inject = ['$scope', '$filter', lovesFilter];
function MsgController($scope, $filter, lovesFilter) {
  $scope.name = "Srikanth";
  $scope.imgName = "Batman";
  $scope.travelcost = 500;

  $scope.sayMessage = function () {
    var msg = "Srikanth likes to travel!";
    var output = $filter('uppercase')(msg);
    return output;
  };

  $scope.sayLovesMessage = function () {
    var msg = "Srikanth likes to travel!";
    msg = lovesFilter(msg);
    return msg;
  };

  $scope.Flip = function () {
    $scope.imgName = "Quote";
  };
}

function LovesFilter() {
  return function (input) {
    input = input || "";
    input = input.replace("likes", "loves");
    return input;
  };
}

function TruthFilter() {
  return function (input, target, replace) {
    input = input || "";
    input = input.replace(target, replace);
    return input;
  };
}

})();
