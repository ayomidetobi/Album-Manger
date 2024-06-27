import logo from "./logo.png"
const Navbar = () => {
    return (
        <div>
    <nav className="navbar navbar-expand-lg bg-transparent pt-12">
    <div className="container px-20">
        <img alt="holder" src={logo}  width={115 } />
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 font-black ms-36">
            <li className="nav-item">
            <a className="nav-link active text-xs f-w-600 text-dark" aria-current="page" href="#">STUDIO</a>
            </li>
            <li className="nav-item">
            <a className="nav-link text-xs f-w-600 text-dark ms-7.5" href="#">COMMUNITY</a>
            </li>
            <li className="nav-item">
            <a className="nav-link text-xs f-w-600 text-dark ms-7.5" href="#">SOUNDS</a>
            </li>
            <li className="nav-item">
            <a className="nav-link text-xs f-w-600 text-dark ms-7.5" href="#">PLUGINS</a>
            </li>
            <li className="nav-item">
            <a className="nav-link text-xs f-w-600 text-dark ms-7.5" href="#">BLOGS</a>
            </li>
        </ul>
        <form className="d-flex" role="search">
            <button className="btn  rounded-pill px-7.5 text-xs text-white me-7.5" type="submit">LOGIN</button>
            <button className="btn  rounded-pill px-8 text-xs btn-trans" type="submit">SIGN UP</button>
        </form>
        </div>
    </div>
    </nav>
        </div>
    );
}

export default Navbar;
