var app = angular.module('myApp');

var RepoController = function($scope, $routeParams, githubService) {
  
  var username = $routeParams.username;
  var reponame = $routeParams.reponame;
  
  var onRepo = function(data) {
    $scope.repo = data;
  }
  
  var onError = function(reason) {
    $scope.error = reason;
  }
  
  githubService.getRepoDetails(username, reponame)
    .then(onRepo, onError);
}

app.controller("RepoController", RepoController)