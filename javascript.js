// Importing Axios for NPM
const axios = require('axios');

//Importing Spotify for NPM
var Spotify = require("node-spotify-api");


if (process.argv[2] === 'spotify') {

  spotifySong(process.argv[3]);

}

if (process.argv[2] === 'events') {

  bandTown(process.argv[3]);

}



if (process.argv[2] === 'movies') {

    movies(process.argv[3]);

}

function spotifySong() {

var spotify = new Spotify({
  id: "b2592c6c2d464c2398be62f4c9489d11",
  secret: "22198b559f034d83912bda7c9ae25b8e"
});

spotify.search({ type: 'track', query: process.argv[3] }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log("---",data.tracks.items[0]); 

});
 


}

function bandTown() {

  axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp")
  .then(function(response) {
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })


}

function movies(movieTitle) {


    axios.get(' http://www.omdbapi.com/?t='+movieTitle+'&apikey=7d844e63')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })


}




