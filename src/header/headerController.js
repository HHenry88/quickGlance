angular
  .module('myApp')
  .controller('headerController', function(){

    var vm = this;


    function moreItemSelected(index){
      vm.selectedMore = index;
    }

    vm.moreData = {
      "politics":"politics",
      "business":"business",
      "opinion":"opinion",
      "science":"science",
      "health":"health",
      "arts":"arts",
      "fashion":"fashion",
      "dining":"dining",
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
    };

  });
