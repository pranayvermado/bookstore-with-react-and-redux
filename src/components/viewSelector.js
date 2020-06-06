import React, { Component } from "react";

class ViewSelector extends Component {
  render() {
    return (
      <div className="btn-group btn-group-toggle" data-toggle="buttons">
        <label
          className="btn btn-primary btn-sm"
          onClick={() => this.props.onToggle("GRID")}
        >
          <input
            type="radio"
            name="options"
            id="option1"
            autoComplete="off"
          ></input>
          Grid View
        </label>
        <label
          className="btn btn-primary btn-sm"
          onClick={() => this.props.onToggle("TABLE")}
        >
          <input
            type="radio"
            name="options"
            id="option2"
            autoComplete="off"
          ></input>
          Table View
        </label>
      </div>
    );
  }
}

export default ViewSelector;
