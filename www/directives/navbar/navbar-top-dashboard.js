(function () {
  'use strict';
  angular
    .module('og.directives')
    .directive('navbarHeaderDashboard',
      function () {
        return{
          templateUrl: 'templates/dashboard/navbar-dashboard/navbar-dashboard.html'
        }
      });
})();