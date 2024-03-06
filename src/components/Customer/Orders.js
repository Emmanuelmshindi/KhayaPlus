import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import Sidebar from "./Sidebar";

function Orders() {
  const baseUrl = "http://127.0.0.1:8000/api";
  const customerId = localStorage.getItem("customer_id");
  const [OrderItems, setOrderItems] = useState([]);

  useEffect(() => {
    fetchData(baseUrl + "/customer/" + customerId + "/orderitems");
  }, []);

  function fetchData(baseurl) {
    fetch(baseurl)
      .then((response) => response.json())
      .then((data) => {
        setOrderItems(data.results);
      });
  }

  // console.log(OrderItems);

  return (
    <div className="container mt-4">
      {/* <h3 className="mb-4 mt-3">Login</h3> */}
      <div className="row">
        <div className="col-md-3 col-12 mb-2">
          <Sidebar />
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
                <tbody className="text-center">
                  {OrderItems.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <p>
                            <Link
                              to={`/product/${item.product.slug}/${item.product.id}`}
                            >
                              {item.product.title}
                            </Link>
                          </p>
                        </td>
                        <td>$ {item.product.price}</td>
                        <td>
                          <span className="text-success">
                            {item.order.order_status == true && (
                              <i className="fa fa-check-circle me-2 text-success"></i>
                            )}
                            {item.order.order_status == false && (
                              <i className="fa fa-check-circle me-2 text-dark"></i>
                            )}
                          </span>
                        </td>
                        <td>
                          {item.order.order_status == true && (
                            <a
                              target="_blank"
                              download
                              href={item.product.product_file}
                              className="btn btn-dark btn-sm"
                            >
                              Download
                            </a>
                          )}
                        </td>
                      </tr>
                    );
                  })}

                  {/* <tr>
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
                      <button className="btn btn-dark btn-sm">Download</button>
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
                      <button className="btn btn-secondary btn-sm">
                        Download
                      </button>
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
                      <button className="btn btn-secondary btn-sm">
                        Download
                      </button>
                    </td>
                  </tr> */}
                </tbody>
              </table>
            </div>
            <div>
              <Link to="/customer/con-man" className="btn btn-dark ms-1">
                Launch Project
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Orders;
