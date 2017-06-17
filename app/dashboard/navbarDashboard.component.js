(function() {
	'use strict';

	angular
		.module('ongbook.component', [])
		.component('navbarDashboard', {
			templateUrl: 'app/dashboard/navbarDashboard.component.html',
			controller: 'dashboardController',
			controllerAs: 'vm'
		});

})();
