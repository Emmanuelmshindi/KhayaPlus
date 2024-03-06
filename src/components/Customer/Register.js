import axios from "axios";
import { useState } from "react";

function Register(props) {
  const baseUrl = "http://127.0.0.1:8000/api/";
  const [formError, setformError] = useState(false);
  const [errorMsg, seterrorMsg] = useState("");
  const [successMsg, setsuccessMsg] = useState("");
  const [registerFormData, setRegisterFormData] = useState({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    password: "",
  });

  const inputHandler = (event) => {
    setRegisterFormData({
      ...registerFormData,
      [event.target.name]: event.target.value,
    });
  };

  const submitHandler = (event) => {
    const formData = new FormData();
    formData.append("first_name", registerFormData.first_name);
    formData.append("last_name", registerFormData.last_name);
    formData.append("username", registerFormData.username);
    formData.append("email", registerFormData.email);
    formData.append("phone_number", registerFormData.phone_number);
    formData.append("password", registerFormData.password);

    // Submit data
    axios
      .post(baseUrl + "customer/register/", formData)
      .then(function (response) {
        if (response.data.bool === false) {
          // setformError(true);
          seterrorMsg(response.data.msg);
          setsuccessMsg("");
        } else {
          setRegisterFormData({
            first_name: "",
            last_name: "",
            username: "",
            email: "",
            password: "",
          });
          // setformError(false);
          seterrorMsg("");
          setsuccessMsg(response.data.msg);
        }
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  const buttonEnable =
    registerFormData.username !== "" &&
    registerFormData.password !== "" &&
    registerFormData.first_name !== "" &&
    registerFormData.last_name !== "" &&
    registerFormData.phone_number !== "" &&
    registerFormData.email !== "";

  return (
    <div className="container mt-4">
      {/* <h3 className="mb-4 mt-3">Register</h3> */}
      <div className="row">
        <div className="col-md-6 col-12 offset-md-3">
          <div className="card">
            <h4 className="card-header">Register</h4>
            <div className="card-body">
              <form>
                <p className="text-info">Note: All fields are required</p>
                {successMsg && <p className="text-success">{successMsg}</p>}
                {errorMsg && <p className="text-danger">{errorMsg}</p>}
                <div className="mb-3">
                  <label for="firstName" className="form-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    aria-describedby="emailHelp"
                    name="first_name"
                    onChange={inputHandler}
                    value={registerFormData.first_name}
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
                    name="last_name"
                    onChange={inputHandler}
                    value={registerFormData.last_name}
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
                    name="username"
                    onChange={inputHandler}
                    value={registerFormData.username}
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
                    name="email"
                    onChange={inputHandler}
                    value={registerFormData.email}
                  />
                </div>
                <div className="mb-3">
                  <label for="phone_number" className="form-label">
                    Phone Number
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="phone_number"
                    name="phone_number"
                    onChange={inputHandler}
                    value={registerFormData.phone_number}
                  />
                </div>
                <div className="mb-3">
                  <label for="pwd" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="pwd"
                    name="password"
                    onChange={inputHandler}
                    value={registerFormData.password}
                  />
                </div>

                <button
                  disabled={!buttonEnable}
                  type="button"
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

export default Register;
