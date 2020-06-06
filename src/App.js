import React from "react";
import "./App.css";
import { Home } from "./components/home";
import { NavBar } from "./components/navbar";
import { Footer } from "./components/footer";
import Books from "./components/books";
import Pricing from "./components/pricing";
import { About } from "./components/about";
import Cart from "./components/cart";
import Checkout from "./components/checkout";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import history from "./history";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter history={history}>
        <NavBar></NavBar>
        <div className="App-header">
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/Books" component={Books}></Route>
            <Route exact path="/Pricing" component={Pricing}></Route>
            <Route exact path="/About" component={About}></Route>
            <Route exact path="/Cart" component={Cart}></Route>
            <Route exact path="/Checkout" component={Checkout}></Route>
          </Switch>
        </div>
        <Footer></Footer>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
