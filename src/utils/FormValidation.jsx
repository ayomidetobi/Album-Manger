export const validateAlbumForm = (albumData) => {
  const errors = {};

  if (!albumData.album_name.trim()) {
    errors.album_name = "Album Name is required";
  }
  if (!albumData.artist_name.trim()) {
    errors.artist_name = "Artist Name is required";
  }
  if (albumData.year_of_release < 1900 || albumData.year_of_release > 2024) {
    errors.year_of_release = "Year must be between 1900 and 2024";
  }
  if (albumData.ranking < 1 || albumData.ranking > 5) {
    errors.ranking = "Ranking must be between 1 and 5";
  }

  return errors;
};
