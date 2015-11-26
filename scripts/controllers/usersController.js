adminGui.controller('usersController', [ '$scope', function($scope) {
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
	
	
	$scope.tableHeads = [ {
		width : '10%',
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
		width : '10%',
		name : 'organisation',
		label : 'Organisation'
	}, {
		width : '10%',
		name : 'assigned',
		label : 'Assigned tasks'
	}, {
		width : '10%',
		name : 'done',
		label : 'Tasks done'
	} ]
	$scope.users = [ {
		firstName : 'Vladislav',
		surname : 'Mino',
		id : 1,
		organisation : 'TSO AD',
		assigned : 1,
		done : 1
	}, {
		firstName : 'Jakub',
		surname : 'Mino',
		id : 2,
		organisation : 'TSO AD',
		assigned : 1,
		done : 1
	}, {
		firstName : 'Patrik',
		surname : 'Krivka',
		id : 3,
		organisation : 'TSO AD',
		assigned : 1,
		done : 1
	}, {
		firstName : 'Vladimir',
		surname : 'Filarsky',
		id : 4,
		organisation : 'TSO AD',
		assigned : 1,
		done : 1
	}, {
		firstName : 'Adam',
		surname : 'Luptak',
		id : 5,
		organisation : 'TSO AD',
		assigned : 1,
		done : 1
	}, {
		firstName : 'Tomas',
		surname : 'Mako',
		id : 6,
		organisation : 'TSO AD',
		assigned : 1,
		done : 1
	}, {
		firstName : 'Peter',
		surname : 'Petrovaj',
		id : 7,
		organisation : 'SDD',
		assigned : 30,
		done : 5
	}, {
		firstName : 'Matus',
		surname : 'Tomcak',
		id : 8,
		organisation : 'SDD',
		assigned : 20,
		done : 2
	}, {
		firstName : 'Pako',
		surname : 'Romano',
		id : 20,
		organisation : 'PR',
		assigned : 50,
		done : 5
	} ]

} ]);