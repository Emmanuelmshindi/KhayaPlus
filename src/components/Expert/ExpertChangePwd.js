import { Link } from "react-router-dom";

import ExpertSidebar from "./ExpertSidebar";

function ExpertChangePwd() {
  return (
    <div className="container mt-4">
      {/* <h3 className="mb-4 mt-3">Favorites (4)</h3> */}
      <div className="row">
        <div className="col-md-3 col-12 mb-2">
          <ExpertSidebar />
        </div>

        <div className="col-md-9 col-12 mb-3">
          <div className="card">
            <h4 className="card-header">Update Password</h4>
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label for="pwd" className="form-label">
                    Old Password
                  </label>
                  <input
                    type="pwd"
                    className="form-control"
                    id="pwd"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="mb-3">
                  <label for="pwd" className="form-label">
                    New Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="pwd"
                    aria-describedby="emailHelp"
                  />
                </div>
                <button type="submit" className="btn btn-dark">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpertChangePwd;
