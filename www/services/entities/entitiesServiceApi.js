(function () {
	'use strict';
	angular
	.module('og.services')
	.factory('entitiesServiceApi',entitiesServiceApi);

	entitiesServiceApi.$inject = ['$http','config'];

	function entitiesServiceApi($http,config) {

		var _getEntities = function () {
			return $http.get(config.baseApiUrl+'entidades');
		}

		var _setEntities = function (objParam) {
			return $http.post(config.baseApiUrl+'entidades',objParam);
		}

		return {
			getEntities:_getEntities,
			setEntities:_setEntities

		}
	}
})();