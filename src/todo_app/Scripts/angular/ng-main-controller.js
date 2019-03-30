﻿angular.module("taskApp",
    ['ngRoute', 'ui.bootstrap', 'ngAnimate'])
    .controller('Notification', ['$scope', 'taskFactory', '$rootScope', function ($scope, taskFactory, $rootScope) {
        $rootScope.$on('tasks', function (event, obj) {
            console.log(obj);
            $scope.activeTasks = obj.length;
        }) 

        
    }])

