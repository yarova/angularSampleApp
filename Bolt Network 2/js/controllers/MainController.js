app.controller('MainController', ['$scope', function($scope) {
  		$scope.sherlock = {
  			series: "Sherlock",
  			series_img: "img/sherlock.jpg",
  			genre: "Crime drama",
  			season: 3,
  			episode: "The Empty Hearse",
  			description: "Two years after his reported Reichenbach Fall demise, Sherlock, who has been cleared of all" +
			"fraud charges against him, returns with Mycroft's help to a London under threat of terrorist attack. John" +
			"has moved on and has a girlfriend, Mary Morstan. Sherlock enlists Molly to assist him, but when John is" +
			"kidnapped by unknown assailants and is rescued by Sherlock and Mary, John returns to help find the terrorists" +
			"and an underground plot to blow up the Houses of Parliament during an all night sitting on Guy Fawkes Night.",
  			datetime: new Date(2014, 11, 31, 21, 00, 00, 00)
	},
		$scope.friends = {
			series: "Friends",
			series_img: "img/friends.jpg",
			genre: "Sitcom",
			season: 1,
			episode: "The Pilot",
			description: "Friends is an American television sitcom, created by David Crane and Marta Kauffman, which" +
			"originally aired on NBC from September 22, 1994, to May 6, 2004. It lasted ten seasons and is now in" +
			"syndication. It revolves around a circle of friends living in Manhattan. The series was produced by" +
			"Bright/Kauffman/Crane Productions, in association with Warner Bros. Television. The original executive" +
			"producers were Kevin S. Bright, Marta Kauffman, and David Crane.",
			datetime: new Date(2015, 0, 01, 17, 00, 00, 00)
		}
  
}]);