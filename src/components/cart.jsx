import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
// import { withRouter } from "react-router-dom";

function Cart(props) {
  const cart = useSelector((state) => state.ShoppingCartReducer);
  const count = cart.quantity;

  const [book, setItems] = useState({});

  useEffect(() => {
    fetchItem();
  }, []);

  const fetchItem = async () => {
    const item = await fetch(
      "https://fortnite-api.theapinetwork.com/store/get"
    );
    const book = await item.json();
    setItems(book);
  };

  const checkout = () => {
    console.log(props.history);
    props.history.push("/checkout");
  };
  const handelContinueShopping = () => {
    props.history.push("/Books");
  };

  return count > 0 ? (
    <div
      className="card text-white  bg-success mb-3"
      style={{ maxwidth: "20rem" }}
    >
      <div className="card-header">Hurray !!! {count} Books added </div>
      <div className="card-body">
        <p className="card-text">{book.bookName}</p>
        <button className="btn btn-warning" onClick={checkout}>
          Checkout
        </button>
      </div>
    </div>
  ) : (
    <div
      className="card text-white bg-warning mb-3"
      style={{ maxwidth: "20rem" }}
    >
      <div className="card-header">
        <h4>oops 0 Books</h4>
      </div>
      <div className="card-body">
        <button className="btn btn-primary" onClick={handelContinueShopping}>
          Continue Shopping
        </button>
      </div>
    </div>
  );
}
export default Cart;
