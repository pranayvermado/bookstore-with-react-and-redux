import React, { Component } from "react";
import BookGridView from "./booksGridView";
import ViewSelector from "./viewSelector";
import BooksTableView from "./booksTableView";
import { connect } from "react-redux";
import { SaveBookList } from "../redux/actions/actions";
import store from "../redux/store";
class Books extends Component {
  state = {
    error: null,
    isLoaded: false,
    items: [],
    item: {},
    isGridMode: true,
  };
  constructor() {
    super();
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      isGridMode: "GRID",
    };
    console.log("1 books Constructor");
  }

  componentWillMount() {
    console.log("2 books componentWillMount");
  }

  viewMode = (viewData) => {
    if (viewData !== this.state.isGridMode) {
      this.setState({ isGridMode: viewData });
    }
  };

  render() {
    const { error, isLoaded, items, isGridMode } = this.state;
    const renderView = () => {
      if (isGridMode === "TABLE") {
        return <BooksTableView data={items}></BooksTableView>;
      } else {
        return <BookGridView data={items}></BookGridView>;
      }
    };

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <table width="100%">
          <tr>
            <td align="right">
              <ViewSelector onToggle={this.viewMode}></ViewSelector>
            </td>
          </tr>
          <tr>
            <td>{renderView()}</td>
          </tr>
        </table>
      );
    }
  }

  async componentDidMount() {
    const storage = store.getState().BookListReducer.books;
    if (storage && storage.length > 0) {
      this.setState({
        isLoaded: true,
        items: storage,
      });
    } else {
      const response = await fetch(`http://localhost:2315/api/Books`);
      let json = await response.json();
      if (!json) {
        json = [
          { id: 1, bookName: "Harry potter", author: "JKR" },
          { id: 2, bookName: "Goblet of fire", author: "JKR" },
          { id: 6, bookName: "Two state", author: "chetan bhagat" },
          { id: 10, bookName: "Quantico", author: "rusk" },
          { id: 11, bookName: "Casino Royale", author: "Boon" },
          { id: 12, bookName: "swades", author: "AGPP" },
          { id: 13, bookName: "Jumanji", author: "Zoom" },
          { id: 14, bookName: "The Monk sold his farrie", author: "scott" },
        ];
      }
      this.setState({
        isLoaded: true,
        items: json,
      });
      this.props.SaveBookList(json);
    }
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
export default connect(null, { SaveBookList })(Books);
