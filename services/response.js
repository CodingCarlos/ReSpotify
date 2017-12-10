(function() {
	
	angular.module('app').service('httpResponse', ['$state', responseService]);

	function responseService($state) {
		var response = {
			error: catchError
		};

		return response;

		function catchError(response) {
			if(response.status === 401) {
				$state.go('login');
			} else {
				console.error(response);
			}
		}
	}

})();