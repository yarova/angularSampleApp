app.controller('MainController', ['$scope', function($scope){
	$scope.title = 'My new title';
  	$scope.promo = "My promo string";
  	$scope.products = [
		{
			name: 'The Book of Trees',
			price: 19,
			pubdate: new Date('2014', '03', '08'),
			cover: 'img/programm-or-to-be-programmed.jpg',
			likes: 0
		},
		{
			name: 'Program or be Programmed',
			price: 8,
			pubdate: new Date('2013', '08', '01'),
			cover: 'img/the-book-of-trees.jpg',
			likes: 0
		},
		{
			name: 'The Little Prince',
			price: 15,
			pubdate: new Date('2014', '08', '01'),
			cover: 'img/the-little-prince.jpg',
			likes: 0
		},
		{
			name: 'French Bulldogs',
			price: 25,
			pubdate: new Date('2015', '08', '10'),
			cover: 'img/french-bulldogs.jpg',
			likes: 0
		}
	];
	$scope.plusOne = function(index){
		$scope.products[index].likes +=1;
	};
}]);