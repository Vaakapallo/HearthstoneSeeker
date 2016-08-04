'use strict';

angular.module('HearthstoneSeekerApp')
  .controller('MainCtrl', function ($scope, $http) {
    $http.get('https://api.hearthstonejson.com/v1/latest/enUS/cards.collectible.json').success( function(data, status, headers, config) {
        console.log(data)
        $scope.cards = data;
    });
    $scope.calculateAverage = function(cards, type, value) { 
		var sum = 0; 
		if(cards == undefined || value == undefined){
			return 0;
		}
		for(var i = 0; i < cards.length; i++){
			if(type == undefined){
				if(cards[i].type != 'HERO'){
					sum += parseInt(getValue(cards[i], value)); //don't forget to add the base }
				}				
			} else {
				if(cards[i].type == (type)){
					sum += parseInt(getValue(cards[i], value)); //don't forget to add the base }	
				}
			}
		}
		return sum/cards.length; 
	};
  });

  function getValue (object, value){
  	if(value == "cost"){
  		return object.cost;
  	} else if(value == "attack"){
  		return object.attack;
  	} else if(value == "health"){
  		return object.health;
  	}
  	return 0;
  }

angular.module('HearthstoneSeekerApp').filter('unsafe', function($sce) {
    return function(val) {
        return $sce.trustAsHtml(val);
    };
});
