import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAlbums } from '../api/album-api';
import { toast } from 'react-toastify';
import ConfirmationModal from '../utils/confirm';
import { decodeBase64 } from '../utils/Encoder'; // Import the decode function

export const useAlbumDetails = () => {
  const { id: encodedId } = useParams();
  const [token, setToken] = useState(null);
  const navigate = useNavigate();
  const [showEditAlbumModal, setShowEditAlbumModal] = useState(false);
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [decodedId, setDecodedId] = useState(null);
  const { updateAlbum, deleteAlbum, useGetAnAlbum } = useAlbums(token);

  useEffect(() => {
    const authData = localStorage.getItem('auth');
    if (authData) {
      const parsedAuthData = JSON.parse(authData);
      setToken(parsedAuthData.token);
    }

    const decoded = decodeBase64(encodedId);
    const id = parseInt(decoded, 10);
    if (!isNaN(id)) {
      setDecodedId(id);
    } else {
      console.error('Failed to decode ID');
      navigate('/error');
    }
  }, [encodedId, navigate]);

  const { data: album } = useGetAnAlbum(decodedId, {
    enabled: !!decodedId, 
  });

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
          deleteAlbum.mutate(decodedId, {
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
