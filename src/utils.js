export const getArtistSongs = artist => {
  fetch(
    `http://musicbrainz.org/ws/2/artist/?query=artist:${artist}%20&fmt=json`
  )
    .then(response => response.json())
    .then(artistData => {
      return artistData.artists[0].id;
    })
    .then(artistID => {
      console.log(artistID);
    });
};
