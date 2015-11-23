angular.module('AngularJS_AJAX', [])

.controller('studentController', function($scope, $http){
	var _url = 'data.json';

	$http.get(_url).success(function(response){

		console.log(response);

		$scope.students = response;
	});
});