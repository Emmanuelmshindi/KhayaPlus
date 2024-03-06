import { Link } from "react-router-dom";

import ExpertSidebar from "./ExpertSidebar";

function ExpertOrders() {
  return (
    <div className="container mt-4">
      {/* <h3 className="mb-4 mt-3">Login</h3> */}
      <div className="row">
        <div className="col-md-3 col-12 mb-2">
          <ExpertSidebar />
        </div>
        <div className="col-md-9 col-12 mb-2">
          <div className="row">
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>
                      <p>
                        <Link>Maisonette arch. design</Link>
                      </p>
                    </td>
                    <td>$5000</td>
                    <td>
                      <span className="text-success">
                        <i className="fa fa-check-circle me-2"></i>Completed
                      </span>
                    </td>
                    <td>
                      <div className="dropdown">
                        <button
                          className="btn btn-secondary dropdown-toggle"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Change Status
                        </button>
                        <ul className="dropdown-menu">
                          <li>
                            <a className="dropdown-item" href="#">
                              Concept Design
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Detail design
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Completed
                            </a>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>

                    <td>
                      <p>
                        <Link>Maisonette detail design</Link>
                      </p>
                    </td>
                    <td>$5000</td>
                    <td>
                      <span className="text-success">
                        <i className="fa fa-check-circle me-2"></i>Completed
                      </span>
                    </td>
                    <td>
                      <div className="dropdown">
                        <button
                          className="btn btn-secondary dropdown-toggle"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Change Status
                        </button>
                        <ul className="dropdown-menu">
                          <li>
                            <a className="dropdown-item" href="#">
                              Concept Design
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Detail design
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Completed
                            </a>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>
                      <p>
                        <Link>Structural design</Link>
                      </p>
                    </td>
                    <td>$5000</td>
                    <td>
                      <span className="text-secondary">
                        <i className="fa fa-spin fa-spinner me-2"></i>Ongoing
                      </span>
                    </td>
                    <td>
                      <div className="dropdown">
                        <button
                          className="btn btn-secondary dropdown-toggle"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Change Status
                        </button>
                        <ul className="dropdown-menu">
                          <li>
                            <a className="dropdown-item" href="#">
                              Concept Design
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Detail design
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Completed
                            </a>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>
                      <p>
                        <Link>Bill of Quantities</Link>
                      </p>
                    </td>
                    <td>$5000</td>
                    <td>
                      <span className="text-danger">
                        <i className="fa fa-times-circle me-2"></i>Cancelled
                      </span>
                    </td>
                    <td>
                      <div className="dropdown">
                        <button
                          className="btn btn-secondary dropdown-toggle"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Change Status
                        </button>
                        <ul className="dropdown-menu">
                          <li>
                            <a className="dropdown-item" href="#">
                              Concept Design
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Detail design
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Completed
                            </a>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div>
              <Link to="/customer/con-man" className="btn btn-dark ms-1">
                Launch Construction
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpertOrders;
