adminGui.factory('usersService', ['$http', function($http) {
  return $http.get('scripts/service/users.json')
         .success(function(data) {
           return data;
         })
         .error(function(data) {
           return data;
         });
}]);



adminGui.factory('usersServiceGET', function($http) {
	return{
		getAllChartData: function() {
			return $http.get('scripts/service/users.json');
		}
	}
});