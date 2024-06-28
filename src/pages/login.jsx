import { useState } from "react";
import { useAuth } from "../api/auth-api";
import { useNavigate } from "react-router-dom";
import FormInput from "../components/Forms/FormInputs";

function Login() {
  const { login } = useAuth();
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
      <main className="form-signin w-80 m-auto">
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
          <button className="btn btn-primary w-100 py-2" type="submit">
            Sign in
          </button>
          <p className="mt-5 mb-3 text-body-secondary">© 2017–2024</p>
        </form>
      </main>
    </div>
  );
}

export default Login;
