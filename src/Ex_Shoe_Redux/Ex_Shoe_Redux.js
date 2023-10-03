import React, { Component } from "react";
import Cart from "./Cart";
import ListShoe from "./ListShoe";
import DetailShoe from "./DetailShoe";

export default class Ex_Shoe_Redux extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-6">
            <Cart />
          </div>
          <div className="col-6">
            <ListShoe />
          </div>
        </div>
        <DetailShoe />
      </div>
    );
  }
}
