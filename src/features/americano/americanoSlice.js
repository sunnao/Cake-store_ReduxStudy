import {createSlice} from "@reduxjs/toolkit";

let americanoSlice = createSlice({
  name: "americano",
  initialState : 10,
  reducers : {
    orderAmericano(state) {
      return state>0 ? state-1 : (alert("준비된 아메리카노가 모두 소진되었습니다."), state=0)
    },
    addStock(state, action){
      return (state += action.payload);
    }
    
  }
})

// export let {orderAmericano} = americanoSlice.actions;
// export default americanoSlice.reducer;
export default americanoSlice;