import { shoeArr } from "../../../Ex_Shoe_Redux/data";
import { GIAM, TANG } from "./constant";

let initialState = {
  soLuong: 1,
  shoeArr: shoeArr,
  detail: shoeArr[0],
  cart: [],
};

export let shoeReducer = (state = initialState, action) => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};

export let demoReduxReducer = (state = initialState, action) => {
  switch (action.type) {
    case TANG: {
      console.log("ok tang");
      state.soLuong++;
      return { ...state };
    }
    case GIAM: {
      state.soLuong = state.soLuong - action.payload;
      return { ...state };
    }
    default: {
      return state;
    }
  }
};
