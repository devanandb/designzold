angular.module('designz').directive('databank', ['$parse','$http', '$rootScope', function($parse, $http, $rootScope) {
	return {
		restrict: 'E',
		replace: true,
		scope: { accept: "=" },
		link: function(scope, elem, attr){
			var files = attr['files'].split(' ');
			var promises = {};
			var db = {};
			var fn = $parse(attr['onReady']);
			angular.forEach(files, function(file) {
				promises[file] = $http.get('fixtures/' + file + '.json');
			});
			var i = 1;
			angular.forEach(promises, function(req, name){
				req.then(function(res){
					db[name] = res.data;
					if(files.length === i){
						$rootScope.db = db;
						$rootScope.$emit('databank-ready', db);
					}

					i++;
				});
			});
			scope.safeApply = function(fn) {
				var phase = this.$root.$$phase;
				if(phase === '$apply' || phase === '$digest') {
					if(fn && (typeof(fn) === 'function')) {
					fn();
				}
				} else {
					this.$apply(fn);
				}
			};
			scope.safeApply(function() {
				fn(scope);
			});
		}
	};
}]);