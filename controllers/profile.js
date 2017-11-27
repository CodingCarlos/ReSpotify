(function() {

	angular.module('app').controller('ProfileController', ['Spotify', ProfileController]);

	function ProfileController(Spotify) {
		var self = this;

		self.user = null;

		// Spotify.login();

		Spotify.getCurrentUser().then(function (response) {
			console.log(response);
			self.user = response.data;
		});

		// self.current = player;

		// document.querySelector('#player-page').addEventListener('swipedown', function() {
		// 	window.history.back();
		// });
	}

})();
