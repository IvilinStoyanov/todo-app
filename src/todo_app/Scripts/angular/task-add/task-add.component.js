'use strict';
angular
    .module('taskApp')
    .component('taskAdd', {
        templateUrl: 'Template/Add',
        controller: TaskListController,
        controllerAs: 'model'
    })

function TaskListController($http) {
    // Add task
    var model = this;

    model.savedata = function () {
        $http({

            method: 'POST',

            url: '/System/Add',

            data: model.task
        }).then(function () {
            window.location.href = "Home/Tasks";
        })
    };  
}

