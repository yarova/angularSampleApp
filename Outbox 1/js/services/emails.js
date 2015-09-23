app.factory('emailSvc', ['$http', function($http) {

    return $http.get('https://s3.amazonaws.com/codecademy-content/courses/ltp4/emails-api/emails.json');

}]);