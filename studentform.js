var studentMod = angular.module("studentmod", []); 
studentMod.controller("myStudentCtrl", function($scope,$http,$log,studentFact){
    
    var masterForm= angular.copy($scope.student);
    
    $scope.saveForm =  function() {
        
        if($scope.studentform.$valid)
            {            
                var verifyData  = studentFact.getStudentByID($scope.student.id);
                
                alert(verifyData.id);                
              
                
                $log.debug($scope.student);
                $http.post('http://localhost:3000/student', $scope.student).then(
                function successCallback(response){
                $log.debug(response);
                     $scope.SaveMessage = "Successfully Saved!!!"
                    $scope.reset();
                },
                function errorCallback(response){
                $scope.SaveMessage = "Duplicate record Found!!!"
                });
                
            }
    }
    
    $scope.reset = function() {        
         $scope.user = angular.copy(masterForm);     
    };
});