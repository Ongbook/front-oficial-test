(function () {
	'use strict';
	angular.module('og.controllers',[]);
	angular.module('og.services',[]);
	angular.module('og.directives',[]);
	angular.module('og.interceptors',[]);
	angular.module('og.components',[]);


	angular.module('ongbook',[
		'ui.router',
		'ngAnimate',
		'ngMessages',
		'toaster',
		'ui.bootstrap',
		'fullPage.js',
		'satellizer',
		'angular.viacep',
		'og.controllers',
		'og.services',
		'og.directives',
		'og.components'
    ]);

})();
