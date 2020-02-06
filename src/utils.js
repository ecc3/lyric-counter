export const getArtistId = (artist, updateAverageWordCount) => {
  fetch(
    `http://musicbrainz.org/ws/2/artist/?query=artist:${artist}%20&fmt=json`
  )
    .then(response => response.json())
    .then(artistData => {
      const artistId = artistData.artists[0].id;
      getSongsByArtistId(artistId, artist, updateAverageWordCount);
    });
};

const getSongsByArtistId = (artistId, artist, updateAverageWordCount) => {
  fetch(`http://musicbrainz.org/ws/2/work?artist=${artistId}&fmt=json&limit=5`)
    .then(response => response.json())
    .then(worksData => {
      getAverageWordcountForSongs(
        worksData.works,
        artist,
        updateAverageWordCount
      );
    });
};

const getAverageWordcountForSongs = (songs, artist, updateAverageWordCount) => {
  //instrumental songs?
  //x3 repeats instead of lyrics?
  let totalWordCount = 0;
  let songCount = songs.length;
  let completedCount = 0;
  songs.forEach(song => {
    fetch(
      `https://orion.apiseeds.com/api/music/lyric/${artist}/${song.title}?apikey=8bNBudkPyx6tcUQJ2dRUtPlUF6bwnRGPlrvnIZ4m5ySvJIziuLAP8o4TJ8uST2A7`
    )
      .then(response => response.json())
      .then(lyricData => {
        const songWordCount = lyricData.result.track.text.split(/\s/).length;
        totalWordCount += songWordCount;
        completedCount++;
        if (completedCount === songCount) {
          const averageWordCount = (totalWordCount / songCount).toFixed(1);
          updateAverageWordCount(averageWordCount);
        }
      })
      .catch(err => {
        songCount--;
        if (completedCount === songCount) {
          const averageWordCount = (totalWordCount / songCount).toFixed(1);
          updateAverageWordCount(averageWordCount);
        }
      });
  });
};
