(function () {
  'use strict';

  angular.module('CounterApp', [])
  .controller('CounterController', CounterController);

  CounterController.$inject = ['$scope', '$timeout'];

  function CounterController($scope, $timeout) {
    $scope.TimeoutCounter = 0;

    $scope.timeoutCounter = function () {
      $timeout(function () {
        $scope.TimeoutCounter++;
        console.log('Counter Incremented!');
      }, 2000);
    };

    // $scope.timeoutCounter = function () {
    //   setTimeout(function () {
    //     $scope.$apply(function () {
    //       $scope.TimeoutCounter++;
    //       console.log('Counter Incremented!');
    //     });
    //   }, 2000);
    // };

    // $scope.timeoutCounter = function () {
    //   setTimeout(function () {
    //     $scope.TimeoutCounter++;
    //     console.log('Counter Incremented!');
    //     $scope.$digest();
    //   }, 2000);
    // };

    // $scope.timeoutCounter = function () {
    //   setTimeout(function () {
    //     $scope.TimeoutCounter++;
    //     console.log('Counter Incremented!');
    //   }, 2000);
    // };

  }
})();
