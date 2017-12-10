(function() {

	angular.module('app').controller('ProfileController', ['Spotify', 'httpResponse', ProfileController]);

	function ProfileController(Spotify, httpResponse) {
		var self = this;

		self.user = null;
		self.albums = null;

		Spotify.getCurrentUser()
			.then(function(response) {
				self.user = response.data;
			})
			.catch(httpResponse.error);

		Spotify.getSavedUserAlbums()
			.then(function (response) {
				self.albums = response.data.items;
				console.log(' ---- self.albums ---- ');
				console.log(self.albums);
			})
			.catch(httpResponse.error);


		// self.current = player;

		// document.querySelector('#player-page').addEventListener('swipedown', function() {
		// 	window.history.back();
		// });
	}

})();
