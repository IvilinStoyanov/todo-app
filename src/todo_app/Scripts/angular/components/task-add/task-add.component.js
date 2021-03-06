﻿'use strict';
angular
    .module('taskApp')
    .component('taskAdd', {
        templateUrl: 'Template/Add',
        controller: TaskListController,
        controllerAs: 'model'
    })


function TaskListController($http, $location) {
    // Add task
    var model = this;

    model.savedata = function () {
        model.loading = true;
        $http({

            method: 'POST',

            url: '/System/Add',

            data: model.task
        }).then(function () {
            model.loading = false;
            //window.location.href = "Home/Tasks";
                $location.path('Home/Tasks', false);
            }).then(function () {
                alertify.set('notifier', 'position', 'top-center');
                alertify.success('Task have been added successfully');
            })
    };
}

