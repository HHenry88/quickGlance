(function(){
  angular
    .module('app.worldnews')
    .config(configFunction);

    configFunction.$inject = ["$routeProvider"];

      function configFunction($routeProvider){

      $routeProvider
        .when('/worldnews',{
          templateUrl: 'worldnews/worldnews.html',
          controller: 'worldnewsController',
          controllerAs: 'article'
        });
      }
})();
