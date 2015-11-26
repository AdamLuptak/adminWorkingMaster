adminGui.controller('usersController', [ '$scope','usersService','taskService','$location', function($scope,usersService,taskService,$location) {
	
	usersService.success(function(data) {
		$scope.users = data;
	});
	taskService.success(function(data) {
		$scope.tasks = data;
		$scope.datas = $scope.users.concat($scope.tasks);
	});

	$scope.showUserModal = function(user){
		$scope.qsCurrUser = user;
		
		$('#userModal').modal('show');
	}

	var qs = $location.search();
	
	if(qs.user != null && qs.user.firstName != null){
        console.log(qs.user);
		 setTimeout(function(){ $scope.showUserModal(qs.user); }, 500);
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
	

	
	$scope.showCreateModal = function(){
		$('#createUserModal').modal('show');
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
	
	
	
/*	$scope.checked = [
	                  {id: 5},
	                  ]
	
	$scope.check = function(id){
		$scope.checked.push({id: id});
	}
	
	$scope.deleteChecked = function(){
		
	}*/
	
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