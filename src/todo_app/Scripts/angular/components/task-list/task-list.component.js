'use strict';
angular
    .module('taskApp')
    .component('taskList', {
        templateUrl: 'Template/Tasks',
        controller: TaskListController,
        controllerAs: 'model'
    });

var taskArr;

TaskListController.$inject = ['$http', '$uibModal'];

function TaskListController($http, $uibModal) {
    var model = this;
    model.loading = true;
    
    model.$onInit = function () {
        model.openTaskModal = openTaskModal;
    }

    function openTaskModal(id) {
        $uibModal.open({
            templateUrl: 'updateTaskModal.html',
            controller: ['$uibModalInstance', function ($uibModalInstance) {
                var modal = this;


                modal.$onInit = function () {
                    modal.task;
                }

                modal.edit = function () {
                    $http({

                        method: 'POST',

                        url: "/System/UpdateTaskById/" + id,

                        data: modal.task
                    }).then(function () {
                        window.location.href = "Home/Tasks";
                    })
                };

                modal.cancel = function () {
                    $uibModalInstance.dismiss('cancel');
                };

                modal.getTaskById = $http.get("/System/GetTaskById/" + id).then(function (d) {
                    modal.id = d.data[0].Id;
                    modal.task = d.data[0];
                    
                    var rawDeadlineMs = d.data[0].Deadline.match(/[0-9-]+/g);
                     modal.deadline = new Date(parseInt(rawDeadlineMs)).toLocaleDateString();


                }, function (error) {
                    alert('Failed');
                })
            }
            ], controllerAs: 'modal'
        }).result.then(function () { }, function (res) { })
    }
    model.deleteTaskById = function (id) {
        $http({
            method: 'POST',
            url: "/System/DeleteTaskById/" + id,
        }).then(function () {
            window.location.href = "Home/Tasks";
        })
    }
    $http.get("/System/Get").then(function (d) {

        model.tasks = d.data;
        taskArr = d.data[0];

    }).then(function () {
        return calculateDays(model.tasks);
    }).then(function () {
        model.loading = false;
    })
}

function calculateDays(tasks) {
    for (var i = 0; i < tasks.length; i++) {
        // get deadline time in miliseconds
        var deadline = tasks[i].Deadline;
        deadline = deadline.match(/[0-9-]+/g);
        // get current time in miliseconds
        var dateNowRaw = Date.now();
        // calculate difference
        var result = deadline - dateNowRaw;
        // format difference to local date
        var diffDays = Math.ceil(result / (1000 * 3600 * 24));
        // add class
        if (diffDays < 0) {
            tasks[i]['RemainingDays'] = 0;
            tasks[i]['DeadlineStatus'] = "overdue";
        } else if (diffDays < 4) {
            tasks[i]['RemainingDays'] = diffDays;
            tasks[i]['DeadlineStatus'] = "warning";
        } else {
            tasks[i]['RemainingDays'] = diffDays;
        }

    }
}
