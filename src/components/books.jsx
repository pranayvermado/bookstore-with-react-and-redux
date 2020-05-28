import React, { Component } from "react";
import Book from "./book";

export class Books extends Component {
  state = {
    error: null,
    isLoaded: false,
    items: [],
    item: {},
  };
  constructor() {
    super();
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      item: {},
    };
    console.log("books Constructor");
  }

  componentWillMount() {
    console.log("books componentWillMount");
  }

  render() {
    console.log("books render");
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          {items.map((item) => (
            <Book key={item.id} data={item}></Book>
          ))}
        </div>
      );
    }
  }

  componentDidMount() {
    console.log("books componentDidMount");
    fetch("http://localhost:2315/api/Books")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  componentWillReceiveProps() {
    console.log("books componentWillReceiveProps");
  }

  shouldComponentUpdate() {
    console.log("books componentWillReceiveProps");
    return true;
  }

  componentWillUpdate() {
    console.log("books   componentWillUpdate");
    return true;
  }

  componentDidUpdate() {
    console.log("books   componentDidUpdate");
  }
}
