'use strict';

angular.module('myBooks', [
	'compSocialLinks',
	'ngRoute',
])
.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'pages/home.html',
		controller: function() {
			angular.element('[ng-view]').attr('ng-view', 'pageHome')
		},
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
