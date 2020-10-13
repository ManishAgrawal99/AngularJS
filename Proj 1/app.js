(function(){

    'use strict';

    angular.module('myFirstApp', [])

    .controller('MyFirstController', function($scope){
        $scope.name = "Manish";

        $scope.sayHello = function(){
            return "Hello ";
        }

        
    });

})();