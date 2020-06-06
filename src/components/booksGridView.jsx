import React, { Component } from "react";
import Book from "./book";

class BookGridView extends Component {
  render() {
    return this.props.data.map((item) => (
      <Book key={item.id} data={item}></Book>
    ));
  }
}

export default BookGridView;
