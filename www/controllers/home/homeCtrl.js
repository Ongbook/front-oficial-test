(function () {
	'use strict';

	angular
	.module('og.controllers')
	.controller('homeCtrl', homeCtrl);

	homeCtrl.$inject = [];

	function homeCtrl() {
		var vm = this;

		vm.mainOptions = {
			navigation: true,
			navigationPosition: 'right',
			scrollingSpeed: 1000
		};

	}

})();