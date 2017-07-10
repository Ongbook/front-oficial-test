(function () {
	'use strict';

	angular
	.module('ongbook.controllers')
	.controller('loginController', loginController);

	loginController.$inject = ['loginAPIService','$state','toaster'];

	function loginController(loginAPIService,$state,toaster) {
		var vm = this;
		vm.auth = auth;
		vm.showError = showError;
		vm.error = false;

		function showError(val) {
			vm.error = val;
		}

		function auth (objParam) {
			if (objParam) {
				loginAPIService.login(objParam)
 					.then(function (response) {
 						console.log(response);
 						if(response.status == '200'){
 							localStorage.setItem('jwt',response.data.jwt);
		 					$state.go('dashboard');
 						}
 					});
			}
		}


	}

})();
