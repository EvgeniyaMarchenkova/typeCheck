var app=angular.module('myApp');

app.controller('checkTypeController', function ($scope) {
    var regArr=/\[.*\]/;
    var regObj=/{.*}/;
    $scope.checkType= function () {
        if (regArr.test($scope.inputData) ) {
            $scope.dataType= " Введенные данные представляют собой  массив";
        }
        else if (regArr.test($scope.inputData)) {
            $scope.dataType= " Введенные данные представляют собой  объект";
        }
    }

})