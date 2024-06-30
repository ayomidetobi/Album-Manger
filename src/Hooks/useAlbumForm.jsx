import { useState, useEffect } from "react";
import { getInputFields } from "../utils/InputFieldConfig";
import { validateAlbumForm } from "../utils/FormValidation";

export const useAlbumForm = (initialData, handleSave) => {
  const [albumData, setAlbumData] = useState({
    album_name: "",
    artist_name: "",
    year_of_release: "",
    ranking: "",
    genre: "Jazz",
    description: "",
    album_cover: null,
    tracks: [{ name: "", duration: "" }],
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (initialData) {
      setAlbumData({
        album_name: initialData.album_name,
        artist_name: initialData.artist_name,
        year_of_release: initialData.year_of_release,
        ranking: initialData.ranking,
        genre: initialData.genre,
        description: initialData.description,
        album_cover: null,
        tracks: initialData.tracks.map((track) => ({
          name: track.name,
          duration: track.duration,
        })),
      });
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAlbumData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setAlbumData((prevData) => ({
      ...prevData,
      album_cover: e.target.files[0],
    }));
  };

  const handleTrackChange = (index, e) => {
    const { name, value } = e.target;
    const updatedTracks = albumData.tracks.map((track, i) =>
      i === index ? { ...track, [name]: value } : track,
    );
    setAlbumData((prevData) => ({
      ...prevData,
      tracks: updatedTracks,
    }));
  };

  const addTrack = () => {
    setAlbumData((prevData) => ({
      ...prevData,
      tracks: [...prevData.tracks, { name: "", duration: "" }],
    }));
  };

  const removeTrack = (index) => {
    const updatedTracks = albumData.tracks.filter((_, i) => i !== index);
    setAlbumData((prevData) => ({
      ...prevData,
      tracks: updatedTracks,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateAlbumForm(albumData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    handleSave(albumData);
    setAlbumData({
      album_name: "",
      artist_name: "",
      year_of_release: "",
      ranking: "",
      genre: "Jazz",
      description: "",
      album_cover: null,
      tracks: [{ name: "", duration: "" }],
    });
  };
  const inputFields = getInputFields(
    albumData,
    handleChange,
    handleFileChange,
    errors,
  );

  return {
    albumData,
    handleChange,
    handleFileChange,
    handleTrackChange,
    addTrack,
    removeTrack,
    handleSubmit,
    inputFields,
    errors,
  };
};
