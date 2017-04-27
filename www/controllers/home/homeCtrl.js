(function () {
	'use strict';

	angular
	.module('og.controllers')
	.controller('homeCtrl', homeCtrl);

	homeCtrl.$inject = ['$http','$scope'];

	function homeCtrl($http, $scope) {
		var vm = this;
		vm.mainOptions = {
			navigation: true,
			navigationPosition: 'right',
			scrollingSpeed: 1000
		};
	}

})();