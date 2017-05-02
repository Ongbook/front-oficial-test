(function () {
	'use strict';
	angular.module('og.controllers',[]);
	angular.module('og.services',[]);
	angular.module('og.directives',[]);
	angular.module('og.interceptors',[]);

	angular.module('ongbook',[
		'ui.router',
		'ngAnimate',
		'ngMap',
		'ngMessages',
		'toaster',
		'ui.bootstrap',
		'fullPage.js',
		'satellizer',
		'og.controllers',
		'og.services',
		'og.directives'
		]);

})();
