(function () {
	'use strict';

	angular
		.module('og.components')
		.component('registerEntitie',{
			templateUrl: '../../templates/dashboard/dashboard/entities/entitie.html',
			controller: registerEntitie,
			bindings:{}
		});

		function registerEntitie() {
			var vm = this;
		}


})();
