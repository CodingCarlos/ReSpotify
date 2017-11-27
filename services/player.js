(function() {
	
	angular.module('app').service('player', [playerService]);

	function playerService() {
		var player = {
			cover: 'https://is4-ssl.mzstatic.com/image/thumb/Features/dd/f8/16/dj.sshvytxd.jpg/600x600bf.jpg',
			title: 'Never Gonna Give You Up',
			author: 'Rick Astley',
			time: 120,
			timeAvg: 40,
			duration: 280
		};

		return player;
	}

})();