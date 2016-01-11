angular.module('myDiary', [
	'ui.router',
	'ngMaterial',
	'ngAria',
	'ngAnimate'
	])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

	$stateProvider

	.state('page', {
		url: '/page',
		templateUrl: 'views/pageView.html',
		controller: 'PageController'
	})

	$urlRouterProvider.otherwise('/page');
}])