'use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */
angular.module('AdminGui')
    .directive('headerNotification', function(loginService, authService) {
        return {
            templateUrl: 'scripts/directives/header/header-notification/header-notification.html',
            restrict: 'E',
            replace: true,
            link: function($scope, $q, $http) {

                $scope.logOut = function() {
                    authService.setLogState(false);
                    console.log("log out ")
                }
            }
        }

    });
