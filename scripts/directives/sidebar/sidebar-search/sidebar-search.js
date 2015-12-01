'use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */

angular.module('AdminGui')
    .directive('sidebarSearch', ['dashtaskService', 'usersService', 'taskService', '$location', '$state', 'ModalService', function(dashtaskService, usersService, taskService, $location, $state, ModalService) {
        return {
            templateUrl: 'scripts/directives/sidebar/sidebar-search/sidebar-search.html',
            restrict: 'E',
            replace: true,
            scope: {},
            controller: function($scope, $q, $http) {
                $scope.selectedMenu = 'home';

                $scope.searchClick = function(value) {
                    $scope.searched = "";
                    $scope.user = value;
                    if (value.firstName != null) {
                        $state.go("dashboard.users", {
                            userData: $scope.user
                        });
                    } else {
                        $state.go("dashboard.tasks1", {
                            taskData: $scope.user
                        });
                    }
                }

                /*
                 * call for data async wait for promise
                 */
                var users = $http.get("scripts/service/users.json"),
                    tasks = $http.get("scripts/service/task.json")

                $q.all([users, tasks]).then(function(arrayOfResults) {
                    $scope.users = new Array();
                    $scope.tasks = new Array();
                    $scope.users = JSON.parse(JSON.stringify(arrayOfResults[0]));
                    $scope.tasks = JSON.parse(JSON.stringify(arrayOfResults[1]));
                    $scope.itemSearch = $scope.users.data.concat($scope.tasks.data);

                });

            }
        }
    }]);
