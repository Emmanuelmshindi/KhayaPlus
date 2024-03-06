import { Link } from "react-router-dom";

import Sidebar from "./Sidebar";

function AddAddress() {
  return (
    <div className="container mt-4">
      {/* <h3 className="mb-4 mt-3">Favorites (4)</h3> */}
      <div className="row">
        <div className="col-md-3 col-12 mb-2">
          <Sidebar />
        </div>

        <div className="col-md-9 col-12 mb-3">
          <div className="card">
            <h4 className="card-header">Add Location</h4>
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label for="address" className="form-label">
                    Address
                  </label>
                  <textarea type="text" className="form-control" id="address" />
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

export default AddAddress;
