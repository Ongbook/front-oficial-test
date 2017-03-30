(function () {
  'use strict';
  angular
    .module('og.directives')
    .directive('navbarHomeInstitucional',
      function () {
        return{
          templateUrl: 'templates/instucional/narbar-home-institucional.html'
        }
      });
})();