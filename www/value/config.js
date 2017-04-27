(function () {
	'use strict';

	angular
		.module('ongbook')
		.value('config',{
			apiUrl:"https://ongbook-api-strapi-dev.herokuapp.com/"			
		});
})();