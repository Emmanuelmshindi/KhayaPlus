import { Link } from "react-router-dom";
import ExpertSidebar from "./ExpertSidebar";

function ExpertProjects(props) {
  return (
    <div className="container mt-4">
      {/* <h3 className="mb-4 mt-3">Login</h3> */}
      <div className="row">
        <div className="col-md-3 col-12 mb-2">
          <ExpertSidebar />
        </div>
        <div className="col-md-9 col-12 mb-2">
          <div>
            <h3>
              <Link to="/expert/add-project" className="btn btn-dark mb-2">
                <i className="fa fa-plus-circle me-1"></i>Add Project
              </Link>
            </h3>
          </div>
          <div>
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Project</th>
                    <th>Fees</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Product Title</td>
                    <td>$50000</td>
                    <td>Published</td>
                    <td>
                      <a href="#" className="btn btn-info btn-sm">
                        View
                      </a>
                      <a href="#" className="btn btn-primary ms-1 btn-sm">
                        Edit
                      </a>
                      <a href="#" className="btn btn-danger ms-1 btn-sm">
                        Delete
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpertProjects;
