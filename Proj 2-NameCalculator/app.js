(function(){

    'use strict';

    angular.module('NameCalculator', [])

    .controller('NameCalculatorController', function($scope){
        $scope.name = '';
        $scope.value = 0;

        $scope.displayNumeric = function(){

            var totalVal = calculateNumeric($scope.name);
            $scope.value = totalVal;

        }

        function calculateNumeric(string){
            var val = 0;
            for(var i=0; i<string.length; i++){
                val += string.charCodeAt(i);
            }
            return val;
        }
    })

})();