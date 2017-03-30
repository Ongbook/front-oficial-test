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
				 				localStorage.setItem('user',JSON.stringify(objParam));				 				
				 				modalInstance.close();
			 					$state.go('register-social-entity');
				 			} else {
				 				
				 			}
				 			
					 				
				 		}

				 	},
				 	scope:$scope,
				 	controllerAs: 'modal'
				 });
			}
		}
})();