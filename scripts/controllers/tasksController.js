//controler for Login
adminGui.controller('TasksController', ['$scope', 'taskService', 'usersService', '$modal', '$state', '$stateParams', '$http', function($scope, taskService, usersService, $modal, $state, $stateParams, $http) {

    taskService.success(function(data) {
        $scope.tasks = data;
    })

    usersService.success(function(data) {
        $scope.users = data;
    });

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
            //angular.element('#createTask').modal('hide');
    };
    $scope.assignTask = function(newTask) {
        $scope.newTask = newTask;
        //connect to server and register new task wait for response
        // if response will Ok 200 then show message box ok if not theanerror
        angular.element('#viewTask').modal('hide');
    }

    //I want delete this item in this list
    var checkTask = new Array();

    $scope.checkedTask = function(event, data, all) {
        if (!all) {
            if (event.check) {
                checkTask.push(data);
            } else {
                checkTask.splice(checkTask.indexOf(data), 1);
            }
        } else {
            if (event) {
                for (index in $scope.tasks) {
                    checkTask.push($scope.tasks[index].id);
                }
                $("#checkAll").change(function() {
                    $("input:checkbox").prop('checked', $(this).prop("checked"));
                });
            } else {
                for (index in $scope.tasks) {
                    checkTask.splice(checkTask.indexOf($scope.tasks[index].id), 1);
                }
            }
        }
    }

    $scope.delete = function() {
        for (idItem in checkTask) {
            //  checkTask.splice(checkTask.indexOf($scope.tasks[index].id), 1);
            for (index in $scope.tasks) {
                if ($scope.tasks[index].id === checkTask[idItem]) {
                    $scope.tasks.splice(index, 1);
                }
            }
        }
        checkTask = [];
        $scope.checkAll = false;
    }

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

$http.get("scripts/service/task.json")
                .then(function(response) {
                    console.log(response)
                    $scope.tasks = response.data;
                });


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
            $http.get("scripts/service/task.json")
                .then(function(response) {
                    console.log(response)
                    $scope.tasks = response.data;
                });

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
