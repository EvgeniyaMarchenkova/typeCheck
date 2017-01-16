var app=angular.module('myApp');

app.controller('checkTypeController', function ($scope) {
    var regArr=/\[.*\]/;
    var regObj=/{.*}/;
    var regFuncDecl=/function/;
    var regFuncExpr=/function\(/;
    $scope.checkType= function () {

        if (regFuncExpr.test($scope.inputData)) {
            $scope.dataType= " Введенные данные представляют собой  функцию вида Function Expression";
        }
        else if (regFuncDecl.test($scope.inputData)) {
            $scope.dataType= " Введенные данные представляют собой  функцию вида Function Declaration";
        }
        else if (regArr.test($scope.inputData) ) {
            $scope.dataType= " Введенные данные представляют собой  массив";
        }
        else if (regObj.test($scope.inputData)) {
            $scope.dataType= " Введенные данные представляют собой  объект";
        }
        else {
            $scope.dataType= "Данные не распознаны";
        }
    }

})