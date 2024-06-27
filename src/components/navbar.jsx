import { NavLink } from 'react-router-dom';
import { setActiveLink } from '../redux/ActiveLinkSlice';
import { useSelector, useDispatch } from 'react-redux';
import { logoutSuccess } from '../redux/authSlice';

const navLinks = [
  { name: 'Home', to: '/' },
  { name: 'Albums', to: '/albums' },
  { name: 'About', to: '/about' },
];

const Navbar = () => {
  const activeLink = useSelector((state) => state.activeLink);
  const dispatch = useDispatch();

  const handleLinkClick = (linkName) => {
    dispatch(setActiveLink(linkName));
  };
  const isAuthenticated = useSelector((state) => state.auth.token);

  const handleLogout = () => {
    // Dispatch logout action to clear authentication state
    dispatch(logoutSuccess());
  };

  return (
    <div className="container lg:px-20 md:px-5 bg-transparent">
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4">
        <div className="col-md-3 mb-2 mb-md-0">
          <NavLink to="/" className="text-dark lg:text-4xl sm:text-base font-black bi bi-music-note-beamed">
            AlbumManager
          </NavLink>
        </div>

        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          {navLinks.map((link, index) => (
            <li key={index}>
              <NavLink
                to={link.to}
                className={`nav-link font-black text-dark px-2`}
                activeClassName="active"
                onClick={() => handleLinkClick(link.name)}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {isAuthenticated ? (
            <button type="button" className="btn btn-dark me-2" onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <>
              <button type="button" className="btn btn-outline-dark me-2">Login</button>
              <button type="button" className="btn btn-dark">Sign-up</button>
            </>
          )}
      </header>
    </div>
  );
};

export default Navbar;
