(function(angular) {
	'use strict';
	// Your starting point. Enjoy the ride!
	var app = angular.module("fzys", ['ngRoute','fzys.controller.main'])
		.config(['$routeProvider', function($routeProvider) {
			$routeProvider
			// /asdasda {status:asdasda}
				.when('/:status?', {
					controller: 'fzysController',
					templateUrl: 'fzys_tmpl'
				})
				.otherwise({
					redirectTo: '/'
				});
		}])
})(angular);