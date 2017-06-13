(function() {
	'use strict';

	angular
		.module('ongbook.component', [])
		.component('navbarDashboard', {
			templateUrl: 'app/dashboard/navbarDashboard.component.html',
			controller: 'dashboardController',
			controllerAs: 'vm'
		})
		.controller('AppCtrl', ['$http', function($http) {
			var vm = this;
			vm.nome = "erik";
		}]);

})()
