(function () {
	'use strict';

	angular
	.module('og.controllers')
	.controller('homeCtrl', homeCtrl);

	homeCtrl.$inject = ['$http'];

	function homeCtrl($http) {
		var vm = this;
		vm.error = error;

		function error() {
			$http.get('https://api.github.com/users/octocatsaddasa');
		}

		vm.mainOptions = {
			navigation: true,
			navigationPosition: 'right',
			scrollingSpeed: 1000
		};
	}

})();