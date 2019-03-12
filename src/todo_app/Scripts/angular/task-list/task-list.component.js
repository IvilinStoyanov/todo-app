'use strict';
angular
    .module('taskApp')
    .component('taskList', {
        templateUrl: 'Template/Tasks',
        controller: TaskListController,
        controllerAs: 'model'
    }).directive("datepicker", function () {
        return {
            restrict: "A",
            link: function (scope, element, attrs, ctrl) {
                element.datepicker({
                    format: 'dd/mm/yyyy',
                    maxViewMode: 0,
                    todayBtn: "linked",
                    clearBtn: true,
                    autoclose: true,
                    todayHighlight: true,
                    orientation: "bottom left",

                });
            }
        }

    }).directive('deadline', function () {
        return {
            require: 'ngModel',
            link: function (scope, elm, attrs, ctrl) {
                // TODO: 

                console.log($("#deadline"));

            }
        }
    })

var taskArr;

TaskListController.$inject = ['$http', '$uibModal'];

function TaskListController($http, $uibModal) {
    var model = this;

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


    }).then(function () {
            return calculateDays(model.tasks);
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
        // add 
        tasks[i]['RemainingDays'] = diffDays;

        if (tasks[i]['RemainingDays'] <= 0) {
            tasks[i]['DeadlineStatus'] = "overdue";
        } else if (tasks[i]['RemainingDays'] < 4) {
            tasks[i]['DeadlineStatus'] = "warning";
        } else {
            tasks[i]['DeadlineStatus'] = "ok";
        }
    }
}

function addWarnings(tasks) {
    for (var i = 0; i < tasks.length; i++) {
        // DOM
        $(`#task-${tasks[i].Id}`).addClass("task-warning");
    }
}
