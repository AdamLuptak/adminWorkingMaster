adminGui.factory('taskService', ['$http', function($http) {
    return $http.get('scripts/service/task.json')
        .success(function(data) {
            return data;
        })
        .error(function(data) {
            return data;
        });

}]);


adminGui.factory('taskServiceGET', function($http) {
    return {
        getAllChartData: function() {
            return $http.get('scripts/service/task.json');
        }
    }
});
