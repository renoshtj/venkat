var routeMod = angular.module("myrouteApp", ["ngRoute","studentmod","viewStudentMod","studentFact"]); 
 
 routeMod.config(function($routeProvider){ 
    $routeProvider 
        .when("/", {templateUrl: "welcome.htm1"}) 
        .when("/studentform", {templateUrl: "studentform.html"}) 
        .when("/viewstudent", {templateUrl: "viewstudent.html"}); 
 }); 
