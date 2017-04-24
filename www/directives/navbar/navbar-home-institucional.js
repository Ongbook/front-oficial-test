(function () {
  'use strict';
  angular
    .module('og.directives')
    .directive('navbarHomeInstitucional',
      function () {
        return{
          templateUrl: 'templates/navbar-institucional/narbar-home-institucional.html'
        }
      });
})();