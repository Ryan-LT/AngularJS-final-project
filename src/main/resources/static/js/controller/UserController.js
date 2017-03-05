var app = angular.module('myApp');

app.controller('UserController', function(
            $scope, githubService, $routeParams) {
              
  $scope.userName = $routeParams.username;
  $scope.repoSortOrder = "-stargazers_count";
  
  var onUserComplete = function(data) {
    $scope.user = data;
    githubService.getRepos($scope.user).then(onRepos, onError);
  };

  var onRepos = function(data) {
    $scope.repos = data;
  };

  var onError = function(reason) {
    $scope.error = "Could not fetch the data";
  };

  githubService.getUser($scope.userName).then(onUserComplete, onError);


});