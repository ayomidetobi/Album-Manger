import { Link, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutSuccess } from "../../redux/authSlice";

const navLinks = [
  { name: "Home", to: "/" },
  { name: "Albums", to: "/albums" },
  { name: "About", to: "/about" },
];

const Navbar = () => {
  const dispatch = useDispatch();

  const isAuthenticated = useSelector((state) => state.auth.token);
  const user = useSelector((state) => state.auth.user);

  const handleLogout = () => {
    dispatch(logoutSuccess());
  };

  return (
  
    <div className="container lg:px-20 md:px-5 bg-transparent">
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4">
        <div className="col-md-3 mb-2 mb-md-0">
          <NavLink
            to="/"
            className="text-dark lg:text-4xl sm:text-base font-black bi bi-music-note-beamed"
          >
            AlbumManager
          </NavLink>
        </div>
          
        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          {navLinks.map((link, index) => (
            <li key={index}>
              <NavLink
                to={link.to}
                className={`nav-link font-black text-dark px-2`}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="col-md-3 text-end">
          {isAuthenticated ? (
            <>
              <span className="text-dark pe-3 font-black">welcome {user}</span>
              <button
                type="button"
                className="btn btn-dark me-2"
                onClick={handleLogout}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to={"/login"} className="btn btn-outline-dark me-2">
                LOGIN
              </Link>
              <Link className="btn btn-dark " to={"/login"}>
                {" "}
                SIGN UP
              </Link>
            </>
          )}
        </div>
      </header>
    </div>
  );
};

export default Navbar;
