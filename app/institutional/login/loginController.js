(function () {
	'use strict';

	angular
	.module('ongbook.controllers')
	.controller('loginController', loginController);

	loginController.$inject = ['loginAPIService','$location','toaster'];

	function loginController(loginAPIService,$location,toaster) {
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
 					.then(function (res) {
 						if(res === 200){
		 					$location.path('/painel');
 						}
 					});
			}
		}


	}

})();
