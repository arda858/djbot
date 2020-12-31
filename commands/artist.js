module.exports = {
  name: 'artist',
  description: 'Artist name',
  execute(msg, args) {
	
	var SpotifyWebApi = require('spotify-web-api-node');

const artistName = args[0]

const spotifyApi = new SpotifyWebApi({
  clientId: '8a0b928e6be541a5a4021f2ee431ceac',
  clientSecret: '9c960d552f96484686e5ae4c5aa03961'
});


	// Retrieve an access token
spotifyApi
  .clientCredentialsGrant()
  .then(function(data) {
    // Set the access token on the API object so that it's used in all future requests
    spotifyApi.setAccessToken(data.body['access_token']);

	return spotifyApi.searchTracks('artist:'+artistName,{ limit: 3})
 


  })
  .then(function(data) {
   
    data.body.tracks.items.forEach(function(track, index) {
    
	    setTimeout(function(){
            msg.channel.send('-p '+track.name)
        }, index * 4000);
		

	  
    });
  })
  .catch(function(err) {
    console.log('Unfortunately, something has gone wrong.', err.message);
  });
	
	
	
  },
};
