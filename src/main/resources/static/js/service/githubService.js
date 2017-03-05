var app = angular.module('myApp');

app.factory('githubService', function($http) {

  var getUser = function(userName) {
    return $http.get("https://api.github.com/users/" + userName)
      .then(function(response) {
        return response.data;
      });
  };

  var getRepos = function(user) {
    return $http.get(user.repos_url)
      .then(function(response) {
        return response.data
      });
  };

  var getRepoDetails = function(username, reponame) {
    var repo;
    var repoUrl = "https://api.github.com/repos/" + username + "/" + reponame;
    return $http.get(repoUrl)
      .then(function(response){
        repo = response.data;
        return $http.get(repoUrl + "/contributors")
      })
      .then(function(response) {
        repo.contributors = response.data;
        return repo;
      })
  };

  return {
    getUser: getUser,
    getRepos: getRepos,
    getRepoDetails: getRepoDetails
  }
});