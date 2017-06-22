var studentFact = angular.module("studentFact", []);
studentFact.factory('studentFact', function($log, $http) {
	var fact = {};

	fact.getStudentByID = function(id) {
		var studentData = {};
		$http.get('http://localhost:3000/student/' + id).then(
				function(response) {
					studentData = response.data;
				}, function errorCallback(response) {
					studentData = null;
				});

		return studentData;
	}

	return fact;

});