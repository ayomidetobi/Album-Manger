import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAlbums } from '../api/album-api';
import { toast } from 'react-toastify';
import ConfirmationModal from '../utils/confirm';

export const useAlbumDetails = () => {
  const { id } = useParams();
  const [token, setToken] = useState(null);
  const navigate = useNavigate();
  const [showEditAlbumModal, setShowEditAlbumModal] = useState(false);
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [album, setAlbum] = useState(null);
  const { updateAlbum, deleteAlbum, getAnAlbum } = useAlbums(token);

  useEffect(() => {
    const authData = localStorage.getItem('auth');
    if (authData) {
      const parsedAuthData = JSON.parse(authData);
      setToken(parsedAuthData.token);
      getAnAlbum(id).then(setAlbum);
      console.log(token)
    }
  }, [album]);

  const handleEdit = () => {
    setSelectedAlbum(album);
    setShowEditAlbumModal(true);
  };

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

  const handleDelete = () => {
    toast.info(
      <ConfirmationModal
        message="Are you sure you want to delete this album?"
        onConfirm={() => {
          deleteAlbum.mutate(id, {
            onSuccess: () => {
              navigate('/albums');
            },
          });
        }}
      />,
    );
  };

  return {
    album,
    showEditAlbumModal,
    handleEdit,
    handleSaveEditAlbum,
    handleDelete,
    setShowEditAlbumModal,
    selectedAlbum,
  };
};
