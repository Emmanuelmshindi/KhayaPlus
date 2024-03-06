import { Link } from "react-router-dom";

import ExpertSidebar from "./ExpertSidebar";

function Clients() {
  return (
    <div className="container mt-4">
      {/* <h3 className="mb-4 mt-3">Login</h3> */}
      <div className="row">
        <div className="col-md-3 col-12 mb-2">
          <ExpertSidebar />
        </div>
        <div className="col-md-9 col-12 mb-2">
          <div className="row">
            <div>
              <Link to="#" className="btn btn-dark mb-3">
                Add Client
              </Link>
            </div>
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Mobile</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>
                      <p>
                        <Link>John Doe</Link>
                      </p>
                    </td>
                    <td>jdoe@gmail.com</td>
                    <td>+44 343443 53</td>
                    <td>
                      <button className="btn btn-dark btn-sm">Orders</button>
                      <button className="btn btn-danger btn-sm ms-1">
                        Remove Client
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>
                      <p>
                        <Link>Jane Dee</Link>
                      </p>
                    </td>
                    <td>jdee@gmail.com</td>
                    <td>+44 3333443 53</td>
                    <td>
                      <button className="btn btn-dark btn-sm">Orders</button>
                      <button className="btn btn-danger btn-sm ms-1">
                        Remove Client
                      </button>
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

export default Clients;
