(function () {
	'use strict';

	angular
	.module('ongbook.controllers')
	.controller('dashboardController', dashboardController);

	dashboardController.$inject = ['entitiesServiceApi','loginServiceApi','$state','toaster','$scope'];

	function dashboardController(entitiesServiceApi,loginServiceApi,$state,toaster,$scope) {

		$scope.showError = showError;
		$scope.error = false;
		$scope.logout = logout;
		$scope.statusView = 'registerOne';
		$scope.getCep = getCep;
		$scope.nextStepRegister = nextStepRegister;
		$scope.setFullAddress = setFullAddress;
		$scope.cad = {};

		function getCep(cep) {
			entitiesServiceApi.getCep(cep,'json')
				.then(function (res) {
					entitiesServiceApi.setEntitie(JSON.stringify(res.data));
					$scope.statusView = 'registerTwo';
				});
		}

		function nextStepRegister () {
			if ($scope.statusView === 'registerTwo') {
				$scope.statusView = 'registerThree';
			}
		}

		function setFullAddress(cad) {
			var _address = JSON.parse(entitiesServiceApi.getAddress());
				_address.street = $scope.cad.street;
				_address.number = $scope.cad.number;
				var _completeRegister = entitiesServiceApi.setFullAddress(JSON.stringify(_address));debugger;
				$state.transitionTo('painel');
				// localStorage.remoteItem('address');

		}

		function logout() {
			localStorage.clear();
			$state.go('home');
		}

		function showError(val) {
			$scope.error = val;
		}

		if (!entitiesServiceApi.isLogged()){
			$state.go('home');
			toaster.pop('error','Usuário não logado','Faça o login antes de entrar',3000);
		}
	}

})();
