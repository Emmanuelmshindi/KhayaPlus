import { Link } from "react-router-dom";

import Sidebar from "./ExpertSidebar";

function ExpertProfile() {
  return (
    <div className="container mt-4">
      {/* <h3 className="mb-4 mt-3">Favorites (4)</h3> */}
      <div className="row">
        <div className="col-md-3 col-12 mb-2">
          <Sidebar />
        </div>

        <div className="col-md-9 col-12 mb-3">
          <div className="card">
            <h4 className="card-header">Update Profile</h4>
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label for="firstName" className="form-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="mb-3">
                  <label for="lastName" className="form-label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="mb-3">
                  <label for="username" className="form-label">
                    Username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="mb-3">
                  <label for="email" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div class="mb-3">
                  <div>
                    <label for="email" className="form-label">
                      Profile Picture
                    </label>
                  </div>
                  <div className="input-group">
                    <input
                      type="file"
                      class="form-control"
                      id="inputGroupFile02"
                    />
                    <label class="input-group-text" for="inputGroupFile02">
                      Upload
                    </label>
                  </div>
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

export default ExpertProfile;
