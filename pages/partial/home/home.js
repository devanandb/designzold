angular.module('pages').controller('HomeCtrl',function($scope, $location){

	$scope.goToStore = function() {
		$location.path('/store');
	}
});