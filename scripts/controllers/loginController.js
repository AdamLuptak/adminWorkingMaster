//controler for Login
adminGui.controller('LoginController',['$scope','loginService','$location','authService',function($scope,loginService,$location,authService) {
	
	$scope.validation = false;
	signupData = null;
	$scope.signupForm = function(signupData){
		if(typeof signupData !== 'undefined'){
			if(signupData.password != null ){
				if(loginService.validate(signupData)){
					authService.setLogState(true);
					$location.path( "/dashboard/home" );
				}else{
					$scope.validation = true;
					console.log($scope.validation );
				}
			}
		}else
		$scope.validation = true;
	};

	$scope.getValidation= function(){
		return $scope.validation;
	}

}]);