'use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */
angular.module('AdminGui')
	.directive('tasks',function(){
		return {
        templateUrl:'scripts/directives/dashboard/tasks/tasks.html',
        restrict: 'E',
        replace: true,
/*        scope: {
        'tasks': '=',
        'sortType': '=',
        'sortReverse': '=',
        'searchTask': '=',
        'numberOfTasks': '=',
        'taskDetail': '=',
            'href': '@',
            'icon': '@',
            'text': '@',
            'time': '@',
      		}*/
    	}
	});


