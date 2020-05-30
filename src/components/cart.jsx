import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function Cart() {
  const cart = useSelector((state) => state.ShoppingCartReducer);
  const count = cart.quantity;

  const [book, setItems] = useState({});

  useEffect(() => {
    fetchItem();
  }, []);

  const fetchItem = async () => {
    const item = await fetch(
      "http://localhost:2315/api/Books/GetBook/" + cart.bookId
    );
    const book = await item.json();
    setItems(book);
  };

  return count > 0 ? (
    <div
      className="card text-white  bg-success mb-3"
      style={{ maxwidth: "20rem" }}
    >
      <div className="card-header">Hurray !!!</div>
      <div className="card-body">
        <h4 className="card-title">{count} Books added </h4>
        <p className="card-text">{book.bookName}</p>
        <button className="btn btn-warning">Checkout</button>
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
