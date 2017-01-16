var app=angular.module('myApp');
app.controller('checkPropertyTypeController', function ($scope) {
    $scope.inputObject = '{a:6}';
    $scope.inputProperty = 'a';
    $scope.result = '';
        $scope.checkProperty= function () {
        var regObj=/^{.*}$/;
        if (!regObj.test($scope.inputObject)) {
            $scope.result= "Input data is not an object";
            return;
        }
        var propExpressions = $scope.inputObject.substring (1,$scope.inputObject.length-1).split (',');
        for(var index = 0; index < propExpressions.length; index++){
            var items = propExpressions[index].split(':');
            if(items[0].trim() == $scope.inputProperty) {
                //$scope.result = checkType (items[1].trim());
                $scope.result = "String!";
                return;
            }
        }
        $scope.result = 'Property ' + $scope.inputProperty + ' is not found';
    }
});


