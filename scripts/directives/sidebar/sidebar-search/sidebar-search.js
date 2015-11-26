'use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */

 angular.module('AdminGui')
 .directive('sidebarSearch', ['dashtaskService','usersService','taskService', function(dashtaskService,usersService,taskService) {
  return {
    templateUrl:'scripts/directives/sidebar/sidebar-search/sidebar-search.html',
    restrict: 'E',
    replace: true,
    scope: {
    },
    controller:function($scope){
      $scope.selectedMenu = 'home';
      $scope.selectedState = "";
     //  dashtaskService.success(function(data) {
     //   $scope.items = data; 
     // })

 $scope.searchClick = function(){
  console.log("sdfs");
 }


 usersService.success(function(data){
 // console.log(data);
  $scope.users = data;
  


  taskService.success(function(data){
    //console.log(data);
    $scope.tasks = data;
    $scope.itemSearch = $scope.users.concat($scope.tasks);
    console.log( $scope.itemSearch);
  })

     

})




}
}
}]);
