(function () {
	'use strict';

	angular
	.module('og.controllers')
	.controller('loginCtrl', loginCtrl);

	loginCtrl.$inject = ['loginServiceApi','$state','toaster','$auth'];

	function loginCtrl(loginServiceApi,$state,toaster, $auth) {
		var vm = this;
		vm.auth = auth;
		vm.showError = showError;
		vm.authenticate = authenticate;

		function authenticate(provider) {debugger;
			$auth.authenticate(provider)
			.then(function (response) {
				console.log(response);	
			});
		}

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