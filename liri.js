require("dotenv").config();
const keys = require("./keys");

const spotify = new Spotify(keys.spotify);