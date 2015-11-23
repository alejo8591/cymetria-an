angular.module('lab13Controllers', ['MathService'])

.controller('ControllerAdd', function($scope, MathOperations){

	$scope.CalcAdd = function(){

		$scope.result = MathOperations.add($scope.a, $scope.b);
	};

})

.controller('ControllerSubtract', function($scope, MathOperations){

	$scope.CalcSubtract = function(){

		$scope.result = MathOperations.subtract($scope.a, $scope.b);
	};
})

.controller('ControllerMultiply', function($scope, MathOperations){

	$scope.CalcMultiply = function(){

		$scope.result = MathOperations.multiply($scope.a, $scope.b);
	};

})

.controller('ControllerDivide', function($scope, MathOperations){

	$scope.CalcDivide = function(){

			$scope.result = MathOperations.divide($scope.a, $scope.b);
		};

});