'use strict';

angular.
    module('taskApp').
    config(['$routeProvider', '$locationProvider',
        function config($routeProvider, $locationProvider) {
            $routeProvider.
                when('/Home/Panel', {
                    template: '<task-panel></task-panel>',
                }).
                when('/Home/Tasks', {
                    template: '<task-list></task-list>'
                }).
                when('/Home/Add', {
                    template: '<task-add></task-add>'
                }).
                otherwise('/Home/Panel');

            $locationProvider.html5Mode(true);
        }       
    ]);