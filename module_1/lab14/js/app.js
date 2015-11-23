angular.module('lab14', ['ngRoute', 'lab14Controller', 'ContactPeopleService'])

.config(function($routeProvider){

	$routeProvider

	.when('/', {
		templateUrl: 'views/otherwise.html',
		controller: 'ContactPeopleController'
	})

	.otherwise({
		redirectTo: '/'
	});
});