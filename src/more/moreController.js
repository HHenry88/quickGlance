angular
  .module('app.more')
  .controller('moreController', function($routeParams, $http){

    var vm = this;

    vm.selectedCategory = $routeParams.more;

    var URL = "https://api.nytimes.com/svc/topstories/v2/" + vm.selectedCategory + ".json?";
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


      /*vm.moreData = {
        "politics":"politics",
        "business":"business",
        "opinion":"opinion",
        "science":"science",
        "health":"health",
        "arts":"arts",
        "fashion":"fashion",
        "upshot":"upshot",
        "travel":"travel",
        "magazine":"magazine",
        "books":"books",
        "movies":"movies",
        "theater":"theater",
        "sundayreview":"sundayreview",
        "tmagazine":"tmagazine",
        "food":"food",
        "realestate": "realestate",
        "automobiles":"automobiles",
        "obituaries":"obituaries",
        "insider":"insider"
      };*/
  });
