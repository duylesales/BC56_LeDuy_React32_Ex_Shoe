import { GIAM, TANG } from "./constant";

let initialState = {
  soLuong: 1,
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
