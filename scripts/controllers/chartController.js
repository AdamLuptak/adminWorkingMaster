'use strict';

angular.module('AdminGui')
.controller('ChartCtrl', ['$scope', '$interval','chartService','$log','$http', function ($scope,$interval,chartService,$log,$http) {

 //select data for chart from dataChart defualt = 0
//  $scope.chartSelector = 0;
//  //all data of JSON from service 
//  $scope.dataChart = 0;

//  $scope.page1 = "scripts/directives/chartDirective/lineChartPlot.html";

//  $scope.chartSelect="line";

//  $scope.actualDataSet = 0;

//  $scope.actualDataSetNumber = 0;

//  $scope.actualChartType = "line",

//  $scope.newTeamMember;

//  $scope.checkedCheckBoxes = [],

//  $scope.stop = $interval(callAtTimeout, 2000);

//  $scope.stopTimer = function(){
//  	if (angular.isDefined($scope.stop)) {
//  		$interval.cancel($scope.stop);
//  		$scope.stop = undefined;
//  	}
//  }

//  $scope.startTimer = function(){
//  	$scope.stop = $interval(callAtTimeout, 2000);
//  }

//  $scope.$on('$destroy', function() {
//           // Make sure that the interval is destroyed too
//           $scope.stopTimer();
//       });

//  function callAtTimeout () {

//  	if($scope.page1 === "scripts/directives/chartDirective/barChartPlot.html"){
//  		$scope.changeChart('bar');
//  	}
//  	else if($scope.page1 === "scripts/directives/chartDirective/lineChartPlot.html"){
//  		$scope.changeChart('line');
//  	}
//  }

//  $scope.changeChart= function(value){
//  	switch(value) {
//  		case 'line':
//  		$scope.page1 = "scripts/directives/chartDirective/barChartPlot.html";
//  		break;
//  		case 'bar':
//  		$scope.page1 = "scripts/directives/chartDirective/lineChartPlot.html";
//  		break;
//  		default:
//  		$scope.page1 = "scripts/directives/chartDirective/lineChartPlot.html";
//  	}
 	
//  }


//  $scope.getChartSelect = function(){
//  	return $scope.chartSelect;
//  }

// //load data from service factory
// var promise = chartService.getAllChartData();
// promise.then(
// 	function(data) {
// 		$scope.dataChart = data.data;
// 		$scope.actualDataSet = $scope.dataChart[$scope.actualDataSet];
// 		$scope.newTeamMember = angular.copy($scope.actualDataSet);
// 	});

// $scope.$watch('chartSelect', function(value) {
// 	$scope.chartSelect = value;
// 	$scope.changeChart(value);
// });

// $scope.chartType = function(){
// 	return $scope.dataChart[$scope.chartSelector];
// };


// $scope.zmena = function(text){
// 	$scope.chartSelect = "bar";
// }

// $scope.clearChart = function(){
// 	$scope.chartType().data.points[0];
// 	$scope.changeChart();
// };

// $scope.checkedBox = function(value){
// 	var isThere = false;
// 	for(var i =  -1; i < $scope.checkedCheckBoxes.length ; i++) {
// 		if($scope.checkedCheckBoxes[i] === value) {
// 			isThere = true;
// 		}
// 	}
// 	if(isThere){
// 		$scope.checkedCheckBoxes.splice($scope.checkedCheckBoxes.indexOf(value),1);

// 	}else{
// 		$scope.checkedCheckBoxes.push(value);
// 	}
//      //initial object with old values
//      $scope.actualDataSet = angular.copy($scope.newTeamMember);
//     //prida vsetko okrem toho co nieje v poli
//     for (var i = 0; i < $scope.checkedCheckBoxes.length; i++) {
//     	for (var i = 0; i < $scope.actualDataSet.data.length; i++) {
//     		for (var j = 0; j < $scope.actualDataSet.data[$scope.actualDataSetNumber].length; j++) {
//     			if($scope.actualDataSet.series.indexOf($scope.checkedCheckBoxes[i]) > -1){
//     				continue;
//     			}else{
//     				$scope.actualDataSet.data[i][j] = null;
//     			}
//     		};
//     	};
//     };
//     console.log($scope.checkedCheckBoxes)
//     $scope.changeChart($scope.chartSelect);
// }


}]);