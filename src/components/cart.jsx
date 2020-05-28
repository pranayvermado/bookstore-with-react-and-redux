import React from "react";
import { useSelector } from "react-redux";

function Cart() {
  const cart = useSelector((state) => state.addToCart);
  const count = cart.quantity;
  return count > 0 ? (
    <div
      className="card text-white  bg-success mb-3"
      style={{ maxwidth: "20rem" }}
    >
      <div className="card-header">Hurray !!!</div>
      <div className="card-body">
        <h4 className="card-title">{count} Books added </h4>
        <p className="card-text">Proceed to checkout </p>
      </div>
    </div>
  ) : (
    <div
      className="card text-white bg-warning mb-3"
      style={{ maxwidth: "20rem" }}
    >
      <div className="card-header">oops</div>
      <div className="card-body">
        <h4 className="card-title">0 Books </h4>
        <p className="card-text">Please Add Books</p>
      </div>
    </div>
  );
}
export default Cart;
