'use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */

 angular.module('AdminGui')
 .directive('sidebarSearch', ['dashtaskService','usersService','taskService','$location','$state','ModalService', function(dashtaskService,usersService,taskService,$location,$state,ModalService) {
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
  $scope.user = value;
  if(value.firstName != null){
    ModalService.setData($scope.user);
    $state.go("dashboard.users", { userData: $scope.user});
    
  }else{

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
