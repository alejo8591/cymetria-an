angular.module('lab14Controller', ['ContactPeopleService'])

.controller('ContactPeopleController', function($scope, Contact){

	$scope.people = Contact.list();

	$scope.saveContactPerson = function(){

		Contact.save($scope.new_contact);

		$scope.new_contact = {};
	};

	$scope.delete = function(_id){

		Contact.delete(_id);

		if ($scope.new_contact.id == _id) $scope.new_contact = {};
	};

	$scope.edit = function(_id){

		$scope.new_contact = angular.copy(Contact.get(_id));
	};
});