(function () {
    'use strict';
    angular
        .module('ongbook')
        .factory('errorInterceptor', errorInterceptor);

    errorInterceptor.$inject = ['$q','$location','toaster'];

    function errorInterceptor($q,$location,toaster) {
        return {            
            responseError: function (rejection) {
                if( rejection.status === 404 ) {
                    toaster.pop('error',rejection.statusText,rejection.status,3000);          
                }
                if( rejection.status === 403){
                    toaster.pop('error','Erro no login','Usuário ou Senha inválidos',3000);          
                }
                return $q.reject(rejection);
            }
        };
    }
})();
