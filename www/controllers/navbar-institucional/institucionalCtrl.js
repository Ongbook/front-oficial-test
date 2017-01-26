(function () {
	'use strict';

	angular
		.module('og.controllers')
		.controller('institucionalCtrl', institucionalCtrl);

		institucionalCtrl.$inject = ['$uibModal','$scope','toaster'];

		function institucionalCtrl($uibModal,$scope, toaster) {
			var vm = this;
			vm.register = register;

			function register() {
				var modalInstance = $uibModal.open({
				 	templateUrl: '../../../templates/instucional/registerModal/registerModal.html',				 	
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
				 				$uibModalInstance.dismiss('cancel');
			 					// $state.go('dashboard');				 					
				 				}
				 		}

				 	},
				 	scope:$scope,
				 	controllerAs: 'modal'
				 });
			}
		}
})();