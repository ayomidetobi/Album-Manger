import { useState, useEffect } from 'react';

export const useAlbumModals = (createAlbum, updateAlbum) => {
  const [token, setToken] = useState(null);
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showEditAlbumModal, setShowEditAlbumModal] = useState(false);

  useEffect(() => {
    const authData = localStorage.getItem('auth');
    if (authData) {
      const parsedAuthData = JSON.parse(authData);
      setToken(parsedAuthData.token);
      console.log(token)
    }
  }, [token]);

  const handleSaveEditAlbum = (updatedAlbum) => {
    if (selectedAlbum) {
      updateAlbum.mutate({ id: selectedAlbum.id, updatedAlbum }, {
        onSuccess: () => {
          setShowEditAlbumModal(false);
          setSelectedAlbum(null);
        },
      });
    }
  };

  const handleSaveAlbum = (albumData) => {
    createAlbum.mutate(albumData, {
      onSuccess: () => {
        setShowModal(false);
      },
    });
  };

  return {
    token,
    selectedAlbum,
    showModal,
    showEditAlbumModal,
    setShowModal,
    setShowEditAlbumModal,
    setSelectedAlbum,
    handleSaveEditAlbum,
    handleSaveAlbum,
  };
};
