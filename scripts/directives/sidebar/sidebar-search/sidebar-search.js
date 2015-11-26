'use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */

 angular.module('AdminGui')
 .directive('sidebarSearch', ['dashtaskService','usersService','taskService','$location', function(dashtaskService,usersService,taskService,$location) {
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

 $scope.searchClick = function(value){
  $scope.searched = "";
  
  if(value.firstName != null){
    $location.path( "/dashboard/users" ).search({user: value});;
  }else{
   $location.path( "/dashboard/tasks" ).search({task: value});;
 }

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
