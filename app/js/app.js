'use strict';

/* App Module */

var listApp= angular.module('ListApp', [
  'ngRoute',
  'ListCtrl',
  'ui.bootstrap',

]);
listApp.directive("scroll", function ($window) {
    return function(scope, element, attrs) {
      var raw = element[0];
        angular.element($window).bind("scroll", function() {
           console.log();
             if ($window.pageYOffset+$window.innerHeight >raw.offsetHeight && scope.scrl) {
                  scope.$apply(attrs.scroll);
                   console.log('end');
             } else {
               console.log('Not scrolled to end');


             }

        });
    };
});
listApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        controller: 'MainListCtrl'
      })

  }]);
