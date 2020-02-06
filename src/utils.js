export const getArtistId = artist => {
  fetch(
    `http://musicbrainz.org/ws/2/artist/?query=artist:${artist}%20&fmt=json`
  )
    .then(response => response.json())
    .then(artistData => {
      const artistId = artistData.artists[0].id;
      getSongsByArtistId(artistId);
    });
};

const getSongsByArtistId = artistId => {
  fetch(`http://musicbrainz.org/ws/2/work?artist=${artistId}&fmt=json&limit=5`)
    .then(response => response.json())
    .then(worksData => {
      console.log(worksData);
    });
};
