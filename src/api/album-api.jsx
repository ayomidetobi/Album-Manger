import { useQuery, useMutation, useQueryClient } from 'react-query';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setAlbums, addAlbum, updateAlbum, deleteAlbum,setAlbum } from '../redux/albumSlice';
import { toast } from 'react-toastify';

const apiUrl = 'http://127.0.0.1:8000/api';

export const useAlbums = (token) => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  const { data: albumData, isLoading, isError } = useQuery(
    'albums',
    async () => {
      const response = await axios.get(`${apiUrl}/albums/`);
      return response.data;
    },
    {
      onSuccess: (data) => dispatch(setAlbums(data)),
    }
  );

  const createAlbum = useMutation(
    async (newAlbum) => {
      const formData = new FormData();
      formData.append('album_name', newAlbum.album_name);
      formData.append('artist_name', newAlbum.artist_name);
      formData.append('year_of_release', newAlbum.year_of_release);
      formData.append('ranking', newAlbum.ranking);
      formData.append('genre', newAlbum.genre);
      formData.append('description', newAlbum.description);
      if (newAlbum.album_cover) {
        formData.append('album_cover', newAlbum.album_cover);
      }
      newAlbum.tracks.forEach((track, index) => {
        formData.append(`tracks[${index}][name]`, track.name);
        formData.append(`tracks[${index}][duration]`, track.duration);
      });

      const response = await axios.post(`${apiUrl}/albums/`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Token ${token}`,
        },
      });
      return response.data;
    },
    {
      onSuccess: (data) => {
        dispatch(addAlbum(data));
        toast.success('Album created successfully');
        queryClient.invalidateQueries('albums');
      },
      onError: () => toast.error('Failed to create album'),
    }
  );

  const updateAlbumMutation = useMutation(
    async ({ id, updatedAlbum }) => {
      const formData = new FormData();
      formData.append('album_name', updatedAlbum.album_name);
      formData.append('artist_name', updatedAlbum.artist_name);
      formData.append('year_of_release', updatedAlbum.year_of_release);
      formData.append('ranking', updatedAlbum.ranking);
      formData.append('genre', updatedAlbum.genre);
      formData.append('description', updatedAlbum.description);
      if (updatedAlbum.album_cover) {
        formData.append('album_cover', updatedAlbum.album_cover);
      }
      updatedAlbum.tracks.forEach((track, index) => {
        formData.append(`tracks[${index}][name]`, track.name);
        formData.append(`tracks[${index}][duration]`, track.duration);
      });

      const response = await axios.put(`${apiUrl}/albums/${id}/`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Token ${token}`,
        },
      });
      return response.data;
    },
    {
      onSuccess: (data) => {
        dispatch(updateAlbum(data));
        toast.success('Album updated successfully');
        queryClient.invalidateQueries('albums');
      },
      onError: () => toast.error('Failed to update album'),
    }
  );
  const deleteAlbumMutation = useMutation(
    async (id) => {
      await axios.delete(`${apiUrl}/albums/${id}/`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
    },
    {
      onSuccess: (_, id) => {
        dispatch(deleteAlbum(id));
        toast.success('Album deleted successfully');
        queryClient.invalidateQueries('albums');
      },
      onError: () => toast.error('Failed to delete album'),
    }
  );
  const getAnAlbum = async (id) => {
    const response = await axios.get(`${apiUrl}/albums/${id}/`);
    dispatch(setAlbum(response.data));
    return response.data;
  };

  return { albums: albumData, isLoading, isError, createAlbum, updateAlbum:updateAlbumMutation, deleteAlbum: deleteAlbumMutation,getAnAlbum };
};


