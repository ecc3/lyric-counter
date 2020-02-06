# lyric-counter

A front end application that returns the average, maximum and minimum number of words for a given artist's songs. A word cloud can also be displayed that shows the most common words from across the songs sampled.

## Project Demo

This project is hosted via GitHub pages and can be viewed [here](https://ecc3.github.io/lyric-counter/).

## Getting started

To set-up this project:

- This project was made using Node v13.5.0 so you may need to update to this version to run locally.
- Clone the project by copying into the terminal:

```bash
git clone https://github.com/ecc3/lyric-counter
```

- Change directory into the project:

```bash
cd lyric-counter
```

- Install all dependencies by running:

```bash
npm install
```

- To view a live version of your local project run npm start, and the app will open in your browser.

```bash
npm start
```

## Features

1. APIs: This app uses the Musicbrainz API, found [here](https://musicbrainz.org/doc/Development/XML_Web_Service/Version_2), in order to get a list of songs for a given artist. It also uses the APISeeds api to find the lyrics for each of the artist's songs, found [here](https://apiseeds.com/documentation/lyrics).

2. APISeeds only allows limited submissions per minute so pressing submit in the app can produce different responses. Currently the app sends 50 songs to the APISeeds lyrics API so two sumbits can be done per minute.

3. Word cloud: The word cloud is generated via the react-wordcloud library, and is currently configured to only display words of at least 6 letters to prevent it from being dominated by short uninteresting words.
