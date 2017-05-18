(function () {
	'use strict';

	angular
		.module('og.components')
		.component('painelDashboard',{
			templateUrl: '../../templates/dashboard/dashboard/painelDashboard/painel-dashboard.html',
			controller: painelDashboard,
			bindings:{
				result: '='
			}
		});

		painelDashboard.$inject = ['entitiesServiceApi','$scope','viaCEP'];
		function painelDashboard(entitiesServiceApi,$scope, viaCEP) {

			$scope.getCep = getCep;
			$scope.cad 		= {};
			$scope.result = {};

			function getCep(cep) {
				viaCEP.get(cep)
					.then(function (res) {
						$scope.result = res;
					});
			}

		}


})();
