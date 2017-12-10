
angular.module('app').controller('LoginController', ['Spotify', '$state', '$timeout', LoginController]);

function LoginController(Spotify, $state, $timeout) {
	
	var self = this;

	self.isLogging = false;

	self.login = login;


	function login() {
		Spotify.login()
			.then(function() {
				console.log('Wololooooo...');
			})
			.catch(function() {
				console.log('Error...');
			});

		// Start checking
		self.isLogging = true;

		checkToken();
	}

	function checkToken() {

		var token = localStorage.getItem('spotify-token');

		// Check localstorage token
		if(token) {
			// Move token to session
			console.log(token);
			Spotify.setAuthToken(token);
			
			// Remove token or whatever
			// localStorage.removeItem('spotify-token');

			// Go to home ^^
			self.isLogging = false;
			$state.go('tab', {tab: 'home'});

		} else {
			// timeout a new call to this function
			$timeout(checkToken, 1000);
		}

	}

}