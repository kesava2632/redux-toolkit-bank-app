import { createSlice, configureStore } from '@reduxjs/toolkit';

const data = {
  balance: 0,
  fullName: "",
  mobile: null,
};

let transectionData = []

const userSlice = createSlice({
  name: 'user', // <-- Fixed the name here
  initialState: data,
  reducers: {
    updateMobile: (state, action) => {
      state.mobile = action.payload;
    },
    updateName: (state, action) => {
      state.fullName = action.payload;
    },
    withdraw: (state, action) => {
      state.balance = state.balance - action.payload;
    },
    deposit: (state, action) => {
      state.balance = state.balance + +action.payload;
    },
    reset: (state) => {
      state.balance = 0,
      state.fullName = "",
      state.mobile = ""
    },
  },
});

const transactionSlices = createSlice({
  name: 'transaction',
  initialState: transectionData,
  reducers:{
    addTransaction:(state,action)=>{
      state.push(action.payload)
    }
  }
})

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    transaction: transactionSlices.reducer,
  },
});

export const {updateMobile,updateName,withdraw,deposit,reset} = userSlice.actions

export const {addTransaction} = transactionSlices.actions

export default store;
