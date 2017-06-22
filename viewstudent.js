var viewStudentMod = angular.module("viewStudentMod", []); 
viewStudentMod.controller("viewStudentCtrl", function($scope,$http,$log,studentFact){
    $scope.status = "";
    $scope.editForm=false;
    $scope.editData = [];
    $http.get('http://localhost:3000/student')
    .then(function(response) {
        $log.debug(response.data);
        $scope.studentdata = response.data;
    });
    
    $scope.deleteStudent = function(id)
    {
      var url1 = "http://localhost:3000/student/"+id;          
         $http({
        method : "DELETE",
        url : url1
    }).then(function mySuccess(response) {
             $log.debug(response.data);
        $scope.status = "success";
    }, function myError(response) {
             $log.debug(response.data);
        $scope.status = "unnable to delete";
    });
        
    }
    
    $scope.editStudent = function(id)
    {
        $scope.status = "";          
        $scope.editForm=true;
               $http.get('http://localhost:3000/student/'+id).then(
				function(response) {	                  
					$scope.student =  response.data;
                    $log.debug($scope.student);
				},function errorCallback(response)
               {              
                    $log.debug("error");
                });         
        
    }
    
     $scope.updateStudent = function()
    {    
        if($scope.studentform.$valid)
            {            
         $http.put('http://localhost:3000/student/'+$scope.student.id, $scope.student).then(
                function successCallback(response){
                $log.debug(response);
                        $scope.status = "success";          
                }); 
         
         $scope.editForm=false;               
            }
        
    }
    
    
});
