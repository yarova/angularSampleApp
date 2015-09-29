app.controller('BookshelfController', ['$scope', 'books', function($scope, books) {
    books.success(function(data) {
        $scope.myBooks = data;
    });
}]);


/*
 In the controller BookshelfController, use the books service to load data from the server into the $scope.myBooks.
 Finish the template views/bookshelf.html so that it displays each book.
 Notice in views/bookshelf.html, we're using <a href="#/books/{{ $index }}"> to create a URL for each book.
 The $index gives the index of a book in the myBooks array. This means the URL of the first book is #/books/0,
 the URL of the second book is #/books/1, and so forth.
* */