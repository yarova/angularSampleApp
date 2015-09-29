var app = angular.module("NearMeApp", [
    "ngRoute",
    "leaflet-directive"
]);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            controller: 'MainController',
            templateUrl: 'views/main.html'
        })
        .when('/about', {
            controller: 'AboutController',
            templateUrl: 'views/about.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});

/*
 Map the URL / to the controller MainController and the template views/main.html.
 Otherwise, redirect to /

 Map the URL /about to the controller AboutController and the template views/about.html.
 */