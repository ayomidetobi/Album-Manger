import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess, logoutSuccess } from "../redux/authSlice";
import { toast } from "react-toastify";
import extractErrorMessage from "../utils/ErrorsMessage";

const apiUrl = "https://albums-api-spej.onrender.com/api";

export const useAuth = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  // State to track loading state
  const [isUserLoading, setIsUserLoading] = useState(false);

  const login = async (username, password) => {
    setIsUserLoading(true);
    try {
      const response = await axios.post(`${apiUrl}/auth/token/login/`, {
        username,
        password,
      });
      dispatch(
        loginSuccess({ user: username, token: response.data.auth_token }),
      );
      toast.success("Logged in successfully");
    } catch (error) {
      const errorMessage = extractErrorMessage(error);
      toast.error(errorMessage);
    } finally {
      setIsUserLoading(false);
    }
  };

  const logout = () => {
    setIsUserLoading(true);
    try {
      dispatch(logoutSuccess());
      toast.success("Logged out successfully");
    } catch (error) {
      const errorMessage = extractErrorMessage(error);
      toast.error(errorMessage);
    } finally {
      setIsUserLoading(false);
    }
  };

  return { auth, login, logout, isUserLoading };
};
