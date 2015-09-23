app.factory('shows', ['$http', function($http) {

    return $http.get('https://s3.amazonaws.com/codecademy-content/courses/ltp4/shows-api/shows.json');

}]);