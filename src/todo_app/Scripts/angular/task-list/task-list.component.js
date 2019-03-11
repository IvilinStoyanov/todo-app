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
        taskArr = d.data[0];

    }, function (error) {
        alert('Failed');
    })
}