(function() {

	angular.module('app').directive('listCovers', [listCovers]);

	function listCovers() {
		return {
			scope: {
				data: '='
			},
			templateUrl: 'views/directives/list-covers.html'
		};
	}

})();
