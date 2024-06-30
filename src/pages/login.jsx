import { useState } from "react";
import { useAuth } from "../api/auth-api";
import { useNavigate } from "react-router-dom";
import FormInput from "../components/Forms/FormInputs";
import GlobalLoader from "../components/Loader/GlobalLoader";
import Navbar from "../components/layout/navbar";

function Login() {
  const { login, isUserLoading } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleChange = (setter) => (event) => {
    setter(event.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    await login(username, password);
    navigate("/albums");
  };

  return (
    <div>
      <Navbar />
      {isUserLoading && <GlobalLoader />}
      <main className="form-signin w-80 m-auto py-16">
        <form onSubmit={handleSubmit}>
          <h1 className="h3 mb-3 fw-normal mt-20">Please sign in</h1>

          <FormInput
            type="text"
            value={username}
            onChange={handleChange(setUsername)}
            id="floatingInput"
            placeholder="username"
            label="Username"
          />

          <FormInput
            type="password"
            value={password}
            onChange={handleChange(setPassword)}
            id="floatingPassword"
            placeholder="Password"
            label="Password"
          />

          <div className="form-check text-start my-3">
            <input
              className="form-check-input"
              type="checkbox"
              value="remember-me"
              id="flexCheckDefault"
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Remember me
            </label>
          </div>
          <button
            className="btn btn-warning bg-orange-700 text-white font-black w-100 py-2"
            type="submit"
          >
            Sign in
          </button>
          <p className="mt-5 mb-3 text-body-secondary">© 2017–2024</p>
        </form>
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default Login;
