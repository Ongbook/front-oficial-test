
(function () {
	'use strict';

	angular
	.module('ongbook.controllers')
	.controller('entitieController', entitieController);

	entitieController.$inject = ['entitiesServiceApi','loginServiceApi','$state','toaster'];

	function entitieController(entitiesServiceApi,loginServiceApi,$state,toaster) {
		var vm = this;



	}

})();
