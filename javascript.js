// Importing Axios for NPM
const axios = require('axios');

//Importing Spotify for NPM
var Spotify = require("node-spotify-api");


// Assigning argumenents within the array for Node

// assigning the string 'spotify' to the 3rd argument in node
if (process.argv[2] === 'spotify') {

  spotifySong(process.argv[3]);

}

// assigning the string 'events' to the 3rd argument in node
if (process.argv[2] === 'events') {

  bandTown(process.argv[3]);

}

// assigning the string 'movies' to the 3rd argument in node
if (process.argv[2] === 'movies') {

  movies(process.argv[3]);

}



// this function uses an api call and uses the 4th argument in node as the query.
function spotifySong() {

  var spotify = new Spotify({
    id: "b2592c6c2d464c2398be62f4c9489d11",
    secret: "22198b559f034d83912bda7c9ae25b8e"
  });

  spotify.search({
    type: 'track',
    query: process.argv[3]
  }, function (err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
    console.log("---", data.tracks.items[0]);
  });
}


// this function uses an api call and uses the 4th argument in node as the query.
function bandTown(artist) {

  axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp")
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })

}

// this function uses an api call and uses the 4th argument in node as the query.
function movies(movieTitle) {

  axios.get(' http://www.omdbapi.com/?t=' + movieTitle + '&apikey=7d844e63')
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
}