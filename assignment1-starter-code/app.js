(function() {
	'use strict';

	angular.module('LunchCheck', []).controller('LunchCheckController',
			LunchCheckController);

	LunchCheckController.$inject = [ '$scope' ];
	function LunchCheckController($scope) {

		$scope.check = function() {
			if (!$scope.lunchItems) {
				$scope.message = 'Please enter data first';
			} else {
				$scope.lunchItems = $scope.lunchItems.split(',');
				var items = [];
				/*
				 * you do NOT consider an empty item, i.e., , , as an item towards to
				 * the count,
				 */
				for(var i = 0; i < $scope.lunchItems.length; i++){
					if($scope.lunchItems[i])items.push($scope.lunchItems[i]);
				}
				$scope.lunchItems = items;
				if($scope.lunchItems.length === 0){
					$scope.message = 'Please enter data first';
					return;
				}
				if ($scope.lunchItems.length <= 3) {
					$scope.message = 'Enjoy!';
				} else {
					$scope.message = 'Too much!!';
				}
			}
			$scope.lunchItems = undefined;
		};



	}

})();
