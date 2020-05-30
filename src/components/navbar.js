import React from "react";
import { Link } from "react-router-dom";
import cartImage from "./images/cart.png";
import { useSelector } from "react-redux";

export const NavBar = () => {
  const cart = useSelector((state) => state.ShoppingCartReducer);
  const count = cart.quantity;
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link to="/">
        <span className="navbar-brand">Book Store</span>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarColor02"
        aria-controls="navbarColor02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarColor02">
        <ul className="navbar-nav mr-auto">
          <Link to="/Books">
            <li className="nav-item">
              <span className="nav-link">Books</span>
            </li>
          </Link>
          <Link to="/Pricing">
            <li className="nav-item">
              <span className="nav-link">Pricing</span>
            </li>
          </Link>
          <Link to="/About">
            <li className="nav-item">
              <span className="nav-link">About</span>
            </li>
          </Link>
        </ul>
        <Link to="/cart">
          <div className="form-inline my-2 my-lg-0">
            <img className="cart" src={cartImage}></img>
            <span className="badge">{count}</span>
          </div>
        </Link>
      </div>
    </nav>
  );
};
