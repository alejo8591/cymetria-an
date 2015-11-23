angular.module('spi', ['ngRoute'])

.config(['$routerProvider', function($routerProvider){

	$routerProvider

	.when('/hello', {
		templateUrl: 'otherwise.html'
	})

	.when('/message/one', {
		templateUrl: 'message-one.html'
	})

	.otherwise({
		redirectTo: '/',
		templateUrl: 'otherwise.html'
	});

}]);