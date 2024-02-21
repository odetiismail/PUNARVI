import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
//import Products from '../JSON/Products.json'

export interface Person {
  values: [] | null;
  loading: boolean;
  error: string | null;
}

//console.log(Products)
// Define the initial state using that type
const initialState: Person = {
  values: [],
  loading: false,
  error: "",
};

//Creating Async Thunk``
export const getData = createAsyncThunk("user/fetchById", async () => {
  //return  fetch("https://dummyjson.com/products").then((res) => res.json());
  try {
    const res = await axios.get("https://dummyjson.com/products");
    console.log(res);
    return res.data.products;
  } catch (err) {
    console.log(err);
  }
});

//Counter Slice

export const counterSlice = createSlice({
  name: "counter",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
  },

  //Reducers
  extraReducers: (builder) => {
    builder.addCase(getData.fulfilled, (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.error = null;
      state.values = action.payload;
    });
  },
});

export const {} = counterSlice.actions;

// Other code such as selectors can use the imported `RootState` type
//export const selectCount = (state: RootState) => state.counter.value;

export default counterSlice.reducer;
