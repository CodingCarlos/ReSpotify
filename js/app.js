
(function() {

	angular.module('app', ['onsen', 'ui.router', 'spotify'])
	.config(function($stateProvider, $urlRouterProvider, SpotifyProvider) {

		// By default show Tab 1 - Navigator MasterDetail example
		$urlRouterProvider.otherwise('/home');

		$stateProvider
			.state('navigator', {
				abstract: true,
				resolve: {
					loaded: function($rootScope) {
						console.log('Loading navigator...');
						return $rootScope.mainPage.resetToPage('views/tabs.html');
					}
				}
			})
			.state('tab', {
				parent: 'navigator',
				url: '/:tab'
			})
			.state('player', {
				parent: 'navigator',
				url: '/player',
				onEnter: ['$rootScope', function($rootScope) {
					$rootScope.mainPage.pushPage('views/player.html');
				}],
				onExit: function($rootScope) {
					$rootScope.mainPage.popPage();
				}
			});


		// Spotify client
		SpotifyProvider.setClientId(config.spotify.clientId);
		SpotifyProvider.setRedirectUri(config.spotify.callback);
		SpotifyProvider.setScope('user-read-private playlist-read-private playlist-modify-private playlist-modify-public user-top-read user-read-recently-played user-library-read user-library-modify user-follow-read user-follow-modify');
		// If you already have an auth token
		SpotifyProvider.setAuthToken(config.spotify.token);

	});
})();

