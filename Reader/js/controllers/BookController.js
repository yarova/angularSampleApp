app.controller('BookController', ['$scope', 'books', '$routeParams', function($scope, books, $routeParams) {
  // Your code here
  books.success(function(data) {
    $scope.book = data[$routeParams.bookId];
  });
  

  // Using this property to create the URL in line 9 of views/book.html
  $scope.currentBookIndex = parseInt($routeParams.bookId);
  
}]);


/*

 In BookController, use the books service to load a single book into the $scope.book property.
 To do this, use the books service to fetch an array of books from the server, and then use $routeParams.bookId
 to access the specific book by its index. Store the specific book into $scope.book.

*/