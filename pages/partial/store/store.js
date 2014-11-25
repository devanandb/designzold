angular.module('pages').controller('StoreCtrl',function($scope, $rootScope){

	

	window.scope = $scope;

	$scope.store = $rootScope.gifts;

});