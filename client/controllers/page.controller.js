angular.module('myDiary')
.controller('PageController', function($scope, $http){

	console.log('this is a page object', $scope)

	$scope.create = function (data){
	$http.post('/', data)
		
	}
	$scope.create('yoou')

})