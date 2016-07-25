(function(){
angular
  .module('app.sports')
  .config(configFunction);

  configFunction.$inject = ["$routeProvider"];

    function configFunction($routeProvider){

    $routeProvider
    .when('/sports', {
      templateUrl :'sports/sports.html',
      controller: 'sportsController',
      controllerAs: 'article'
    });
  }
  })();
