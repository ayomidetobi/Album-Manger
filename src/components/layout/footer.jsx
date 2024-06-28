import { NavLink } from "react-router-dom";
function Footer() {
  const navLinks = [
    { name: "Home", to: "/" },
    { name: "Albums", to: "/albums" },
    { name: "About", to: "/about" },
  ];
  return (
    <div className="bg-black">
      <div className="container px-20">
        <footer className="py-3 ">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink
                  to={link.to}
                  className={`nav-link font-black text-white px-2`}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
          <p className="text-center text-white">© 2024 Company, Inc</p>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
