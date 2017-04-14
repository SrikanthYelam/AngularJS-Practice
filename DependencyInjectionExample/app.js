(function () {
'use strict';

angular.module('DIApp', [])
.controller('DIController', ['$scope', '$filter', DIController]);

//DIController.$inject = ['$scope', '$filter'];  -- alternate way, instead of using inline array method.
function DIController($scope, $filter) {
  $scope.name = "Srikanth";

  $scope.upper = function () {
    var upcase = $filter('uppercase');
    $scope.name = upcase($scope.name);
  };
}

})();

//Minified code

// !function(){"use strict";function n(n,e){n.name="Srikanth",n.upper=function(){var r=e("uppercase");n.name=r(n.name)}}angular.module("DIApp",[]).controller("DIController",["$scope","$filter",n])}();
