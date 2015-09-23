app.controller('MainController', ['$scope', 'bookService', function($scope, bookService){
	$scope.title = 'My new title';
  	$scope.promo = "My promo string";
  	$scope.products = bookService.getBooks();

	$scope.plusOne = function(index){
		$scope.products[index].likes +=1;
	};
	$scope.minusOne = function(index){
		$scope.products[index].dislikes -=1;
	};
}]);