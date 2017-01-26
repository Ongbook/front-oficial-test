(function () {
  'use strict';
  angular
    .module('og.directives')
    .directive('dashboard',
      function () {
        return {
          templateUrl: '../../../templates/dashboard/dashboard/dashboard.html'
        }
      });
})();