import { Link } from "react-router-dom";
function Sidebar() {
  return (
    <div className="list-group">
      <Link
        to="/customer/dashboard"
        className="list-group-item list-group-item-action"
        aria-current="true"
      >
        Dashboard
      </Link>
      <Link
        to="/customer/orders"
        className="list-group-item list-group-item-action"
      >
        Projects
      </Link>
      <Link
        to="/customer/favorites"
        className="list-group-item list-group-item-action"
      >
        Favourites
      </Link>
      <Link
        to="/customer/profile"
        className="list-group-item list-group-item-action"
      >
        Profile
      </Link>
      <Link
        to="/customer/change-password"
        className="list-group-item list-group-item-action"
      >
        Update Password
      </Link>
      <Link
        to="/customer/addresses"
        className="list-group-item list-group-item-action"
      >
        Locations
      </Link>
      <Link
        to="/customer/con-man"
        className="list-group-item list-group-item-action"
      >
        Manage Construction
      </Link>
      <Link
        to="/customer/login"
        className="list-group-item list-group-item-action text-danger"
      >
        Logout
      </Link>
    </div>
  );
}

export default Sidebar;
