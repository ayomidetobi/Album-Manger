import { useState, useEffect } from "react";
import { useAlbums } from "../api/album-api";

export const useAlbumModals = () => {
  const [token, setToken] = useState(null);
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showEditAlbumModal, setShowEditAlbumModal] = useState(false);

  useEffect(() => {
    const authData = localStorage.getItem("auth");
    if (authData) {
      const parsedAuthData = JSON.parse(authData);
      setToken(parsedAuthData.token);
    }
  }, []);

  const { createAlbum, updateAlbum, isCreatingAlbum, isUpdatingAlbum } =
    useAlbums(token);

  const handleSaveEditAlbum = (updatedAlbum) => {
    if (selectedAlbum) {
      updateAlbum({
        id: selectedAlbum.id,
        updatedAlbum,
      });
    }
  };

  const handleSaveAlbum = (albumData) => {
    createAlbum(albumData);
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
    isCreatingAlbum,
    isUpdatingAlbum,
  };
};
