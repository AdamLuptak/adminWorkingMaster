adminGui.factory('userTaskService', ['$http', function($http) {
  return $http.get('scripts/service/userTask.json')
         .success(function(data) {
           return data;
         })
         .error(function(data) {
           return data;
         });
}]);