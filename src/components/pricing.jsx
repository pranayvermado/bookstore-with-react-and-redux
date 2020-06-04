import React, { Component } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine-dark.css";

export class Pricing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columnDefs: [
        {
          headerName: "Book Name",
          field: "bookName",
          sortable: true,
          filter: true,
          checkboxSelection: true,
        },
        {
          headerName: "Author",
          field: "author",
          sortable: true,
          filter: true,
        },
        {
          headerName: "Price",
          field: "price",
          sortable: true,
          filter: true,
        },
      ],
      rowData: [],
    };
  }

  componentDidMount() {
    fetch(
      "https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/sample-data/smallRowData.json"
    )
      .then((result) => result.json())
      .then((rowData) => {
        rowData = [
          { id: 1, bookName: "Harry potter", author: "JKR", price: 10 },
          { id: 2, bookName: "Goblet of fire", author: "JKR", price: 10 },
          { id: 6, bookName: "Two state", author: "chetan bhagat", price: 10 },
          { id: 10, bookName: "Quantico", author: "rusk", price: 10 },
          { id: 11, bookName: "Casino Royale", author: "Boon", price: 10 },
          { id: 12, bookName: "swades", author: "AGPP", price: 10 },
          { id: 13, bookName: "Jumanji", author: "Zoom", price: 10 },
          {
            id: 14,
            bookName: "The Monk sold his farrie",
            author: "scott",
            price: 10,
          },
        ];
        this.setState({ rowData });
      });
  }
  onButtonClick = (e) => {
    const selectedNodes = this.gridApi.getSelectedNodes();
    const selectedData = selectedNodes.map((node) => node.data);
    const selectedDataStringPresentation = selectedData
      .map((node) => node.bookName + " " + node.author)
      .join(", ");
    alert(`Selected nodes: ${selectedDataStringPresentation}`);
  };

  render() {
    return (
      <div
        style={{ height: "400px" }}
        className="ag-theme-alpine-dark"
      >
        <button onClick={this.onButtonClick}>Get selected rows</button>
        <AgGridReact
          onGridReady={(params) => (this.gridApi = params.api)}
          columnDefs={this.state.columnDefs}
          rowData={this.state.rowData}
        ></AgGridReact>
      </div>
    );
  }
}
