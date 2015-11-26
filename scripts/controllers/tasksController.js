//controler for Login
adminGui.controller('TasksController', [ '$scope', function($scope) {

	$scope.tasks = [ {
		id : 1,
		name : 'Creation of an organizational unit ',
		description : 'Execute the transaction ‘Organizational and Staffing Change’ and create an organizational unit which reports to the organizational unit ‘T-systems Slovakia_Testing (ID 50006127). That means T-systems Slovakia_Testing (ID 50006127) should be the line supervisor of the new created organizational unit.',
	}, {
		id : 2,
		name : 'Creation of a position',
		description : 'Create a position ‘TesterX’ for the new created organizational unit ‘T-systems Slovakia_TestingX with:',
	}, {
		id : 3,
		name : 'Change position data (Reassign a position to another organization unit)',
		description : 'Assign the created ‘Tester X’ position to ‘Development’  organization unit. Execute the transaction in ‘Expert mode’ – ‘Position’.',
	}, {
		id : 4,
		name : 'Copying positions',
		description : 'Mark the new created position ‘TesterX’ and copy it to ‘Market TesterCHX’. Assign the copied position ‘TesterCH X’ position to ‘Development’ (ID 50006127) organization unit. Execute the transaction in ‘Expert mode’ – ‘Position’. ',
	} ];
	
	$scope.selectedDesc=null;
	$scope.selectedTask=null;
	$scope.select=function(task){
		$scope.selectedTask=task;
		$scope.selectedDesc=null;
	};
	
} ]);