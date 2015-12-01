'use strict';

/**
 * @ngdoc directive
 * @name usersTable
 * @description
 * # adminPosHeader
 */

angular.module('AdminGui').directive('tasksTable', function() {
	return {
		templateUrl : 'scripts/directives/tasksTable/tasksTable.html',
		restrict : 'E',
		replace : true,
	}
});