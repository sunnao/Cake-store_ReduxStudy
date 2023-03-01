import { configureStore, createSlice } from "@reduxjs/toolkit";
import cakeReducer from "../features/cake/cakeSlice";
import waffleReducer from "../features/waffle/waffleSlice";
import americanoSlice from "../features/americano/americanoSlice";

// let setMenu = createSlice({
//   name : 'setMenu',
//   initialState : {cake:20, waffle:10, americano:10},
//   reducers :{
//     orderSetMenu(state){
//       state.cake =state.cake-1,
//       state.waffle =state.waffle-1,
//       state.americano =state.americano-1
//     }
//   }
  
// })

const store = configureStore({
  reducer: {
    cakeReducer,
    waffleReducer,
    [americanoSlice.name]:americanoSlice.reducer,
    // setMenu:setMenu.reducer
  },
});

export default store;
