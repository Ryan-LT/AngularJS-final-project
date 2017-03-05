var app = angular.module('myApp');

app.controller('MainController', function(
            $scope, $interval, $location) {
              
  $scope.userName = "angular";
  $scope.countdown = 5;


  $scope.search = function(userName) {
    if (countdownInterval) {
      $interval.cancel(countdownInterval);
      $scope.countdown = null;
    }
    $location.path("/user/" + userName);
  };

  var decrementCountdown = function() {
    $scope.countdown -= 1;
    if ($scope.countdown < 1) {
      $scope.search($scope.userName);
    }
  }

  var countdownInterval = null;
  var startCountdown = function() {
    countdownInterval = $interval(decrementCountdown, 1000, $scope.countdown);
  };


  startCountdown();

});