var config = {
	spotify: {
		clientId: 'YOUR_API_CLIENT_ID',
		callback: 'http://example.com/callback.html',
		token: localStorage.getItem('spotify-token') || 'USER_TOKEN_KEY'
	}
};