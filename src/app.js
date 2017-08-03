'use strict';

angular.module('myBooks', [
	'ngRoute',
])
.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'pages/home.html',
	})
	.otherwise({redirectTo: '/'})
}])
.filter('strDate', () => {
	return function(date) {
		if (typeof date === 'string') {
			date = new Date(date)
		}
		return date.toLocaleString(undefined, {
			year: 'numeric',
			month: 'short',
			day: 'numeric',
		})
	}
})
