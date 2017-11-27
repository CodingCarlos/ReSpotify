(function() {

	angular.module('app').controller('PlayerController', ['player', PlayerController]);

	function PlayerController(player) {
		var self = this;

		self.current = player;

		document.querySelector('#player-page').addEventListener('swipedown', function() {
			window.history.back();
		});
	}

})();
