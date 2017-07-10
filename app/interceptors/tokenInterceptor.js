// (function () {
//     'use strict';
//     angular
//         .module('ongbook')
//         .factory('authInterceptor', authInterceptor);

//     authInterceptor.$inject = ['loginServiceApi','$q'];

//     function authInterceptor(loginServiceApi,$q) {
//         return {
//         		request: function (config) {
// 							config.headers = config.headers || {};

// 							if(loginServiceApi.getToken()){
// 								config.headers['Authorization'] = 'Bearer ' + AuthService.getToken();
// 							}
// 							return config;
// 						},
// 						responseError: function (response) {
// 							if ( response.status === 401 || response.status === 403 ) {
// 								// $location.path('/login');
// 							}
// 							return $q.reject(response);
// 						}
//         };
//     }
// })();
(function (){
  'use strict';
  angular
    .module('ongbook.interceptors')
    .factory('tokenInterceptor', tokenInterceptor);

    tokenInterceptor.$inject = ['$location', '$q', '$injector'];

    function tokenInterceptor ($location, $q, $injector) {

      return {
        request : function (config) {
            config.headers = config.headers || {};
            if($injector.get('authUserService').isLoggedIn()){
                if(config.url.indexOf('auth/local') !== -1){
                    config.headers['Authorization'] = $injector.get('authUserService').getToken();
                }
            }

              return config;
        },
        responseError : function (response) {
            if(response.status === 405)
            {
              $injector.get('sessionControlService').removeItem('token');
              $location.path('/');
            }
            return $q.reject(response);
        }

      };
    }
})();
