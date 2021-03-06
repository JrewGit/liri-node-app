require("dotenv").config();
const keys = require("./keys");
const Spotify = require('node-spotify-api');
const spotify = new Spotify(keys.spotify);
const request = require("request");
const moment = require("moment");
const fs = require("fs");

if (process.argv[2] === "concert-this") {

    let artist = [];
    for (let i = 3; i < process.argv.length; i++) {
        artist.push(process.argv[i]);
    };
    artist = artist.join(" ");
    // console.log(artist)
    let bandsURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
    // console.log(bandsURL)
    request(bandsURL, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            for (let i = 0; i < JSON.parse(body).length; i++) {
                // console.log(JSON.parse(body)[i].venue);
                console.log(`Name of the venue: ${JSON.parse(body)[i].venue.name}`);
                // console.log(`${JSON.parse(body)[i].venue.region}`);
                console.log(`Venue location: ${JSON.parse(body)[i].venue.city}, ${JSON.parse(body)[i].venue.country}`);
                console.log(`Date of the Event: ${moment(JSON.parse(body)[i].datetime).format('L')}`);
                console.log("----------");
            }
        }
    })

} else if (process.argv[2] === "spotify-this-song") {

    let song = [];
    if (process.argv[3] === undefined) {
        song.push("The Sign");
        song = song.join(" ");
        spotify.search({ type: 'track', query: song, limit: 20 }, function (err, data) {
            if (err) {
                return console.log('Error occurred: ' + err);
            }
            // console.log(data.tracks.items[7]);
            console.log("----------");
            console.log(`Artist(s): ${data.tracks.items[7].album.artists[0].name}`);
            console.log(`Song's name: ${data.tracks.items[7].name}`);
            console.log(`Preview link from Spotify: ${data.tracks.items[7].preview_url}`);
            console.log(`Album: ${data.tracks.items[7].album.name}`);
            console.log("----------");
        });
    } else {
        for (let i = 3; i < process.argv.length; i++) {
            song.push(process.argv[i]);
        };
        song = song.join(" ");
        spotify.search({ type: 'track', query: song, limit: 1 }, function (err, data) {
            if (err) {
                return console.log('Error occurred: ' + err);
            }
            // console.log(data.tracks.items);
            console.log("----------");
            console.log(`Artist(s): ${data.tracks.items[0].album.artists[0].name}`);
            console.log(`Song's name: ${data.tracks.items[0].name}`);
            console.log(`Preview link from Spotify: ${data.tracks.items[0].preview_url}`);
            console.log(`Album: ${data.tracks.items[0].album.name}`);
            console.log("----------");
        });
    };

} else if (process.argv[2] === "movie-this") {

    let movieName = [];
    if (process.argv[3] === undefined) {
        movieName.push("Mr. Nobody");
    } else {
        for (let i = 3; i < process.argv.length; i++) {
            movieName.push(process.argv[i]);
        };
    };
    movieName = movieName.join(" ")
    let movieURL = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
    // console.log(movieURL);
    request(movieURL, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            // console.log(JSON.parse(body));
            console.log("----------");
            console.log(`Title: ${JSON.parse(body).Title}`);
            console.log(`Year: ${JSON.parse(body).Year}`);
            console.log(`IMDB Rating: ${JSON.parse(body).imdbRating}`);
            console.log(`Rotten Tomatoes Rating: ${JSON.parse(body).Ratings[1].Value}`);
            console.log(`Country: ${JSON.parse(body).Country}`);
            console.log(`Language: ${JSON.parse(body).Language}`);
            console.log(`Plot: ${JSON.parse(body).Plot}`);
            console.log(`Actors: ${JSON.parse(body).Actors}`);
            console.log("----------");
        }
    })

} else if (process.argv[2] === "do-what-it-says") {

    fs.readFile("./random.txt", "utf8", function (err, data) {
        if (err) {
            console.log(err)
        } else {
            // console.log(data);
            let dataList = data.split(",");
            // console.log(dataList);
            if (dataList[0] === "concert-this") {
                let artist = dataList[1];
                let quoteless = artist.replace(/"/g,"")
                let bandsURL = "https://rest.bandsintown.com/artists/" + quoteless + "/events?app_id=codingbootcamp";
                // console.log(bandsURL);
                request(bandsURL, function (error, response, body) {
                    if (!error && response.statusCode === 200) {
                        for (let i = 0; i < JSON.parse(body).length; i++) {
                            console.log(JSON.parse(body)[i].venue.name);
                            console.log(`${JSON.parse(body)[i].venue.city}, ${JSON.parse(body)[i].venue.country}`);
                            console.log(moment(JSON.parse(body)[i].datetime).format('L'));
                            console.log("----------");
                        }
                    }
                })

            } else if (dataList[0] === "spotify-this-song") {

                spotify.search({ type: 'track', query: dataList[1], limit: 1 }, function (err, data) {
                    if (err) {
                        return console.log('Error occurred: ' + err);
                    }
                    // console.log(data.tracks.items);
                    console.log("----------");
                    console.log(data.tracks.items[0].album.artists[0].name);
                    console.log(data.tracks.items[0].name);
                    console.log(data.tracks.items[0].preview_url);
                    console.log(data.tracks.items[0].album.name);
                    console.log("----------");

                });
            } else if (dataList[0] === "movie-this") {
                let movieURL = "http://www.omdbapi.com/?t=" + dataList[1] + "&y=&plot=short&apikey=trilogy";
                // console.log(movieURL);
                request(movieURL, function (error, response, body) {
                    if (!error && response.statusCode === 200) {
                        // console.log(JSON.parse(body));
                        console.log("----------");
                        console.log(`Title: ${JSON.parse(body).Title}`);
                        console.log(`Year: ${JSON.parse(body).Year}`);
                        console.log(`IMDB Rating: ${JSON.parse(body).imdbRating}`);
                        console.log(`Rotten Tomatoes Rating: ${JSON.parse(body).Ratings[1].Value}`);
                        console.log(`Country: ${JSON.parse(body).Country}`);
                        console.log(`Language: ${JSON.parse(body).Language}`);
                        console.log(`Plot: ${JSON.parse(body).Plot}`);
                        console.log(`Actors: ${JSON.parse(body).Actors}`);
                        console.log("----------");
                    }
                })
            };
        };
    });

};