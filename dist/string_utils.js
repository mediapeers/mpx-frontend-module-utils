// Generated by CoffeeScript 1.10.0
(function() {
  angular.module("mpx-frontend-module-utils").factory('$stringUtils', function() {
    var camelize, capitalize;
    capitalize = function(string) {
      return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    };
    camelize = function(string) {
      return (_.map(string.split('_'), function(chunk) {
        return capitalize(chunk);
      })).join('');
    };
    return {
      camelize: camelize,
      capitalize: capitalize
    };
  });

}).call(this);
