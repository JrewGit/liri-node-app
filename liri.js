// require("dotenv").config();
// const keys = require("./keys");
// const spotify = new Spotify(keys.spotify);
const request = require("request");
const moment = require("moment");

if (process.argv[2] === "concert-this") {
    // console.log(process.argv.splice(3).join(" "));
    let artist = process.argv[3];
    let bandsURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
    // console.log(bandsURL)
    request(bandsURL, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            for (let i = 0; i < JSON.parse(body).length; i++) {
                console.log(JSON.parse(body)[i].venue.name);
                console.log(JSON.parse(body)[i].venue.country);
                console.log(moment(JSON.parse(body)[i].datetime).format('L'));
                console.log("----------");
            }
        }
    })
} else if (process.argv[2] === "spotify-this-song") {

} else if (process.argv[2] === "movie-this") {

} else if (process.argv[2] === "do-what-it-says") {

}