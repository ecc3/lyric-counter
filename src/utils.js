export const getArtistId = (artist, updateData) => {
  fetch(
    `https://musicbrainz.org/ws/2/artist/?query=artist:${artist}%20&fmt=json`
  )
    .then(response => response.json())
    .then(artistData => {
      const artistId = artistData.artists[0].id;
      getSongsByArtistId(artistId, artist, updateData);
    })
    .catch(err => {
      updateData("", "", "", [], true);
    });
};

const getSongsByArtistId = (artistId, artist, updateData) => {
  fetch(
    `https://musicbrainz.org/ws/2/work?artist=${artistId}&fmt=json&limit=100`
  )
    .then(response => response.json())
    .then(worksData => {
      getAverageWordcountForSongs(worksData.works, artist, updateData);
    })
    .catch(err => {
      updateData("", "", "", [], true);
    });
};

const getAverageWordcountForSongs = (songs, artist, updateData) => {
  if (songs.length === 0) {
    return updateData("", "", "", [], true);
  }
  let totalWordCount = 0;
  let maxWordCount;
  let minWordCount;
  let songCount = songs.length;
  let completedCount = 0;
  let allSongWords = [];
  songs.forEach(song => {
    fetch(`https://api.lyrics.ovh/v1/${artist}/${song.title}`)
      .then(response => response.json())
      .then(lyricData => {
        const songWords = lyricData.lyrics.split(/\s/);
        allSongWords = allSongWords.concat(songWords);

        const songWordCount = songWords.length;
        totalWordCount += songWordCount;
        completedCount++;

        if (!minWordCount) {
          minWordCount = songWordCount;
          maxWordCount = songWordCount;
        }
        if (songWordCount < minWordCount) {
          minWordCount = songWordCount;
        }
        if (songWordCount > maxWordCount) {
          maxWordCount = songWordCount;
        }
        if (completedCount === songCount) {
          const averageWordCount = (totalWordCount / songCount).toFixed(0);
          updateData(
            averageWordCount,
            minWordCount,
            maxWordCount,
            allSongWords
          );
        }
      })
      .catch(err => {
        songCount--;
        if (completedCount === songCount) {
          const averageWordCount = (totalWordCount / songCount).toFixed(0);
          updateData(
            averageWordCount,
            minWordCount,
            maxWordCount,
            allSongWords
          );
        }
      });
  });
};
