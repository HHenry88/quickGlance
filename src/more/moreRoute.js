(function(){
  angular
  .module('app.more')
  .config(configFunction);

  configFunction.$inject = ["$routeProvider"];

    function configFunction($routeProvider){

    $routeProvider
    .when('/more/:more',{
      templateUrl: 'more/more.html',
      controller: 'moreController',
      controllerAs: 'article'
    });
  }
})();
