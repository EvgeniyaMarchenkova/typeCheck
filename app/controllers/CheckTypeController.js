var app=angular.module('myApp');

app.controller('checkTypeController', function ($scope) {
    var regArr=/\[.*\]/;
    $scope.checkType= function () {
        if (regArr.test($scope.inputData) ) {
            $scope.dataType="массив";
        }
    }

})