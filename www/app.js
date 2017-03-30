(function () {
	'use strict';
	angular.module('og.controllers',[]);
	angular.module('og.services',[]);
	angular.module('og.directives',[]);

	angular.module('ongbook',[
		'ui.router',
		'ngMessages',
		'ngAnimate',
		'toaster',
		'ui.bootstrap',
		'fullPage.js',
		'og.controllers',
		'og.services',
		'og.directives'
    ]);

})();
