app.controller('MainController', ['$scope', 'places', function($scope, places) {

    $scope.mapCenter = {
        lat: 40.741934,
        lng: -74.004897,
        zoom: 17
    };

    places.success(function(data){
        $scope.geodata = data;
        $scope.mapMarkers = geodataToMarkers($scope.geodata);
    });

}]);



/*
 Use thegeodataToMarkers() function to format $scope.geodata, and store that output into $scope.mapMarkers, like this:
 $scope.mapMarkers = geodataToMarkers($scope.geodata);
 */