import { Link } from "react-router-dom";
import logo from "../logo.svg";
import { CartContext } from "../Context";
import { useContext, useState } from "react";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";

function Checkout(props) {
  const { cartData, setCartData } = useContext(CartContext);
  const [cartButtonClickStatus, setcartButtonClickStatus] = useState(false);
  const [productData, setproductData] = useState([]);

  if (cartData == null || cartData.length == 0) {
    var cartItems = 0;
  } else {
    cartItems = cartData.length;
  }

  var sum = 0;
  cartData.map((item, index) => {
    sum += parseFloat(item.product.price);
  });

  const cartRemoveButtonHandler = (product_id) => {
    var previousCart = localStorage.getItem("cartData");
    var cartJson = JSON.parse(previousCart);
    cartJson.map((cart, index) => {
      if (cart !== null && cart.product.id == product_id) {
        // delete cartJson[index];
        cartJson.splice(index, 1);
      }
    });
    var cartString = JSON.stringify(cartJson);
    localStorage.setItem("cartData", cartString);
    setcartButtonClickStatus(false);
    setCartData(cartJson);
  };

  return (
    <div className="container mt-4">
      <h3 className="mb-4 mt-3">All Items ({cartItems})</h3>
      {cartItems != 0 && (
        <div className="row">
          <div className="col-12">
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems &&
                    cartData.map((item, index) => {
                      return (
                        <tr>
                          <td>{index + 1}</td>
                          <td>
                            <p>
                              <Link>{item.product?.title}</Link>
                            </p>
                          </td>
                          <td>$ {item.product?.price}</td>
                          <td>
                            <button
                              title="Remove from Cart"
                              type="button"
                              onClick={() =>
                                cartRemoveButtonHandler(item.product.id)
                              }
                              className="btn btn-light ms-2"
                            >
                              <MdOutlineRemoveShoppingCart
                                color="#262626"
                                size="1.5em"
                              />
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
                <tfoot>
                  <tr>
                    <th></th>
                    <th>Total</th>
                    <th>$ {sum}</th>
                  </tr>
                  <tr>
                    <td colSpan="3" align="right">
                      <Link to="/categories" className="btn btn-dark">
                        Continue Shopping
                      </Link>
                      <Link to="/confirm-order" className="btn btn-dark ms-1">
                        Proceed to Payment
                      </Link>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      )}
      {cartItems == 0 && (
        <Link to="/categories" className="btn btn-dark">
          Continue Exploring
        </Link>
      )}
    </div>
  );
}

export default Checkout;
