import React, { Component } from "react";
import Cart from "./Cart";
import ListShoe from "../ListShoe";
import DetailShoe from "./DetailShoe";
import { shoeArr } from "./data";
import { message } from "antd";

export default class extends Component {
  state = {
    // detail, cart
    shoeArr: shoeArr,
    detail: shoeArr[0],
    cart: [],
  };
  handleAdd = (shoe) => {
    // copy & push
    // check sp đã có chưa mới push hay update cart
    let cloneCart = [...this.state.cart];
    var index = cloneCart.findIndex((item) => {
      return item.id == shoe.id;
    });
    if (index == -1) {
      // Ko thấy > push
      let newShoe = { ...shoe, soLuong: 1 };
      cloneCart.push(newShoe);
    } else {
      // tìm thấy > ko push mà update
      cloneCart[index].soLuong++;
    }
    this.setState({
      cart: cloneCart,
    });
  };
  handleRemove = (shoeId) => {
    let cloneCart = [...this.state.cart];
    let index = cloneCart.findIndex((item) => item.id == shoeId);
    cloneCart.splice(index, 1);
    this.setState({ cart: cloneCart });
    // Thống báo xoá thành công
    message.success("Xoá thành công");
  };
  handleViewDetail = (shoe) => {
    this.setState({ detail: shoe });
  };
  handleChangeQuantity = (id, option) => {};
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-6">
            <Cart handleRemove={this.handleRemove} cart={this.state.cart} />
          </div>
          <div className="col-6">
            <ListShoe
              handleViewDetail={this.handleViewDetail}
              handleBuy={this.handleAdd}
              list={this.state.shoeArr}
            />
          </div>
        </div>
        <DetailShoe detail={this.state.detail} />
      </div>
    );
  }
}
