import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess, logoutSuccess } from "../redux/authSlice";
import { toast } from "react-toastify";

const apiUrl = "https://albums-api-spej.onrender.com/api";

export const useAuth = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const login = async (username, password) => {
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
      toast.error("Login failed");
    }
  };

  const logout = () => {
    dispatch(logoutSuccess());
    toast.success("Logged out successfully");
  };

  return { auth, login, logout };
};
