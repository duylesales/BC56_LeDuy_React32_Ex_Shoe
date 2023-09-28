import React, { Component } from "react";
import { connect } from "react-redux";
import { GIAM, TANG } from "./redux/reducer/constant";

class DemoRedux extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <button onClick={this.props.handleDecrease} className="btn btn-dark">
          -
        </button>
        <strong className="display-4 mx-5">{this.props.number}</strong>
        <button onClick={this.props.handleIncrease} className="btn btn-info">
          +
        </button>
      </div>
    );
  }
}

// để lấy data từ redux chuyển thành props của components
// dùng hàm mapStateToProps
let mapStateToProps = (state) => {
  // state : đến từ store của redux
  return {
    number: state.soLuong,
  };
};

// đẩy data từ component lên reducer của store (update data state của redux)

let mapDispatchToProps = (dispatch) => {
  return {
    handleIncrease: () => {
      let action = {
        type: TANG,
      };
      dispatch(action);
    },
    handleDecrease: () => {
      let action = {
        type: GIAM,
        payload: 10,
      };
      dispatch(action);
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(DemoRedux);
