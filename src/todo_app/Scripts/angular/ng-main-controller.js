angular.module("taskApp",
    ['ngRoute', 'ui.bootstrap', 'ngAnimate']
).filter("dateFormat", function () {
    return function (date) {
        var dateMs = date.match(/[0-9-]+/g);
        date = new Date(parseInt(dateMs)).toLocaleDateString();
        time = new Date(parseInt(dateMs)).toLocaleTimeString();
        var formatedDate = `${date} ${time}`;
        return formatedDate;
    }
}).filter("deadlineDateFormat", function () {
    return function (date) {
        var dateMs = date.match(/[0-9-]+/g);
        date = new Date(parseInt(dateMs)).toLocaleDateString();
        return date;
    }
});

//angular.controller("TaskListController", function ($scope, $http) {

//    // Add task
//    $scope.savedata = function () {
//        $http({

//            method: 'POST',

//            url: '/Home/Add',

//            data: $scope.task
//        }).then(function () {
//            window.location.href = "Home/Tasks";
//        })
//    };

//    $scope.deleteTaskById = function (id) {
//        $http({

//            method: 'POST',

//            url: `/Home/DeleteTaskById/${id}`,
//        }).then(function () {
//            window.location.href = "/Home/Tasks";
//        })
//    }

//    $http.get("/Home/Get").then(function (d) {

//        $scope.tasks = d.data;

//    }, function (error) {

//        alert('Failed');

//    });
//}).filter("dateFormat", function () {
//    return function (date) {
//        var dateMs = date.match(/[0-9-]+/g);
//        date = new Date(parseInt(dateMs)).toLocaleDateString();
//        time = new Date(parseInt(dateMs)).toLocaleTimeString();
//        var formatedDate = `${date} ${time}`;
//        return formatedDate;
//        }
//    }).filter("deadlineDateFormat", function() {
//    return function (date) {
//        var dateMs = date.match(/[0-9-]+/g);
//        date = new Date(parseInt(dateMs)).toLocaleDateString();
//        return date;
//    }
//})

