(function() {

	angular.module('app').directive('listTitle', [listTitle]);

	function listTitle() {
		return {
			scope: {
				title: '@',
				action: '='
			},
			templateUrl: 'views/directives/list-title.html'
		};
	}

})();
