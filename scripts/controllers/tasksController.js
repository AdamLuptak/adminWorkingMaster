//controler for Login
adminGui.controller('TasksController', [ '$scope','taskService', function($scope,taskService) {
	
	taskService.success(function(data){
		$scope.tasks = data;
	})
	$scope.orderByField = 'name';
	$scope.reverseSort = false;
	$scope.orderBy = function(field) {
		if (field == $scope.orderByField) {
			$scope.reverseSort = !$scope.reverseSort;
		} else {
			$scope.reverseSort = false;
		}
		$scope.orderByField = field;
	};
	$scope.selectedDesc=null;
	$scope.selectedTask=2;
	$scope.select=function(task){
		$scope.selectedTask=task;
		$scope.selectedDesc=null;
	};
	$scope.selectTask =  function(index){$scope.selectedTask = index};
	$scope.newTask={
			"id": 1,
			"name": "",
			"description": "",			   	                				  
			"details":	[]
			};
	$scope.addTask = function(newTask){
		
		$scope.tasks.push(newTask);
		
		$scope.newTask={
				"id": 1,
				"name": "",
				"description": "",			   	                				  
				"details":	[]
				};
		
		$scope.newTask = null;};
} ]);