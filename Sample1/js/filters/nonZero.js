app.filter('nonZero', function() {
    return function(value) {
        return value > 0 ? value : ' ';
    };
});