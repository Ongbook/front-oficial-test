(function () {
	'use strict';

	angular
		.module('ongbook')
		.value('config',{
			//TODO: Mover para o config do Angular
			apiUrl:"https://ongbook-api-strapi-dev.herokuapp.com/"

		});
})();