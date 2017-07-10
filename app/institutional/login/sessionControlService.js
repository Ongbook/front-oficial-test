(function() {
	'use strict';
	angular.module('ongbook.services')
		   .factory('sessionControlService', sessionControlService);

	sessionControlService.$inject = [];

	function sessionControlService() {

		var _getItem = function (key) {
			return localStorage.getItem(key);
		};

		var _setItem = function (key, val) {
			return localStorage.setItem(key, val);
		};

		var _removeItem = function (key) {
			return localStorage.removeItem(key);
		};

		return {
			getItem   : _getItem,
			setItem   : _setItem,
			removeItem : _removeItem
		};

	}



})();
