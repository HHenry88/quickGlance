angular
  .module('myApp')
  .config(['$routeProvider', function($routeProvider){

    //$locationProvider.html5Mode(true);

    $routeProvider
      .when('/', {
        templateUrl: 'main/mainpage.html'

      });
  }]);
