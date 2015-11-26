'use strict';

adminGui.factory('chartService', function($http) {
	return{
		getAllChartData: function() {
			return $http.get('scripts/directives/testDataJSON/testDataChart.json');
		}
	}
});