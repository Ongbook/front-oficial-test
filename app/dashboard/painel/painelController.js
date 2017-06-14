
(function () {
	'use strict';

	angular
	.module('ongbook.controllers')
	.controller('painelController', painelController);

	painelController.$inject = ['entitiesServiceApi','loginServiceApi','$state','toaster'];

	function painelController(entitiesServiceApi,loginServiceApi,$state,toaster) {
		var vm = this;
	}

})();
