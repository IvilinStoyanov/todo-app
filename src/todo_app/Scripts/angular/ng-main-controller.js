var app = angular.module("taskApp", []);


app.controller("TaskController", function ($scope, $http) {

    // Add task
    $scope.savedata = function () {
        $http({

            method: 'POST',

            url: '/Home/Add',

            data: $scope.task
        }).then(function () {
            window.location.href = "Home/Tasks";
        })
    };

    $http.get("/Home/Get").then(function (d) {

        $scope.tasks = d.data;

    }, function (error) {

        alert('Failed');

    });
});