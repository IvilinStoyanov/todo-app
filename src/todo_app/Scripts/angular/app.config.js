'use strict';

angular.
    module('taskApp').
    config(['$routeProvider', '$locationProvider',
        function config($routeProvider, $locationProvider) {
            $routeProvider.
                when('/Home/Tasks', {
                    template: '<task-list></task-list>'
                }).
                when('/Home/Add', {
                    template: '<task-add></task-add>'
                }).
                otherwise('/Home/Tasks');

            $locationProvider.html5Mode(true);
        }       
    ]);