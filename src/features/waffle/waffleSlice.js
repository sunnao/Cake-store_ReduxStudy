import { createSlice } from "@reduxjs/toolkit";

let waffleSlice = createSlice({
  name: "waffle",
  initialState: 20,
  reducers: {
    orderWaffle(state) {
      return state>0 ? state-1 : (alert("준비된 와플 모두 소진되었습니다."), state=0)
    },
    addWaffleStock(state, action){
      return (state += action.payload);
    }
  },
});

export let { orderWaffle, addWaffleStock } = waffleSlice.actions;
export default waffleSlice.reducer;
