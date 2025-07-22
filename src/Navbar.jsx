import {Link} from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">

            <div className="container-fluid">
                <Link className="navbar-brand p-2" to="/">
                    <img src="#" alt="logo" style={{ width: "25%" }} />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">

                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    <form className="d-flex" role="search">
                        <ul className="navbar-nav mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="signup">Signup</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="product">Products</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="about">About</Link>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </nav>
    )
}