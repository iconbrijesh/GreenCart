import "./index.css";  // 👈 Import your CSS file
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";  // 👈 Import cart icon

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-custom">
            <div className="container-fluid">

                <Link className="navbar-brand p-2" to="/">
                    <img src="/images/logo.jpg" alt="logo" style={{ width: "25%" }} />
                </Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">

                    <div className="mx-auto search-form">
                        <form className="d-flex w-100" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>

                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex flex-row nav-links">

                        <li className="nav-item">
                            <Link className="nav-link" to="/product">Products</Link>
                        </li>

                        {/* Cart Icon */}
                        <li className="nav-item">
                            <Link className="nav-link" to="/cart">
                                <FaShoppingCart size={18} style={{ marginBottom: '2px' }} /> Cart
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link active" to="/signup">Signup</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/seller">Become Seller</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
