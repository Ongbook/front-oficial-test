(function () {
	'use strict';
	angular.module('og.controllers',[]);
	angular.module('og.services',[]);
	angular.module('og.directives',[]);
	angular.module('og.interceptors',[]);
	angular.module('og.components',[]);

	angular.module('ongbook',[
		'ngRoute',
		'ui.router',
		'ngMessages',
		'ngAnimate',
		'toaster',
		'ui.bootstrap',
		'ngFileUpload',
		'fullPage.js',
		'og.controllers',
		'og.services',
		'og.directives',
		'og.interceptors',
		'og.components'
    ]);

})();
