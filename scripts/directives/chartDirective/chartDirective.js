angular.module('AdminGui')
.directive('chartDirective',['$http','chartService',function($http,chartService) {
	return {
		restrict: 'E',
		replace: true,
		templateUrl: 'scripts/directives/chartDirective/chartUniversalDirective.html',
		controller: function ($scope, $element) {

			//variable where is storred actual chart
			$scope.chartSelector = 0;
			//variable for all chart data
			$scope.dataChart = 0;
            //for checkbox 
            $scope.actualDataSetNumber = 0;

            $scope.actualDataSet = 0;

            $scope.chartSelect="line";

            $scope.page1 = "scripts/directives/chartDirective/lineChartPlot.html";

            $scope.checkedCheckBoxes = [];

            //after change value in combox change the type of chart
            $scope.$watch('chartSelect', function(value) {
            	$scope.chartSelect = value;
            	$scope.changeChart(value);
            });

            //switches diferent chart html 
            $scope.changeChart= function(value){
            	switch(value) {
            		case 'line':
            		$scope.page1 = "scripts/directives/chartDirective/barChartPlot.html";
            		break;
            		case 'bar':
            		$scope.page1 = "scripts/directives/chartDirective/lineChartPlot.html";
            		break;
            		default:
            		$scope.page1 = "scripts/directives/chartDirective/lineChartPlot.html";
            	}
            }

			//make promise for loading data from service
			var promise = chartService.getAllChartData();
			promise.then(
				function(data) {
					//all data
					$scope.dataChart = data.data;
					//selecet actual dataSet
					$scope.actualDataSet = $scope.dataChart[$scope.actualDataSet];
					$scope.actualDataSet.onClick = function (points, evt){
						console.log(points, evt);
					}
                    $scope.actualDataSet.onHover = function (points) {
      if (points.length > 0) {
        console.log('Point', points[0].value);
      } else {
        console.log('No point');
      }
    };


					//clone object for redrawing chart depence on checkboxess
					$scope.newTeamMember = angular.copy($scope.actualDataSet);
				});

			//depece of checked checbox schow value in chart
			$scope.checkedBox = function(value){
				var isThere = false;
				for(var i =  -1; i < $scope.checkedCheckBoxes.length ; i++) {
					if($scope.checkedCheckBoxes[i] === value) {
						isThere = true;
					}
				}
				if(isThere){
					$scope.checkedCheckBoxes.splice($scope.checkedCheckBoxes.indexOf(value),1);

				}else{
					$scope.checkedCheckBoxes.push(value);
				}
		     //initial object with old values
		     $scope.actualDataSet = angular.copy($scope.newTeamMember);
		    //prida vsetko okrem toho co nieje v poli
		    for (var i = 0; i < $scope.checkedCheckBoxes.length; i++) {
		    	for (var i = 0; i < $scope.actualDataSet.data.length; i++) {
		    		for (var j = 0; j < $scope.actualDataSet.data[$scope.actualDataSetNumber].length; j++) {
		    			if($scope.actualDataSet.series.indexOf($scope.checkedCheckBoxes[i]) > -1){
		    				continue;
		    			}else{
		    				$scope.actualDataSet.data[i][j] = null;
		    			}
		    		};
		    	};
		    };
		    console.log($scope.checkedCheckBoxes)
		    $scope.changeChart($scope.chartSelect);
		}


	}
}

$scope.isRightUndefined = function(item) {
  return item.data === undefined;
}

}]);
