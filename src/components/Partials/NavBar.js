import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav className="col-md-6">
            <Link to="/mission">Mission</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/apod">Photo of the Day</Link>
        </nav>
    );
}
export default NavBar;
