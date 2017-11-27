(function() {

	angular.module('app').directive('barPlayer', ['player', '$state', barPlayer]);

	function barPlayer(player, $state) {
		return {
			templateUrl: 'views/directives/bar-player.html',
			link: {
				pre: function(scope) {
					scope.current = player;
				},

				post: function() {
					document.querySelector('.bar-player').addEventListener('swipeup', function() {
						$state.go('player');
					});
				}
			}
		};
	}

})();
