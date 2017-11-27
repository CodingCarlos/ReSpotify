(function() {

	angular.module('app').controller('ProfileController', ['Spotify', ProfileController]);

	function ProfileController(Spotify) {
		var self = this;

		self.user = null;
		self.albums = null;

		// Spotify.login();

		Spotify.getCurrentUser().then(function (response) {
			self.user = response.data;
		});

		Spotify.getSavedUserAlbums().then(function (response) {
			self.albums = response.data.items;
			console.log(self.albums);
		});


		// self.current = player;

		// document.querySelector('#player-page').addEventListener('swipedown', function() {
		// 	window.history.back();
		// });
	}

})();
