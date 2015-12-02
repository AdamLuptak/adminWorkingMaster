//controler for Login
adminGui.controller('TasksController', ['$scope', 'taskService', '$modal', '$state', '$stateParams', function($scope, taskService, $modal, $state, $stateParams) {

    taskService.success(function(data) {
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
    $scope.selectedDesc = null;
    $scope.selectedTask = 2;
    $scope.select = function(task) {
        $scope.selectedTask = task;
        $scope.selectedDesc = null;
    };
    $scope.selectTask = function(index) {
        $scope.selectedTask = index
       //  angular.element('#createTask').modal('hide');
    };
    $scope.newTask = {
        "id": 1,
        "name": "",
        "description": "",
        "details": []
    };
    $scope.addTask = function(newTask) {
        $scope.tasks.push(newTask);
        $scope.newTask = {
            "id": 1,
            "name": "",
            "description": "",
            "details": []
        };
        $scope.newTask = null;
        angular.element('#createTask').modal('hide');

    };

    //modal view
    $scope.showModal = function(user) {
            $scope.searchedUser = user;
            $scope.opts = {
                backdrop: true,
                backdropClick: true,
                dialogFade: false,
                keyboard: true,
                templateUrl: '/scripts/directives/tasksTable/taskModal.html',
                controller: ModalInstanceCtrl,
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

            modalInstance.result.then(function() {
                //on ok button press 
            }, function() {
                //on cancel button press
                $state.go("dashboard.tasks1", {
                    taskData: null
                });
                console.log("Modal Closed");
            });
        }
        //end of modal view


    //paramter loading from Search - bar
    $scope.qs = $stateParams.taskData;
    //must clear statePatams
    /*
     *open modal with user data from search bar
     */
    if ($scope.qs != null) {
        if ($scope.qs.name != null && $scope.qs.id != null) {
            console.log($scope.qs);
            ///setTimeout(function(){ $scope.showUserFromSearch(qs); }, 500);
            //$scope.showUserFromSearch(qs);
            $stateParams.userData = null;
            $scope.showModal($scope.qs);
            $scope.qs = null;

        }
    }


}]);

var ModalInstanceCtrl = function($scope, $modalInstance, $modal, item) {


    $scope.selectedTask = item;

    $scope.userFilter = function(userTask) {
        if ($scope.searchedUser != null) {
            return userTask.userId === $scope.searchedUser.id;
        }
        return;
    }

    $scope.ok = function() {
        $scope.searchedUser = null;
        $modalInstance.close();
    };

    $scope.cancel = function() {
        $scope.searchedUser = null;
        $modalInstance.dismiss('cancel');
    };
}
