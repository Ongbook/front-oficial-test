
(function () {
	'use strict';

	angular
	.module('ongbook.controllers')
	.controller('entitieController', entitieController);

	entitieController.$inject = ['entitiesServiceApi','loginServiceApi','$state','toaster','$scope','NgMap'];

	function entitieController(entitiesServiceApi,loginServiceApi,$state,toaster,$scope,NgMap) {
		$scope.cad = {};

		function getInitialValues() {
			$scope.cad.address = JSON.parse(entitiesServiceApi.getAddress());
			$scope.cad.entitie = JSON.parse(entitiesServiceApi.getEntitieFullRegister());
		}
		// console.log(NgMap);
		NgMap.getMap().then(function(map) {
	    console.log(map.getCenter());
	    console.log('markers', map.markers);
	    console.log('shapes', map.shapes);
	  });

		setTimeout(function () {
			console.log($scope.cad);
		},300);
		getInitialValues();

		if(!localStorage.getItem('entitie')){
			$state.go('dashboard');
		}

	}

})();
