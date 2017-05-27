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

		painelDashboard.$inject = ['entitieServiceApi','$scope', 'toaster','$state'];
		function painelDashboard(entitieServiceApi,$scope,toaster,$state) {

			$scope.getCep = getCep;
			$scope.setFullAddress = setFullAddress;
			$scope.nextStepRegister = nextStepRegister;
			$scope.cad 		= {};
			$scope.status = localStorage.getItem('status') ? localStorage.getItem('status') : 0;

			function getCep(cep) {
				entitieServiceApi.getCep(cep,'json')
					.then(function (res) {
						entitieServiceApi.setEntitie(JSON.stringify(res.data));
						$scope.status = 1;
					});
			}

			function nextStepRegister () {
				if ($scope.status === 1) {
					$scope.status = 2;
				}
			}

			function setFullAddress() {
				var address = JSON.parse(entitieServiceApi.getAddress());
					address.street = $scope.cad.street;
					address.number = $scope.cad.number;
					var _completeRegister = entitieServiceApi.setFullAddress(JSON.stringify(address));
					if (_completeRegister) {
						$scope.status = 3;
						localStorage.setItem('status',$scope.status.toString());
						$state.reload();
					}

			}



		}


})();
