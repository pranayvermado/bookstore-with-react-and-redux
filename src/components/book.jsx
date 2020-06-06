import React, { Component } from "react";
import logo from "./images/books.jpg";
import { connect } from "react-redux";
import { AddToCart, BuyNow } from "../redux/actions/actions";
import { withRouter } from "react-router-dom";
class Book extends Component {
  state = {};

  handleAddToCart = (id) => {
    this.props.AddToCart(id);
  };

  handleBuyNow = (id) => {
    this.props.BuyNow(id);
    this.props.history.push("/cart");
  };
  componentDidMount() {
    console.log("1 book componentDidMount");
  }

  render() {
    const mystyle = {
      height: "200px",
      width: "100%",
      display: "block",
    };
    return (
      <div style={{ width: "400px", float: "left", padding: "10px" }}>
        <div className="card mb-5">
          <h3 className="card-header">
            {this.props.data.bookName.toUpperCase()}
          </h3>
          <div className="card-body">
            <h5 className="card-title">
              Author : {this.props.data.author.toUpperCase()}
            </h5>
          </div>
          <img style={mystyle} src={logo} alt="Card"></img>
          <div className="card-body">
            <p className="card-text">Price : $10</p>
          </div>
          <div className="card-footer text-muted">
            <button
              type="button"
              className="btn btn-warning"
              onClick={() => this.handleAddToCart(this.props.data.id)}
            >
              Add to cart
            </button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button
              type="button"
              className="btn btn-success"
              onClick={() => this.handleBuyNow(this.props.data.id)}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(connect(null, { AddToCart, BuyNow })(Book));
