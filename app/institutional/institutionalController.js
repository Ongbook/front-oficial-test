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
		vm.register = register;
		vm.spread = spread;
		vm.foment = foment;
		vm.developWithUs = developWithUs;

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

		// Modals
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
								}else {
									toaster.pop('error','Dados incorretos','Revise as informações digitadas.',3000);
								}
							});
						}
					}
				},
				controllerAs: 'modal'
			});
		}

		function spread() {
			var modalInstance = $uibModal.open({
				templateUrl: '../../../app/institutional/support-modals/spread/spread.html',
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
				templateUrl: '../../../app/institutional/support-modals/foment/foment.html',
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

		function developWithUs() {
			var modalInstance = $uibModal.open({
				templateUrl: '../../../app/institutional/support-modals/develop/develop.html',
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

		// fullPage.js
		vm.mainOptions = {
			anchors: ['map', 'whant-and-make', 'ngo-owner', 'support', 'partners', 'contact'],
			// navigation: true,
			// navigationPosition: 'right',
			scrollingSpeed: 1000
		};
	}

})();