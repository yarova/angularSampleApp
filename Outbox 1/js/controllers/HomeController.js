app.controller('HomeController', ['$scope', 'emailSvc', function($scope, emailSvc) {
    emailSvc.success(function(data){
        $scope.emails = data;
    });
}]);