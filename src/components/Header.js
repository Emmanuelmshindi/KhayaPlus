import Khaya_logo from "./Khaya_logo.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext, CartContext } from "../Context";

function Header(props) {
  const userContext = useContext(UserContext);
  const { cartData, setCartData } = useContext(CartContext);
  if (cartData == null) {
    var cartItems = 0;
  } else {
    cartItems = cartData.length;
  }

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img className="m-2" src={Khaya_logo} alt="..." height="30"></img>
          KhayaPlus
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/categories">
                Categories
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                My Account
              </a>
              <ul className="dropdown-menu">
                {userContext !== "true" && (
                  <>
                    <li>
                      <Link className="dropdown-item" to="/customer/register">
                        Register
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/customer/login">
                        Login
                      </Link>
                    </li>
                  </>
                )}
                {userContext === "true" && (
                  <>
                    <li>
                      <Link className="dropdown-item" to="/customer/logout">
                        LogOut
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="customer/dashboard">
                        Dashboard
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/surveyors">
                        Notifications
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Experts Panel
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/expert/register">
                    Register
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/expert/login">
                    Login
                  </Link>
                </li>
                <Link className="dropdown-item" to="/expert/logout">
                  LogOut
                </Link>
                <li>
                  <Link className="dropdown-item" to="/expert/dashboard">
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/expert/notifications">
                    Notifications
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Our Experts
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/architects">
                    Architects
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/engineers">
                    Structural Engineers
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/surveyors">
                    Quantity Surveyors
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/surveyors">
                    Contractors
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/surveyors">
                    Fundis
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/checkout">
                My Cart ({cartItems})
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/checkout">
                New Projects (4)
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
