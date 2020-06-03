import React, { Component } from "react";

class Checkout extends Component {
  state = {
    contactPerson: "",
    address: "",
    emailAddress: "",
    city: "",
    region: "",
    zip: "",
    country: "",
    error: {
      contactPersonError: "",
      addressError: "",
      emailAddressError: "",
      cityError: "",
      regionError: "",
      zipError: "",
      countryError: "",
    },
    isSucess: false,
  };
  constructor(props) {
    super(props);
  }

  handelFormSubmit = (e) => {
    e.preventDefault();

    if (this.validAddress()) {
      //alert(JSON.stringify(this.state));
      this.setState({ isSucess: true });
    }
    return;
  };

  validAddress = () => {
    let isError = false;
    if (!this.state.contactPerson) {
      this.setState({ contactPersonError: "Contact Person is required." });
      isError = true;
    }
    if (!this.state.emailAddress) {
      this.setState({ emailAddressError: "Email is required." });
      isError = true;
    }
    if (!this.state.address) {
      this.setState({ addressError: "Address is required." });
      isError = true;
    }
    if (!this.state.city) {
      this.setState({ cityError: "City is required." });
      isError = true;
    }
    if (!this.state.region) {
      this.setState({ regionError: "region is required." });
      isError = true;
    }
    if (!this.state.zip) {
      this.setState({ zipError: "Zipcode is  required." });
      isError = true;
    }

    return isError ? false : true;
  };

  handleOnChange = (event) => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
    this.setState({ [event.target.name + "Error"]: "" });
  };

  render() {
    if (!this.state.isSucess) {
      return (
        <React.Fragment>
          <div className="jumbotron">
            <form className="form-group" onSubmit={this.handelFormSubmit}>
              <fieldset>
                <h2> Shipping Address</h2>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Contact Person</label>
                  <input
                    type="input"
                    className="form-control"
                    id="ContactPerson"
                    placeholder="Contact Person"
                    value={this.state.contactPerson}
                    name="contactPerson"
                    onChange={this.handleOnChange}
                  ></input>
                  <div style={{ color: "red" }}>
                    {this.state.contactPersonError}
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Email</label>
                  <input
                    type="input"
                    className="form-control"
                    id="email"
                    placeholder="Email"
                    value={this.state.emailAddress}
                    name="emailAddress"
                    onChange={this.handleOnChange}
                  ></input>
                  <div style={{ color: "red" }}>
                    {this.state.emailAddressError}
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Address</label>
                  <input
                    type="input"
                    className="form-control"
                    id="Address"
                    placeholder="Address"
                    value={this.state.address}
                    name="address"
                    onChange={this.handleOnChange}
                  ></input>
                  <div style={{ color: "red" }}>{this.state.addressError}</div>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">City/Town</label>
                  <input
                    type="input"
                    className="form-control"
                    id="citytown"
                    placeholder="City/Town"
                    value={this.state.city}
                    name="city"
                    onChange={this.handleOnChange}
                  ></input>
                  <div style={{ color: "red" }}>{this.state.cityError}</div>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">
                    State / Province / Region
                  </label>
                  <input
                    type="input"
                    className="form-control"
                    id="region"
                    placeholder=" State / Province / Region"
                    value={this.state.region}
                    name="region"
                    onChange={this.handleOnChange}
                  ></input>
                  <div style={{ color: "red" }}>{this.state.regionError}</div>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">
                    Zip / Postal Code
                  </label>
                  <input
                    type="input"
                    className="form-control"
                    id="zip"
                    placeholder="Zip / Postal Code"
                    value={this.state.zip}
                    name="zip"
                    onChange={this.handleOnChange}
                  ></input>
                  <div style={{ color: "red" }}>{this.state.zipError}</div>
                </div>
                <div className="form-group">
                  <select className="form-control" id="exampleSelect2">
                    <option>India</option>
                    <option>USA</option>
                  </select>
                </div>
              </fieldset>
              <button type="submit" className="btn btn-success">
                Submit
              </button>
            </form>
          </div>
          }
        </React.Fragment>
      );
    } else {
      return <h1>Thankyou</h1>;
    }
  }
}

export default Checkout;
