import { Link } from "react-router-dom";

import Sidebar from "./Customer/Sidebar";

function OrderSuccess() {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-8 offset-2">
          <div className="card">
            <div className="card-body text-center">
              <p>
                <i className="fa fa-check-circle text-success fa-3x"></i>
              </p>
              <h3 className="text-success">Thanks for your business!</h3>
              <h6>
                Kindly proceed to download your drawings. You can now launch
                your project on the construction management portal.
              </h6>
              <p className="mt-4">
                <Link to="/" className="btn btn-dark">
                  Home
                </Link>
                <Link to="/customer/dashboard" className="btn btn-dark ms-2">
                  Dashboard
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderSuccess;
