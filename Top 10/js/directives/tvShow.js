app.directive('tvShow', function() {
    return {
        scope: {
            info: '=info'
        },
        templateUrl: 'js/directives/tvShow.html'
    };
});