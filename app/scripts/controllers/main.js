'use strict';

angular.module('iGemPlates2015App')
  .controller('MainCtrl', function ($scope, $http) {
    $http.get('https://api.hearthstonejson.com/v1/latest/enUS/cards.collectible.json').success( function(data, status, headers, config) {
        console.log(data)
        $scope.cards = data;
    });
  });

angular.module('iGemPlates2015App').filter('unsafe', function($sce) {
    return function(val) {
        return $sce.trustAsHtml(val);
    };
});
