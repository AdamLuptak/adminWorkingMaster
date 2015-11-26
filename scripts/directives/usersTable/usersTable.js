'use strict';

/**
 * @ngdoc directive
 * @name usersTable
 * @description
 * # adminPosHeader
 */

angular.module('AdminGui').directive('usersTable', function() {
	return {
		templateUrl : 'scripts/directives/usersTable/usersTable.html',
		restrict : 'E',
		replace : true,
	}
});