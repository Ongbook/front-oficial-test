(function () {
	'use strict';

	angular
	.module('ongbook.controllers')
	.controller('dashboardController', dashboardController);

	dashboardController.$inject = ['entitiesServiceApi','loginServiceApi','$state','toaster','$scope','$timeout'];

	function dashboardController(entitiesServiceApi,loginServiceApi,$state,toaster,$scope,$timeout) {

		$scope.showError = showError;
		$scope.error = false;
		$scope.logout = logout;
		$scope.statusView = 'registerOne';
		$scope.getCep = getCep;
		$scope.nextStepRegister = nextStepRegister;
		$scope.setFullRegister = setFullRegister;
		$scope.cad = {};
		$scope.address = {};

		function getCep( address ) {debugger;
			entitiesServiceApi.getCep( address ,'json')
				.then(function (res) {
					$scope.address = res.data;
					$scope.statusView = 'registerTwo';
				});
		}

		function nextStepRegister () {
			if ($scope.statusView === 'registerTwo') {
				setTimeout(function () {
					$scope.statusView = 'registerThree';
				},300);
			}
		}
		function setFullRegister( cad, address ) {
			var _registerFull = {
				address: address,
				name: cad.name,
				areaServed: cad.areaServed,
				location: null
			};
			var _token = localStorage.getItem('jwt');
			entitiesServiceApi.setFullRegister( _registerFull, _token )
				.then(function ( res ) {
					$scope.cad = angular.copy( res.data );
					console.log( res.data );
					$state.go('painel');
					toaster.pop('success','Sucesso','Sua entidade foi cadastrada',4000);
				});
		}

		function logout() {
			localStorage.clear();
			$state.go('institutional');
		}

		function showError(val) {
			$scope.error = val;
		}

		// if (!entitiesServiceApi.isLogged()){
		// 	$state.go('login');
		// 	// toaster.pop('error','Usuário não logado','Faça o login antes de entrar',3000);
		// }
		// if (localStorage.getItem('entitie')) {debugger
		// 	$scope.entitie = localStorage.getItem('entitie');
		// 	$state.go('entitie');
		// }else{

		// }
	}

})();
