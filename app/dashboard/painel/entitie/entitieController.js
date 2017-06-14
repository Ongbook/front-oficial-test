
(function () {
	'use strict';

	angular
	.module('ongbook.controllers')
	.controller('entitieController', entitieController);

	entitieController.$inject = ['entitiesServiceApi','loginServiceApi','$state','toaster','$scope'];

	function entitieController(entitiesServiceApi,loginServiceApi,$state,toaster,$scope) {
		$scope.cad = {};

		function getInitialValues() {
			$scope.cad.address = JSON.parse(entitiesServiceApi.getAddress());
			$scope.cad.entitie = JSON.parse(entitiesServiceApi.getEntitieFullRegister());
		}

		setTimeout(function () {
			console.log($scope.cad);
		},300);
		getInitialValues();
	}

})();
