import axios from "axios";
import { useState } from "react";
import { UserContext } from "../Context";
import { useContext } from "react";
import { CartContext } from "../Context";

import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const baseUrl = "http://127.0.0.1:8000/api";
function ConfirmOrder() {
  const [ConfirmOrder, SetConfirmOrder] = useState(false);
  const [orderId, SetorderId] = useState("");
  const [OrderStatus, SetOrderStatus] = useState(false);
  const [PayMethod, SetPayMethod] = useState("");
  const userContext = useContext(UserContext);
  const { cartData, setCartData } = useContext(CartContext);

  console.log(userContext);

  if (userContext == false) {
    window.location.href = "/customer/login";
  } else {
    if (ConfirmOrder == false) {
      addOrderInTable();
    }
  }

  function addOrderInTable() {
    const customerId = localStorage.getItem("customer_id");
    console.log(customerId);
    const formData = new FormData();
    formData.append("customer", customerId);

    //Submit data
    axios
      .post(baseUrl + "/orders/", formData)
      .then(function (response) {
        console.log(response.data.id);
        var orderId = response.data.id;
        SetorderId(orderId);
        orderItems(orderId);
        SetConfirmOrder(true);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function updateOrderStatus(order_status) {
    //Submit data
    axios
      .post(baseUrl + "/update-order-status/" + orderId)
      .then(function (response) {
        window.location.href = "/customer/orders";
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function orderItems(orderId) {
    var previousCart = localStorage.getItem("cartData");
    var cartJson = JSON.parse(previousCart);

    if (cartJson != null) {
      cartJson.map((cart, index) => {
        const formData = new FormData();
        formData.append("order", orderId);
        formData.append("product", cart.product.id);
        formData.append("qty", 1);
        formData.append("price", cart.product.price);

        //Submit data
        axios
          .post(baseUrl + "/orderitems/", formData)
          .then(function (response) {
            // Remove cart items from local storage
            cartJson.splice(index, 1);
            localStorage.setItem("cartData", JSON.stringify(cartJson));
          })
          .catch(function (error) {
            console.log(error);
          });
      });
    }
    var previousCartUpdated = localStorage.getItem("cartData");
    var cartJsonUpdated = JSON.parse(previousCart);
    setCartData(cartJsonUpdated);
  }

  function changePaymentMethod(payMethod) {
    SetPayMethod(payMethod);
  }

  function PayNowButton() {
    if (PayMethod != "") {
      changePaymentMethod(PayMethod);
    } else {
      alert("Select Payment Method!");
    }
  }

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-6 offset-3">
          <div className="card py-3 text-center">
            <h3>Your Order has been Confirmed</h3>
            <p>ORDER ID: {orderId}</p>
          </div>
          <div className="card p-3 mt-4">
            <form>
              <div className="form-group">
                <label>
                  <input
                    type="radio"
                    onChange={() => changePaymentMethod("paypal")}
                    name="payMethod"
                  />{" "}
                  PayPal
                </label>
                <label>
                  <input
                    type="radio"
                    onChange={() => changePaymentMethod("stripe")}
                    name="payMethod"
                  />{" "}
                  Stripe
                </label>
                <label>
                  <input
                    type="radio"
                    onChange={() => changePaymentMethod("mpesa")}
                    name="payMethod"
                  />{" "}
                  Mpesa
                </label>
              </div>
              <button
                type="button"
                onClick={PayNowButton}
                className="btn btn-sm btn-success mt-4"
              >
                Next
              </button>
            </form>
            {PayMethod == "paypal" && (
              <PayPalScriptProvider
                options={{
                  "client-id":
                    "AVKSVj2HZcYnjtkPCZgEGbIGqbVR0z576cLL0HC2qPM9ucpgIXXSryapGYAaT_m8btrxvYHgWttw-awr",
                }}
              >
                <PayPalButtons
                  className="mt-3"
                  createOrder={(data, actions) => {
                    return actions.order.create({
                      purchase_units: [
                        {
                          amount: {
                            currency_code: "USD",
                            value: "3",
                          },
                        },
                      ],
                    });
                  }}
                  onApprove={(data, actions) => {
                    return actions.order.capture().then((details) => {
                      const name = details.payer.name.given_name;
                      // alert(`Transaction completed by ${name}`);
                      // SetOrderStatus(true);
                      updateOrderStatus(true);
                    });
                  }}
                />
              </PayPalScriptProvider>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConfirmOrder;
