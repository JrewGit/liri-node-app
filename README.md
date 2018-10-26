# liri-node-app
LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI is a command line node app that takes in parameters and gives you back data.

## concert-this
When the user types node liri.js concert-this, the user can then submit an artist/band and a list of all of that artist's/band's concerts will populate along with the location of the venue and the date of the concert. In the example below, the user submitted "Cardi B" as their artist.
![Concert-this Cardi B](https://github.com/JrewGit/liri-node-app/blob/master/images/concert-this:cardi-b.png)

## spotify-this-song
When the user types node liri.js spotify-this-song, the user can then submit a song and information of that song will populate (i.e artist, song name, a link to a sample of the song, and the album name). If the user doesn't provide a song, the result will default to "The Sign" by Ace of Base.In the example below, the user didn't provide a song.
![Spotify-this-song None](https://github.com/JrewGit/liri-node-app/blob/master/images/spotify-this-song:none.png)

## spotify-this-song
In the example below, the user provided the song "Let Her Go".
![Spotify-this-song Let Her Go](https://github.com/JrewGit/liri-node-app/blob/master/images/spotify-this-song:let-her-go.png)

## movie-this
When the user types node liri.js movie-this, the user can then submit a movie and information of that movie will populate (i.e title, year, IMBD rating, Rotten Tomatoes score, country, language, plot and actors.)
). If the user doesn't provide a movie, the result will default to "Mr. Robot". In the example below, the user didn't provide a movie.
![Movie-this None](https://github.com/JrewGit/liri-node-app/blob/master/images/movie-this:none.png)

## movie-this
In the example below, the user provided the movie "Click".
![Movie-this Click](https://github.com/JrewGit/liri-node-app/blob/master/images/movie-this:click.png)

## do-what-it-says concert-this
When the user types node liri.js do-what-this-says, the app will pull the text from the random.txt file and if the text says "concert-this" first, then the program will submit the second word as the artist/band and a list of all of that artist's/band's concerts will populate along with the location of the venue and the date of the concert. In the example below, the user submitted "Drake" as their artist.
![Do-what-it-says Concert-this Drake](https://github.com/JrewGit/liri-node-app/blob/master/images/do-what-it-says:concert-this:drake.png)

## do-what-it-says spotify-this-song
When the user types node liri.js do-what-this-says, the app will pull the text from the random.txt file and if the text says "spotify-this-song" first, then the program will submit the second word as a song and information of that song will populate (i.e artist, song name, a link to a sample of the song, and the album name). In the example below, the user provided the song "I Want it That Way".
![Do-what-it-says Spotify-this-song I Want It That Way](https://github.com/JrewGit/liri-node-app/blob/master/images/do-what-it-says:spotify-this-song:i-want-it-that-way.png)

## do-what-it-says movie-this
When the user types node liri.js do-what-this-says, the app will pull the text from the random.txt file and if the text says "movie-this" first, then the program will submit the second word as a movie and information of that movie will populate (i.e title, year, IMBD rating, Rotten Tomatoes score, country, language, plot and actors.)
). In the example below, the user provided the movie "50 First Dates".
![Do-what-it-says Movie-this 50 First Dates](https://github.com/JrewGit/liri-node-app/blob/master/images/do-what-it-says:movie-this:50-first-dates.png)