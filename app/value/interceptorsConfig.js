(function () {
	'use strict';

	angular.module("ongbook")
		.config(config);

		config.$inject = ['$httpProvider'];

		function config ($httpProvider) {
			$httpProvider.interceptors.push("errorInterceptor");
		}
})();
