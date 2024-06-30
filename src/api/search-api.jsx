import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { useAlbums } from "./album-api";

const apiUrl = "https://albums-api-spej.onrender.com/api";

const searchAlbums = async (query) => {
  try {
    const response = await axios.get(`${apiUrl}/search/?q=${query}`);

    return response.data;
  } catch (error) {
    console.error("Error searching albums:", error);
    return []; // Return empty array if there's an error
  }
};

const useDebounce = (func, delay) => {
  let timer;
  return function (...args) {
    const context = this;
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(context, args), delay);
  };
};

const useSortedAlbums = (albums, sortedField, sortOrder) => {
  return useCallback(() => {
    if (!sortedField) return albums;

    return [...albums].sort((a, b) => {
      const sortOrderFactor = sortOrder === "asc" ? 1 : -1;
      if (sortedField === "year_of_release") {
        return sortOrderFactor * (a.year_of_release - b.year_of_release);
      } else if (sortedField === "ranking") {
        return sortOrderFactor * (a.ranking - b.ranking);
      } else {
        return 0;
      }
    });
  }, [albums, sortedField, sortOrder]);
};

const AlbumSearchSortLogic = () => {
  const {
    albums: initialAlbums,
    isLoading: isInitialLoading,
    isError,
  } = useAlbums(); // Fetch albums using useAlbums hook
  const [query, setQuery] = useState("");
  const [albums, setAlbums] = useState(initialAlbums); // Initialize albums with fetched albums
  const [sortedField, setSortedField] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setAlbums(initialAlbums); // Update albums when initialAlbums change
  }, [initialAlbums]);

  const handleSearchDebounced = useDebounce(handleSearch, 5000);

  async function handleSearch(query) {
    setQuery(query);
    if (query.trim() === "") {
      setAlbums(initialAlbums); // Reset albums to initial state if query is empty
      setIsLoading(false);
      return;
    }
    setIsLoading(true);
    const fetchedAlbums = await searchAlbums(query);
    setAlbums(fetchedAlbums);
    setIsLoading(false);
  }

  const handleSort = (field) => {
    setSortedField(field);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const sortedAlbums = useSortedAlbums(albums, sortedField, sortOrder)();

  if (isInitialLoading) {
    return {
      albums: [],
      isLoading: true,
      query,
      sortedField,
      sortOrder,
      handleSearch: handleSearchDebounced,
      handleSort,
    };
  }

  if (isError) {
    console.error("Error loading albums.");
    return {
      albums: [],
      isLoading: false,
      query,
      sortedField,
      sortOrder,
      handleSearch: handleSearchDebounced,
      handleSort,
    };
  }

  return {
    albums: sortedAlbums,
    isLoading,
    query,
    sortedField,
    sortOrder,
    handleSearch: handleSearchDebounced,
    handleSort,
    setSortedField,
    setSortOrder,
  };
};

export default AlbumSearchSortLogic;