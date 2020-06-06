import React, { Component } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine-dark.css";
import { connect } from "react-redux";
import { AddToCart, BuyNow } from "../redux/actions/actions";
import { withRouter } from "react-router-dom";

class BookTableView extends Component {
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
        {
          headerName: "Action",
          field: "id",
          sortable: false,
          filter: false,
          cellRendererFramework: () => {
            return (
              <button
                className="btn btn-warning btn-sm"
                onClick={this.handleAddToCart.bind(this)}
              >
                Buy Now
              </button>
            );
          },
        },
      ],
      rowData: this.props.data,
    };
  }

  handleAddToCart = (e) => {
    debugger;
    const selectedNodes = this.gridApi.getSelectedNodes();
    const selectedData = selectedNodes.map((node) => node.data);
    if (selectedData.length === 0) return;
    this.props.BuyNow(selectedData[0].id);
    this.props.history.push("/cart");
  };

  render() {
    return (
      <div style={{ height: "400px" }} className="ag-theme-alpine-dark">
        <AgGridReact
          onGridReady={(params) => (this.gridApi = params.api)}
          columnDefs={this.state.columnDefs}
          rowData={this.state.rowData}
        ></AgGridReact>
      </div>
    );
  }
}
export default withRouter(connect(null, { AddToCart, BuyNow })(BookTableView));
