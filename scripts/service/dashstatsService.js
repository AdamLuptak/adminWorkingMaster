adminGui.factory('dashstatsService', ['$http', function($http) {
  return $http.get('scripts/directives/dashboard/stats/stats.json')
         .success(function(data) {
           return data;
         })
         .error(function(data) {
           return data;
         });
}]);
