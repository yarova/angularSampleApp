app.controller('ChapterController', ['$scope', 'books', '$routeParams', function($scope, books, $routeParams) {
  books.success(function(data) {
    // Your code here

    var currentBook = data[$routeParams.bookId];
    $scope.chapter = currentBook.chapters[$routeParams.chapterId];

    $scope.currentBook = currentBook;


    // If there no more chapters left, go back to the bookshelf view
    if($routeParams.chapterId >= $scope.book.chapters.length - 1) {
      $scope.nextChapterIndex = "#";
    }
  });

  // Using these properties to create the URLs in line 1 and line 11 of view/chapter.html
  $scope.currentBookIndex = parseInt($routeParams.bookId);
  $scope.currentChapterIndex = parseInt($routeParams.chapterId);
  $scope.nextChapterIndex = $scope.currentChapterIndex + 1;
}]);



/*
 In ChapterController, use the books service to load a single chapter into the $scope.chapter property.
 To do this, in line 4 first get a specific book from the books API by using its index, just as you did in BookController.
 Store the specific book into $scope.book.
*/