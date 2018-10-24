// require("dotenv").config();
// const keys = require("./keys");
// const spotify = new Spotify(keys.spotify);
const request = require("request");
const moment = require("moment");

if (process.argv[2] === "concert-this") {
    // console.log(process.argv.splice(3).join(" "));
    let artist = [];
    for (let i = 3; i < process.argv.length; i++) {
        artist.push(process.argv[i]);
    };
    artist = artist.join(" ")
    // console.log(artist)
    let bandsURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
    // console.log(bandsURL)
    request(bandsURL, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            for (let i = 0; i < JSON.parse(body).length; i++) {
                // if (JSON.parse(body).length > 0) {
                // console.log(JSON.parse(body)[i].venue);
                console.log(JSON.parse(body)[i].venue.name);
                console.log(`${JSON.parse(body)[i].venue.city}, ${JSON.parse(body)[i].venue.country}`);
                console.log(moment(JSON.parse(body)[i].datetime).format('L'));
                console.log("----------");
                // } else {
                //     console.log("This artist doesn't have a tour scheduled.")
                // }
            }
        }
    })
} else if (process.argv[2] === "spotify-this-song") {

} else if (process.argv[2] === "movie-this") {
    let movieName = [];
    for (let i = 3; i < process.argv.length; i++) {
        movieName.push(process.argv[i]);
    };
    movieName = movieName.join(" ")
    let movieURL = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
    console.log(movieURL);
    request(movieURL,function(error,response,body) {
        if (!error && response.statusCode === 200) {
            // console.log(JSON.parse(body));
            console.log(`Title: ${JSON.parse(body).Title}`);
            console.log(`Year: ${JSON.parse(body).Year}`);
            console.log(`IMDB Rating: ${JSON.parse(body).imdbRating}`);
            console.log(`Rotten Tomatoes Rating: ${JSON.parse(body).Ratings[1].Value}`);
            console.log(`Country: ${JSON.parse(body).Country}`);
            console.log(`Language: ${JSON.parse(body).Language}`);
            console.log(`Plot: ${JSON.parse(body).Plot}`);
            console.log(`Actors: ${JSON.parse(body).Actors}`);
        }
    })
} else if (process.argv[2] === "do-what-it-says") {

}