(function () {
'use strict';

angular.module('BindingApp', [])
.controller('BindingController', BindingController);

BindingController.$inject = ['$scope'];
function BindingController($scope) {
  $scope.firstName = "Srikanth";
  //$scope.fullName = "";

  $scope.showNumberOfWatchers = function () {
    console.log("# of Watchers : ", $scope.$$watchersCount);
  };

  $scope.setFullName = function () {
    $scope.fullName = $scope.firstName + " " + "Yelam";
  };

  $scope.logFirstName = function () {
    console.log("FirstName : ", $scope.firstName);
  };

  $scope.logFullName = function () {
    console.log("FullName : ", $scope.fullName);
  };
}

})();
