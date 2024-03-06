import axios from "axios";
import { useState } from "react";

function Login(props) {
  const baseUrl = "http://127.0.0.1:8000/api/";
  const [formError, setformError] = useState(false);
  const [errorMsg, seterrorMsg] = useState("");
  const [loginFormData, setloginFormData] = useState({
    username: "",
    password: "",
  });

  const inputHandler = (event) => {
    setloginFormData({
      ...loginFormData,
      [event.target.name]: event.target.value,
    });
  };

  const submitHandler = (event) => {
    const formData = new FormData();
    formData.append("username", loginFormData.username);
    formData.append("password", loginFormData.password);

    // Submit data
    axios
      .post(baseUrl + "customer/login/", formData)
      .then(function (response) {
        if (response.data.bool === false) {
          setformError(true);
          seterrorMsg(response.data.msg);
        } else {
          console.log(response.data);
          localStorage.setItem("customer_id", response.data.id);
          localStorage.setItem("customer_login", true);
          localStorage.setItem("customer_username", response.data.user);
          setformError(false);
          seterrorMsg("");
        }
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  const checkCustomer = localStorage.getItem("customer_login");
  if (checkCustomer) {
    window.location.href = "/customer/dashboard";
  }

  const buttonEnable =
    loginFormData.username !== "" && loginFormData.password !== "";

  return (
    <div className="container mt-4">
      {/* <h3 className="mb-4 mt-3">Login</h3> */}
      <div className="row">
        <div className="col-md-6 col-12 offset-md-3">
          <div className="card">
            <h4 className="card-header">Login</h4>
            <div className="card-body">
              <form>
                {formError && <p className="text-danger">{errorMsg}</p>}
                <div className="mb-3">
                  <label for="username" className="form-label">
                    Username
                  </label>
                  <input
                    type="text"
                    onChange={inputHandler}
                    name="username"
                    value={loginFormData.username}
                    className="form-control"
                    id="username"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="mb-3">
                  <label for="pwd" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    onChange={inputHandler}
                    name="password"
                    value={loginFormData.password}
                    className="form-control"
                    id="pwd"
                  />
                </div>

                <button
                  type="button"
                  disabled={!buttonEnable}
                  onClick={submitHandler}
                  className="btn btn-dark"
                >
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

export default Login;
