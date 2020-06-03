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
    console.log("1 books Constructor");
  }

  componentWillMount() {
    console.log("2 books componentWillMount");
  }

  render() {
    console.log("3 books render");
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
    console.log("4 books componentDidMount");
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
            items: [
              { id: 1, bookName: "Harry potter", author: "JKR" },
              { id: 2, bookName: "Goblet of fire", author: "JKR" },
              { id: 6, bookName: "Two state", author: "chetan bhagat" },
              { id: 10, bookName: "Quantico", author: "rusk" },
              { id: 11, bookName: "Casino Royale", author: "Boon" },
              { id: 12, bookName: "swades", author: "AGPP" },
              { id: 13, bookName: "Jumanji", author: "Zoom" },
              { id: 14, bookName: "The Monk sold his farrie", author: "scott" },
            ],
          });
        }
      );
  }

  componentWillReceiveProps() {
    console.log("5 books componentWillReceiveProps");
  }

  shouldComponentUpdate() {
    console.log("6 books shouldComponentUpdate");
    return true;
  }

  componentWillUpdate() {
    console.log("7 books   componentWillUpdate");
    return true;
  }

  componentDidUpdate() {
    console.log("8 books   componentDidUpdate");
  }
}
