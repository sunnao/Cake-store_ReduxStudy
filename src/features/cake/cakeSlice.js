import { createSlice } from "@reduxjs/toolkit";

let cakeSlice = createSlice({
  name: "cake",
  initialState: 10,
  reducers: {
    orderCake(state) {
      // return state -1;
      // if(state<0){
      // //   alert("준비된 케이크가 모두 소진되었습니다.")
      // //   return state = 0;
      // };
      // // return state;
      return state>0 ? state-1 : (alert("준비된 케이크가 모두 소진되었습니다."), state=0)
    },
    addCakeStock(state, action){
      return (state += action.payload);
    }
  },
});

export let { orderCake, addCakeStock } = cakeSlice.actions; // Cake컴포넌트로

export default cakeSlice.reducer; //store.js로
