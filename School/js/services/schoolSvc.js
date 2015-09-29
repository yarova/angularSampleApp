app.factory('schoolsvc', [function() {

    var classes = [
        { name: '4B', count: 15, speciality: 'Chemical' },
        { name: '9A', count: 10, speciality: 'Technical' }
    ];

    return {
        getClasses: function(){
            return classes;
        },
        getDirectorName: function(){
            return '???? ??????????';
        }
    };

}]);