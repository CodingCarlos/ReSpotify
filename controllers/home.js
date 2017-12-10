(function() {

	angular.module('app').controller('HomeController', ['Spotify', HomeController]);

	function HomeController(Spotify) {
		var self = this;

		// self.album = null;
		self.newReleases = null;


		// Spotify.getAlbum('0sNOF9WDwhWunNAHPD3Baj').then(function (data) {
		// 	console.log(data);
		// 	self.album = data;
		// });

		Spotify.getNewReleases().then(function (data) {
			console.log('---------------------------');
			console.log(data.data.albums.items);
			self.newReleases = data.data.albums.items;
			console.log('---------------------------');
		});
	}

})();
