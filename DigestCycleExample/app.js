(function () {
'use strict';

angular.module('CounterApp', [])
.controller('CounterController', CounterController);

CounterController.$inject = ['$scope'];

function CounterController($scope) {
  $scope.onceCounter = 0;
  $scope.Counter = 0;
  $scope.name = "Srikanth";
  $scope.TimeoutCounter = 0;

  $scope.showNumberOfWatchers = function () {
    console.log("# of Watchers: ", $scope.$$watchersCount);
  };

  $scope.countOnce = function () {
    $scope.onceCounter = 1;
  };

  $scope.upCounter = function () {
    $scope.Counter++;
  };

  $scope.timeoutCounter = function () {
    setTimeout(function () {
      $scope.TimeoutCounter++;
      console.log('Counter Incremented!');
      $scope.$digest();
    }, 2000);
  };

  $scope.$watch(function () {
    console.log("Digest loop fired!");
  })

  // $scope.$watch('onceCounter', function (newValue, oldValue) {
  //   console.log('onceCounter old Value : ', oldValue);
  //   console.log('onceCounter new Value : ', newValue);
  // });
  //
  // $scope.$watch('Counter', function (newValue, oldValue) {
  //   console.log('Counter old Value : ', oldValue);
  //   console.log('Counter new Value : ', newValue);
  // });

}

})();
