adminGui.factory('testService', ['$http', function($http) {
  return $http.get('scripts/service/data.json')
         .success(function(data) {
           return data;
         })
         .error(function(data) {
           return data;
         });
}]);