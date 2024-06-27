export const getInputFields = (albumData, handleChange, handleFileChange) => [
    {
      label: 'Album Name',
      id: 'formAlbumName',
      name: 'album_name',
      type: 'text',
      value: albumData.album_name,
      onChange: handleChange,
    },
    {
      label: 'Artist Name',
      id: 'formArtistName',
      name: 'artist_name',
      type: 'text',
      value: albumData.artist_name,
      onChange: handleChange,
    },
    {
      label: 'Year of Release',
      id: 'formYearOfRelease',
      name: 'year_of_release',
      type: 'number',
      value: albumData.year_of_release,
      onChange: handleChange,
    },
    {
      label: 'Ranking',
      id: 'formRanking',
      name: 'ranking',
      type: 'number',
      value: albumData.ranking,
      onChange: handleChange,
      min: '1',
      max: '5',
    },
    {
      label: 'Genre',
      id: 'formGenre',
      name: 'genre',
      type: 'select',
      value: albumData.genre,
      onChange: handleChange,
      options: [
        { label: 'Jazz', value: 'jazz' },
        { label: 'Rock', value: 'rock' },
        { label: 'Pop', value: 'pop' },
        { label: 'Classical', value: 'classical' },
        { label: 'Hip-Hop', value: 'hip-Hop' },
      ],
    },
    {
      label: 'Description',
      id: 'formDescription',
      name: 'description',
      type: 'textarea',
      value: albumData.description,
      onChange: handleChange,
    },
    {
      label: 'Album Cover',
      id: 'formAlbumCover',
      name: 'album_cover',
      type: 'file',
      value: albumData.album_cover,
      onChange: handleFileChange,
    },
  ];