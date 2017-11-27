
angular.module('app', ['onsen', 'ui.router'])
.config(function($stateProvider, $urlRouterProvider) {

	// By default show Tab 1 - Navigator MasterDetail example
	$urlRouterProvider.otherwise('/home');

	$stateProvider

		// Tab 1 - MasterDetail example - Navigator init
		.state('navigator', {
			abstract: true,
			// templateUrl: 'views/tabs.html',
			// url: '/navigator', // Optional url prefix
			resolve: {
				loaded: function($rootScope) {
					console.log('Loading navigator...');
					return $rootScope.mainPage.resetToPage('views/tabs.html');
				}
			}
		})

		// Tabs
		.state('tab', {
			parent: 'navigator',
			url: '/:tab'
		})

		// Player
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

});
