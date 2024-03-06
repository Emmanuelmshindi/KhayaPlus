import React from "react";
import { Link } from "react-router-dom";

import logo from "../logo.svg";

function SingleRelatedProduct(props) {
  // if (!props.product || !props.product.title) {
  //   return null;
  // }
  // console.log(props.product.title);
  // console.log(props.product.id);
  // console.log(props.product.price);

  return (
    <div className="col-4 offset-4 mb-4">
      <div className="card">
        <Link to={`/product/${props.product?.title}/${props.product?.id}`}>
          <img src={props.product.image} className="card-img-top" alt="..." />
        </Link>
        <div className="card-body">
          <h5 className="card-title">
            <Link to={`/product/${props.product?.title}/${props.product?.id}`}>
              {props.product?.title}
            </Link>
          </h5>

          <h5 className="card-title">
            Cost: <span className="text-muted">$ {props.product?.price}</span>
          </h5>
        </div>
        <div className="card-footer">
          <button title="Add to Cart" className="btn btn-secondary btn-sm">
            <i className="fa-solid fa-cart-plus"></i>
          </button>
          <button
            title="Add to Wishlist"
            className="btn btn-secondary btn-sm ms-2"
          >
            <i className="fa fa-heart"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SingleRelatedProduct;
