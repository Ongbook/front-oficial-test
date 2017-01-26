(function () {
	'use strict';
	angular
	.module('og.services')
	.factory('configServiceApi',configServiceApi);

	function configServiceApi($http,config) {

		var _getUser = function () {
			return JSON.parse(localStorage.getItem('user'));
		}

		var _setUser = function (objParam) {
			localStorage.setItem('user', JSON.stringify(objParam));
			return true;
		}

		return {
			getUser:_getUser,
			setUser:_setUser
		}
	}
})();