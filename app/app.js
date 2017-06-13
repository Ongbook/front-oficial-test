(function () {
	'use strict';
	angular.module('ongbook.controllers',[]);
	angular.module('ongbook.services',[]);
	angular.module('ongbook.directives',[]);
	angular.module('ongbook.interceptors',[]);
	angular.module('ongbook.component',[]);


	angular.module('ongbook',[
		'ui.router',
		'ngAnimate',
		'ngMessages',
		'toaster',
		'ui.bootstrap',
		'fullPage.js',
		'ongbook.controllers',
		'ongbook.services',
		'ongbook.directives',
		'ongbook.component',
		'ongbook.interceptors'
    ]);

})();
