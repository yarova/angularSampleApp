var app = angular.module('SchollApp', ['ngRoute']);


app.config(function ($routeProvider) {
    $routeProvider
        .when('/classes', {
            controller: 'ClassesCtrl',
            templateUrl: 'views/classes.html'
        })

        .when('/teachers', {
            controller: 'TeachersCtrl',
            templateUrl: 'views/teachers.html'
        })

        .otherwise({
            redirectTo: '/'
        });
});