
(function(){
	var app = angular.module('calculator',[]);
	app.controller('CalculatorController',['$scope', function($scope){
		$scope.year_options = [2015, 2014, 2013, 2012, 2015];
		$scope.current_year = 2015;

		$scope.milage_options = [1000, 3000, 4000, 5000, 6000];
		$scope.current_milage = 3000;

		$scope.current_rate = 3;

		$scope.CBR1000_conversion = 7500;
		$scope.CBR600_conversion = 7400;
		$scope.CBR500_conversion = 7300;
		$scope.CBR300_conversion = 7200;

		$scope.calculate = function() {
			$scope.CBR1000_estimate = ($scope.CBR1000_conversion * $scope.current_rate - $scope.current_milage);
			$scope.CBR600_estimate = ($scope.CBR600_conversion * $scope.current_rate - $scope.current_milage);
			$scope.CBR500_estimate = ($scope.CBR500_conversion * $scope.current_rate - $scope.current_milage);
			$scope.CBR300_estimate = ($scope.CBR300_conversion * $scope.current_rate - $scope.current_milage);

			if($scope.current_rate > 3) {
				$scope.current_rate = 3;
			}
		}
		$scope.calculate();

	}]);
})();


