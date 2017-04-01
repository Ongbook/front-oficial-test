(function () {
	'use strict';

	angular
	.module('og.controllers')
	.controller('loginCtrl', loginCtrl);

	loginCtrl.$inject = ['loginServiceApi','$state','toaster'];

	function loginCtrl(loginServiceApi,$state,toaster) {
		var vm = this;
		vm.auth = auth;
		vm.showError = showError;

		function showError(val) {
			vm.error = val;
		}
		
		function auth (objParam) {
			if (objParam) {
				loginServiceApi.auth(objParam)
 					.then(function (response) {
 						if(response.status == '200'){
 							localStorage.setItem('jwt',response.data.jwt);				 				
		 					$state.go('dashboard');
 						} else {
 							toaster.pop('error','Dados incorretos','Revise as informações digitadas.',3000);
 						}
 					});				 				
			}
		}

				
	}

})();