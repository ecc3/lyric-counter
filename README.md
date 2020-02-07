# lyric-counter

A front end application that returns the average, maximum and minimum number of words for a given artist's songs. A word cloud can also be displayed that shows the most common words from across the songs sampled.

## Project Demo

This project is hosted via GitHub pages and can be viewed [here](https://ecc3.github.io/lyric-counter/index.html).

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

1. APIs: This app uses the MusicBrainz API, found [here](https://musicbrainz.org/doc/Development/XML_Web_Service/Version_2), in order to get a list of songs for a given artist. It also uses the lyrics.ovh API to find the lyrics for each of the artist's songs, found [here](https://lyricsovh.docs.apiary.io/#reference/0/lyrics-of-a-song/search?console=1).

2. When calculating the average number of words across an artist's songs it was decided not to take into account instrumental songs nor songs that included repeated lines e.g. x3. Changing this made very little difference to the average across the number sampled.

3. Word cloud: The word cloud is generated via the react-wordcloud library, and is configured to only display words of at least 6 letters to prevent it from being dominated by short uninteresting words.
