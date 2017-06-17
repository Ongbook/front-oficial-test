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
		$scope.setFullRegister = setFullRegister;
		$scope.cad = {};

		function getCep(cep) {
			entitiesServiceApi.getCep(cep,'json')
				.then(function (res) {
					$scope.cad = res.data;
					console.log($scope.cad);
					entitiesServiceApi.setEntitie(JSON.stringify(res.data));
					$scope.statusView = 'registerTwo';
				});
		}

		function nextStepRegister () {
			console.log($scope.cad);
			if ($scope.statusView === 'registerTwo') {
				setTimeout(function () {
					$scope.statusView = 'registerThree';
				},300);
			}
		}

		function setFullAddress(cad) {
			var _entitie = { "nameOng": cad.nameOng, "acting":cad.acting };
			entitiesServiceApi.setEntitieFullRegister(JSON.stringify(_entitie));
			var _address = JSON.parse(entitiesServiceApi.getAddress());
			_address.street = $scope.cad.street;
			_address.number = $scope.cad.number;
			var _completeRegister = entitiesServiceApi.setFullAddress(JSON.stringify(_address));
			$state.go('painel');
		}
		function setFullRegister(cad) {
			entitiesServiceApi.setFullAddress(JSON.stringify(cad));
			$state.go('painel');
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
		if (localStorage.getItem('entitie')) {debugger
			$scope.entitie = localStorage.getItem('entitie');
			console.log($scope.entitie);
			$state.go('entitie');
		}else{

		}
	}

})();
