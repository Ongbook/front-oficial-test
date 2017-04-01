(function () {
	'use strict';

	angular
		.module('og.controllers')
		.controller('entitiesCtrl', entitiesCtrl);

		entitiesCtrl.$inject = ['entitiesServiceApi'];

		function entitiesCtrl(entitiesServiceApi) {
			var vm = this;

			if (entitiesServiceApi.isLogged()){
				
			}
			else {
				$state.go('home');
				toaster.pop('error','Usuário não logado','Faça o login antes de entrar',3000);
			}
		}
})();