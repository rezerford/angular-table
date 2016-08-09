(function () {
	var scrumApp = angular.module('scrumApp', ['arrayFilters', 'ui.bootstrap']);

	scrumApp.controller('TaskListCtrl', ['$scope', '$http', '$filter', function ($scope, $http, $filter) {
	  $http.get('data/tasks.json').success(function(data) {
	      $scope.currentPage = 1;
		  $scope.pageSize = 5;
		  $scope.backlog = data;
	  });

	  $scope.sortField = 'name';
	  $scope.reverse = false;
	  
	  $scope.sort = function(fieldName){
	  	if($scope.sortField === fieldName){
	  		$scope.reverse = !$scope.reverse;
	  	} else {
	  		$scope.sortField = fieldName;
	  		$scope.reverse = false;
	  	}
	  };

	  $scope.isSortUp = function(fieldName){
	  	return $scope.sortField === fieldName && !$scope.reverse;
	  };

	  $scope.isSortDown = function(fieldName){
	  	return $scope.sortField === fieldName && $scope.reverse;
	  };

	}]);
}());