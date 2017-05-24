(function () {
	'use strict';

	angular
		.module('og.controllers')
		.controller('dashboardCtrl', dashboardCtrl);

		dashboardCtrl.$inject = ['$state','toaster','entitiesServiceApi','entitieServiceApi'];

		function dashboardCtrl($state, toaster, entitiesServiceApi,entitieServiceApi) {
			var vm 		= this;
			vm.logout = logout;
			vm.status = entitieServiceApi.getStatus();

			function logout() {
				localStorage.clear();
				vm.status = 0;
				$state.go('home');
			}

			if (entitiesServiceApi.isLogged()){

			}
			else {
				$state.go('home');
				toaster.pop('error','Usuário não logado','Faça o login antes de entrar',2000);
			}
		}
})();
