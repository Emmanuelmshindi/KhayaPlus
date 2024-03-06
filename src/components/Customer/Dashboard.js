import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";

function Dashboard(props) {
  return (
    <div className="container mt-4">
      {/* <h3 className="mb-4 mt-3">Login</h3> */}
      <div className="row">
        <div className="col-md-3 col-12 mb-2">
          <Sidebar />
        </div>
        <div className="col-md-9 col-12 mb-2">
          <div className="row">
            <div className="col-md-4 mb-3">
              <div className="card">
                <div className="card-body text-center">
                  <h4>Total projects</h4>
                  <h4>
                    <a href="#">25</a>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="card">
                <div className="card-body text-center">
                  <h4>Total Favourites</h4>
                  <h4>
                    <a href="#">25</a>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="card">
                <div className="card-body text-center">
                  <h4>All Locations</h4>
                  <h4>
                    <a href="#">3</a>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="card">
                <div className="card-body text-center">
                  <h4>Manage your construction</h4>
                  <div>
                    <Link to="/customer/con-man" className="btn btn-dark ms-1">
                      Launch Construction
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
