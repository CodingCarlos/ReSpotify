(function() {

	angular.module('app').controller('HomeController', ['Spotify', HomeController]);

	function HomeController(Spotify) {
		var self = this;

		self.album = null;

		// Spotify.login();

		Spotify.getAlbum('0sNOF9WDwhWunNAHPD3Baj').then(function (data) {
			console.log(data);
			self.album = data;
		});

		// self.current = player;

		// document.querySelector('#player-page').addEventListener('swipedown', function() {
		// 	window.history.back();
		// });
	}

})();
