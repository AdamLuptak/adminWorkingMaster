adminGui.factory('dashtaskService', ['$http', function($http) {
  return $http.get('scripts/directives/dashboard/tasks/tasks.json')
         .success(function(data) {
           return data;
         })
         .error(function(data) {
           return data;
         });
}]);
