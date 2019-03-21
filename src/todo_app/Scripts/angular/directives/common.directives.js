angular.module('taskApp')
    .directive('datepicker', datepicker)

// functions declarations
function datepicker() {
    return {
        restrict: "A",
        link: function (scope, element, attrs, ctrl) {
            element.datepicker({
                language: 'en',
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

    //$("#datepicker")
}

