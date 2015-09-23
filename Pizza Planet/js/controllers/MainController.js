app.controller('MainController', ['$scope', function($scope) {
  $scope.today = new Date();

  $scope.appetizers = [
    {
      name: 'Caprese',
      description: 'Mozzarella, tomatoes, basil, balsmaic glaze.',
      price: 4.95
    },
    {
      name: 'Mozzarella Sticks',
      description: 'Served with marinara sauce.',
      price: 3.95
    },
    {
      name: 'Bruschetta',
      description: 'Grilled bread garlic, tomatoes, olive oil.',
      price: 4.95
    }
  ];

  $scope.mains = [
    {
      name: 'Hawaiian',
      description: 'Pineapples, corn, ham, cheese.',
      price: 6.50
    },
    {
      name: 'Margarita',
      description: 'Mushrooms, chicken, cheese.',
      price: 5.00
    },

    {
      name: 'Vegetarian',
      description: 'Mozzarella, tomatoes, basil, greenery.',
      price: 4.95
    }
  ]

}]);