adminGui.controller('usersController', [ '$scope','usersService','taskService','$location','$stateParams','$state','$modal','userTaskService', function($scope,usersService,taskService,$location,$stateParams,$state,$modal,userTaskService) {
	
	//modal view
	$scope.showModal = function(user) {
		$scope.searchedUser = user;
		$scope.opts = {
			backdrop: true,
			backdropClick: true,
			dialogFade: false,
			keyboard: true,
			templateUrl : '/scripts/directives/usersTable/modalContent.html',
			controller : ModalInstanceCtrl,
        resolve: {} // empty storage
    };

    $scope.opts.resolve.item = function() {
            return angular.copy($scope.searchedUser); // pass name to Dialog
        }
        // $scope.opts.resolve.item2 = function() {
        //     return angular.copy($scope.searchedTask, $scope.userTasks); // pass name to Dialog
        // }
        // $scope.opts.resolve.item3 = function() {
        //     return angular.copy($scope.searchedTasks, $scope.tasks); // pass name to Dialog
        // }
        
        var modalInstance = $modal.open($scope.opts);

        modalInstance.result.then(function(){
            //on ok button press 
        },function(){
            //on cancel button press
            $state.go("dashboard.users", { userData: null});
            console.log("Modal Closed");
        });
    }
    //end of modal view


    $scope.close = function () {
    	$modalInstance.dismiss('cancel');
    };

    //Service

    usersService.success(function(data) {
    	$scope.users = data;
    });
    taskService.success(function(data) {
    	$scope.tasks = data;
    });

    userTaskService.success(function(data) {
    	$scope.userTasks = data;
    });

   //end of service


   $scope.showUserModal = function(user){
   	$scope.currUser = user;
   	angular.element('#userModal').modal('show');
   }


   $scope.showModalUni=function(modal,user){
   	$scope.currUser = (user != null) ? user : null;
   	angular.element(modal).modal('show');
   };

 //filter
 $scope.userFilter = function(userTask){
 	if($scope.currUser != null){
 		return userTask.userId === $scope.currUser.id;
 	} return;
 }

   //end filter


    //paramter loading from Search - bar
    $scope.qs = $stateParams.userData;
	//must clear statePatams
	//$scope.qs = ModalService.getData();


	if($scope.qs  != null){
		if($scope.qs.firstName != null && $scope.qs.surname != null){
			console.log($scope.qs);
			///setTimeout(function(){ $scope.showUserFromSearch(qs); }, 500);
			//$scope.showUserFromSearch(qs);
			$stateParams.userData = null;
			$scope.showModal($scope.qs);
			$scope.qs = null;
			
		}	
	}

	$scope.orderByField = 'id';
	$scope.reverseSort = false;
	$scope.orderBy = function(field) {
		if (field == $scope.orderByField) {
			$scope.reverseSort = !$scope.reverseSort;
		} else {
			$scope.reverseSort = false;
		}
		$scope.orderByField = field;
	}
	$scope.pokus = function(index){
		console.log($scope.users[index]);
	}
	

	
	$scope.selectedUsers = null;
	$scope.checkedAll=false;
	$scope.checkAll = function(){
		if($scope.checkedAll===false){
			$('.check').prop('checked', true);
			$scope.checkedAll=true;
		} else {
			$('.check').prop('checked', false);
			$scope.checkedAll=false;
		}
		
		
	}
	
	$scope.currId=10;
	$scope.createUser = function(){
		user = {
			firstName : $scope.firstName,
			surname : $scope.surname,
			id : $scope.currId++,
			organisation : $scope.organisation,
			assigned : 0,
			done : 0
		}
		$scope.users.push(user);
		$scope.firstName = '';
		$scope.surname= '';
		$scope.organisation ='';
	}
	
	$scope.tableHeads = [ {
		width : '15%',
		name : 'id',
		label : 'Id'
	}, {
		width : '20%',
		name : 'firstName',
		label : 'First Name'
	}, {
		width : '20%',
		name : 'surname',
		label : 'Surname'
	}, {
		width : '15%',
		name : 'organisation',
		label : 'Organisation'
	}, {
		width : '15%',
		name : 'assigned',
		label : 'Assigned tasks'
	}, {
		width : '15%',
		name : 'done',
		label : 'Tasks done'
	} ]
	
} ]);

var ModalInstanceCtrl = function($scope, $modalInstance, $modal, item,userTaskService,taskService) {

	taskService.success(function(data) {
		$scope.tasks = data;
	});

	userTaskService.success(function(data) {
		$scope.userTasks = data;
	});


	$scope.searchedUser = item;

	$scope.userFilter = function(userTask){
		if($scope.searchedUser != null){
			return userTask.userId === $scope.searchedUser.id;
		} return;
	}

	$scope.ok = function () {
		$scope.searchedUser = null;
		$modalInstance.close();
	};

	$scope.cancel = function () {
		$scope.searchedUser = null;
		$modalInstance.dismiss('cancel');
	};
}