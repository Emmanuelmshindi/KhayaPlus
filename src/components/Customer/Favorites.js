import { Link } from "react-router-dom";

import Sidebar from "./Sidebar";

function Favorites() {
  return (
    <div className="container mt-4">
      {/* <h3 className="mb-4 mt-3">Favorites (4)</h3> */}
      <div className="row">
        <div className="col-md-3 col-12 mb-2">
          <Sidebar />
        </div>

        <div className="col-md-9 col-12">
          <div className="row">
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>
                      <p>
                        <Link>Maisonette design</Link>
                      </p>
                    </td>
                    <td>$5000</td>
                    <td>
                      <button className="btn btn-dark btn-sm">Remove</button>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>
                      <p>
                        <Link>Apartment design</Link>
                      </p>
                    </td>
                    <td>$5000</td>
                    <td>
                      <button className="btn btn-dark btn-sm">Remove</button>
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>
                      <p>
                        <Link>Attic redesign</Link>
                      </p>
                    </td>
                    <td>$5000</td>
                    <td>
                      <button className="btn btn-dark btn-sm">Remove</button>
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>
                      <p>
                        <Link>Bungalow</Link>
                      </p>
                    </td>
                    <td>$5000</td>
                    <td>
                      <button className="btn btn-dark btn-sm">Remove</button>
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

export default Favorites;
