import { Link } from "react-router-dom";
function Sidebar() {
  return (
    <div className="list-group">
      <Link
        to="/expert/dashboard"
        className="list-group-item list-group-item-action"
        aria-current="true"
      >
        Dashboard
      </Link>
      <Link
        to="/expert/add-project"
        className="list-group-item list-group-item-action"
        aria-current="true"
      >
        Add Project
      </Link>
      <Link
        to="/expert/orders"
        className="list-group-item list-group-item-action"
      >
        New Projects
      </Link>
      <Link
        to="/expert/projects"
        className="list-group-item list-group-item-action"
      >
        My projects
      </Link>
      <Link
        to="/expert/clients"
        className="list-group-item list-group-item-action"
      >
        Clients
      </Link>
      <Link
        to="/expert/reports"
        className="list-group-item list-group-item-action"
      >
        Reports
      </Link>
      <Link
        to="/expert/profile"
        className="list-group-item list-group-item-action"
      >
        Profile
      </Link>
      <Link
        to="/expert/change-password"
        className="list-group-item list-group-item-action"
      >
        Update Password
      </Link>
      <Link
        to="/expert/con-man"
        className="list-group-item list-group-item-action"
      >
        Manage Construction
      </Link>
      <Link
        to="/expert/login"
        className="list-group-item list-group-item-action text-danger"
      >
        Logout
      </Link>
    </div>
  );
}

export default Sidebar;
