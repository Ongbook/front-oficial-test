(function () {
	'use strict';

	angular
	.module('ongbook.controllers')
	.controller('loginController', loginController);

	loginController.$inject = ['loginServiceApi','$state','toaster'];

	function loginController(loginServiceApi,$state,toaster) {
		var vm = this;
		vm.auth = auth;
		vm.showError = showError;
		vm.error = false;

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
 						}
 					});				 				
			}
		}

				
	}

})();