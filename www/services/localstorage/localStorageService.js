(function () {
	'use strict';
	angular
		.module('og.services')
		.factory('localStorageService', localStorageService);

		localStorageService.$inject = [];

		function localStorageService () {

			var _setLocalStorage = function (id,data) {
				localStorage.setItem(id,data);
			};

			var _getLocalStorage = function (id,data) {
				localStorage.getItem(id,data);
			};

			var _removeLocalStorage = function (id,data) {
				localStorage.removeItem(id,data);
			};

			var _clearLocalStorage = function () {
				localStorage.clear();
			};

			return {
				setLocalStorage:_setLocalStorage,
				getLocalStorage:_getLocalStorage,
				clearLocalStorage:_clearLocalStorage,
				removeLocalStorage:_removeLocalStorage
			};
		}

})();
