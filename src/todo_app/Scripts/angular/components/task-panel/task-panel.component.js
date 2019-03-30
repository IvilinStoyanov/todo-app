'use strict';
angular
    .module('taskApp')
    .component('taskPanel', {
        templateUrl: 'Template/Panel',
        controller: TaskListController,
        controllerAs: 'model'
    }).factory('taskFactory', function () {
        return function () {
            test: null
        }
    })

TaskListController.$inject = ['$http', '$uibModal', 'taskFactory', '$rootScope'];

function TaskListController($http, $uibModal, taskFactory, $rootScope) {
    var model = this;
    model.loading = true;
    model.taskCompleted = [];
    model.taskPending = [];
    model.taskActive = [];
    model.taskOverdue = [];
   
    $http.get("/System/Get").then(function (d) {
        model.tasks = d.data;
         $rootScope.$broadcast('tasks', model.tasks);
        for (var index = 0; index < model.tasks.length; index++) {
            if (model.tasks[index].Status == 'Completed') {
                model.taskCompleted.push(model.tasks[index]);
            } else if (model.tasks[index].Status == 'Pending') {
                model.taskPending.push(model.tasks[index]);
            } else if (model.tasks[index].Status == 'Active') {
                model.taskActive.push(model.tasks[index]);
            } else if (model.tasks[index].Status == 'Overdue') {
                model.taskOverdue.push(model.tasks[index]);
            }
        }
        console.log(model.taskCompleted);
        console.log(model.taskPending);
        console.log(model.taskActive);
        console.log(model.taskOverdue);

    }).then(function () {
        model.loading = false;
    })
}


