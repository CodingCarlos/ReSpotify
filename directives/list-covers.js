(function() {

	angular.module('app').directive('listCovers', [listCovers]);

	function listCovers() {
		return {
			// scope: {
			// 	title: '@',
			// 	action: '='
			// },
			templateUrl: 'views/directives/list-covers.html'
		};
	}

})();
