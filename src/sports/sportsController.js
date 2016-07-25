angular
  .module('app.sports')
  .controller('sportsController', function($http){

    var vm = this;
    var URL = "https://api.nytimes.com/svc/topstories/v2/sports.json?";
    URL += $.param({'api-key': "062007a0859f4f02b18f05a254d86d3e"});

    var request = {
      method: 'GET',
      url: URL
    };

    $http(request)
      .then(function(response){
        vm.data = response.data;
        vm.results = response.data.results;
      }).
      catch(function(response){
        vm.data = response.data;
      });

      vm.activeArticle = {};
      vm.newActiveArticle = newActiveArticle;

      function newActiveArticle(index){
        vm.activeArticle = index;
        vm.long = parseInt(index.multimedia.length) - 1;
        vm.newLong = index.multimedia[vm.long].url;
        vm.newCaption = index.multimedia[vm.long].caption;
      }


  });
