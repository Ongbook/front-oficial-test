(function () {
    'use strict';
    angular
        .module('og.interceptors')
        .factory('errorInterceptor', errorInterceptor);

    errorInterceptor.$inject = ['toaster'];

    function errorInterceptor(toaster) {
        return {
            request: function (config) {
                return config;
            },
            response: function (response) {
                        console.log('ehehehehhe');
                
                if(response.data){
                    if (response.data.status === false) {
                        console.log('ehehehehhe');
                    }
                }

                return response;
            }
        }
    }
})();
