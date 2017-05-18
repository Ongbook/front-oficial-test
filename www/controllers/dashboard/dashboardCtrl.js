(function () {
	'use strict';

	angular
		.module('og.controllers')
		.controller('dashboardCtrl', dashboardCtrl);

		dashboardCtrl.$inject = ['$state','toaster','entitiesServiceApi'];

		function dashboardCtrl($state, toaster, entitiesServiceApi) {
			var vm 		= this;
			vm.logout = logout;

			function logout() {
				localStorage.clear();
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
