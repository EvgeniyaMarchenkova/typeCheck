var app=angular.module('myApp');

app.directive ('checkPropertyType', function () {
    return {
        templateUrl :'./templates/CheckPropertyTypeTemplate.html',
        transclude: true
    }

})
