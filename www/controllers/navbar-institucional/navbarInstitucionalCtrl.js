(function () {
	'use strict';

  angular
  .module('og.controllers')
		.controller('navbarInstitucionalCtrl', navbarInstitucionalCtrl);

		navbarInstitucionalCtrl.$inject = ['$uibModal','toaster', '$state','entitiesServiceApi'];

		function navbarInstitucionalCtrl($uibModal, toaster, $state,entitiesServiceApi) {
			var vm = this;
			vm.register = register;

			function register() {
				var modalInstance = $uibModal.open({
				 	templateUrl: '../../../templates/navbar-institucional/register-modal/register-modal.html',
				 	size:'md',
				 	backdrop:false,
				 	controller: function ($uibModalInstance) {
				 		var modal = this;
				 		modal.cancel = cancel;
				 		modal.sendRegister = sendRegister;

				 		function cancel() {
				 			modalInstance.close();
				 		}

				 		function sendRegister(objParam) {
				 			if (objParam) {
				 				entitiesServiceApi.registerUser(objParam)
				 					.then(function (response) {
				 						if(response.data.jwt){
							 				modalInstance.close();
							 				toaster.pop('success','Sucesso','Cadastro efetuado com sucesso',2000);
						 					setTimeout(function(){
						 						$state.go('login');
						 					},2000);
				 						} else {
				 							toaster.pop('error','Dados incorretos','Revise as informações digitadas.',3000);
				 						}
				 					});
				 			}
				 		}
				 	},
				 	controllerAs: 'modal'
				 });
			}
		}
})();