(function () {
	'use strict';

	angular
	.module('ongbook.controllers')
	.controller('institutionalController', institutionalController);

	institutionalController.$inject = ['$state','toaster','$uibModal','registerServiceApi'];

	function institutionalController($state,toaster,$uibModal,registerServiceApi) {
		var vm = this;
		vm.authenticate = authenticate;
		vm.showError = showError;
		vm.developWithUs = developWithUs;
		vm.spread = spread;
		vm.foment = foment;
		vm.register = register;

		function register() {
			var modalInstance = $uibModal.open({
			 	templateUrl: 'app/institutional/register/register.html',
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
			 			console.log('here');
			 			if (objParam) {
			 				registerServiceApi.registerUser(objParam)
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

		function developWithUs() {
			var modalInstance = $uibModal.open({
				templateUrl: '../../../templates/home/support-modals/develop/develop.html',
				size: 'md',
				backdrop: false,
				controller: function ($uibModalInstance) {
					var modal = this;
					modal.cancel = cancel;

					function cancel() {
						modalInstance.close();
					}

				},
				controllerAs: 'modal'
			});
		}

		function spread() {
			var modalInstance = $uibModal.open({
				templateUrl: '../../../templates/home/support-modals/spread/spread.html',
				size: 'md',
				backdrop: false,
				controller: function ($uibModalInstance) {
					var modal = this;
					modal.cancel = cancel;

					function cancel() {
						modalInstance.close();
					}

				},
				controllerAs: 'modal'
			});
		}

		function foment() {
			var modalInstance = $uibModal.open({
				templateUrl: '../../../templates/home/support-modals/foment/foment.html',
				size: 'md',
				backdrop: false,
				controller: function ($uibModalInstance) {
					var modal = this;
					modal.cancel = cancel;

					function cancel() {
						modalInstance.close();
					}

				},
				controllerAs: 'modal'
			});
		}

		
		
		function authenticate (objParam) {
			if (objParam) {
				loginServiceApi.auth(objParam)
 					.then(function (response) {
 						if(response.status == '200'){
 							localStorage.setItem('jwt',response.data.jwt);				 				
		 					$state.go('dashboard');
 						}
 					});				 				
			}
		}

		function showError(val) {
			vm.error = val;
		}

		// fullPage.js
		vm.mainOptions = {
			/*navigation: true,*/
			anchors: ['mapa', 'queremosefazemos', 'responsavelporumaong', 'apoie', 'parceiros', 'contato'],
			navigationPosition: 'right',
			scrollingSpeed: 1000
		};			
	}

})();