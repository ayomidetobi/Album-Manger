import { useQuery, useMutation, useQueryClient } from 'react-query';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setAlbums, addAlbum, updateAlbum, deleteAlbum } from '../redux/albumSlice';
import { toast } from 'react-toastify';

const apiUrl = 'http://127.0.0.1:8000/api';

export const useAlbums = () => {
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
      const response = await axios.post(`${apiUrl}/albums/`, newAlbum);
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
      const response = await axios.put(`${apiUrl}/albums/${id}/`, updatedAlbum);
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
      await axios.delete(`${apiUrl}/albums/${id}/`);
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

  return { albums: albumData, isLoading, isError, createAlbum, updateAlbum: updateAlbumMutation, deleteAlbum: deleteAlbumMutation };
};

export const useAlbum = (id) => {
  return useQuery(['album', id], async () => {
    const response = await axios.get(`${apiUrl}/albums/${id}/`);
    console.log(response.data)
    return response.data;
    
  });
};
