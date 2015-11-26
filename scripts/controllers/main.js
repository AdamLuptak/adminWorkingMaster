'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description # MainCtrl Controller of the sbAdminApp
 */

angular.module('AdminGui')
.controller('MainCtrl', ['$scope','dashstatsService','dashtaskService', function($scope,dashstatsService,dashtaskService) {
	dashstatsService.success(function(data) {
	     $scope.divs = data; 
	   });
	dashtaskService.success(function(data) {
	     $scope.tasks = data; 
	   });
	$scope.sortType="time";
	$scope.sortReverse=true;
	$scope.searchTask="";
	$scope.numberOfTasks=5;
	$scope.selected=null;
	$scope.taskDetail=false;
	$scope.setSelected=function(index){
		if (index==$scope.selected){
			$scope.selected=null;
		} else {
			$scope.selected=index;
		}
	}
	$scope.deleteSelected=function(){
		$scope.selected=null;
	}
}]);