(function () {
	'use strict';

	angular
		.module('og.controllers')
		.controller('institucionalCtrl', institucionalCtrl);

		institucionalCtrl.$inject = ['$uibModal','$scope','toaster', '$state'];

		function institucionalCtrl($uibModal,$scope, toaster, $state) {
			var vm = this;
			vm.register = register;

			function register() {
				var modalInstance = $uibModal.open({
				 	templateUrl: '../../../templates/instucional/register-modal/register-modal.html',
				 	size:'md',
				 	backdrop:'static',
				 	controller: function ($uibModalInstance) {
				 		var modal = this;
				 		modal.cancel = cancel;
				 		modal.sendRegister = sendRegister;

				 		function cancel() {
				 			console.log('modal on');
				 			$uibModalInstance.dismiss('cancel');
				 		}

				 		function sendRegister(objParam) {
				 			localStorage.setItem('user',JSON.stringify(objParam));
				 				if(localStorage.getItem('user')){
				 					toaster.pop({
							                type: 'success',
							                title: 'Sucesso',
							                body: 'Usuário cadastrado com sucesso.',
							                timeout: 3000
							            });
				 				modalInstance.close();
			 					$state.go('register-social-entity');
				 				}
				 		}

				 	},
				 	scope:$scope,
				 	controllerAs: 'modal'
				 });
			}
		}
})();