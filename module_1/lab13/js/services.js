angular.module('MathService', [])

.service('MathOperations', function(){

	this.add = function(a,b){

		return a + b;
	};

	this.subtract = function(a,b){

		return a - b;
	};

	this.multiply = function(a, b){

		return a * b;
	};

	this.divide = function(a, b){

		if (b !== 0) {
			
			return a / b;
		
		} else {

			return 0;
		}
	};
});