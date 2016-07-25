(function(){
  angular
    .module('app.tech')
    .config(configFunction);

    configFunction.$inject = ["$routeProvider"];

      function configFunction($routeProvider){

      $routeProvider
        .when('/technology',{
          templateUrl: 'technology/tech.html',
          controller: 'techController',
          controllerAs: 'article'
        });
      }
})();
