angular.module('designz', ['ui.bootstrap', 'ui.utils', 'ngRoute', 'ngAnimate', 'pages']);

angular.module('designz').config(function($routeProvider) {

    /* Add New Routes Above */
    $routeProvider.otherwise({redirectTo:'/'});

});

angular.module('designz').run(function($rootScope) {

    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

    $rootScope.$on('databank-ready', function() {
        $rootScope.gifts = $rootScope.db.gifts;
    });

});
