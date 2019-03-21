angular.module('taskApp')
    .filter('dateFormat', dateFormat)
    .filter('deadlineDateFormat', deadlineDateFormat)

function dateFormat() {
    return function (date) {
        var dateMs = date.match(/[0-9-]+/g);
        date = new Date(parseInt(dateMs)).toLocaleDateString();
        time = new Date(parseInt(dateMs)).toLocaleTimeString();
        var formatedDate = `${date} ${time}`;
        return formatedDate;
    }
}

function deadlineDateFormat() {
    return function (date) {
        var dateMs = date.match(/[0-9-]+/g);
        date = new Date(parseInt(dateMs)).toLocaleDateString();
        return date;
    }
}