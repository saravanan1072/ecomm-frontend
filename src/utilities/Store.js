import { configureStore } from "@reduxjs/toolkit";
import Slice from "./Slice";
import CartSlice from "./CartSlice";
import cartIncrDecr from "./cartIncrDecr";
const Store=configureStore({
    reducer:{
        reducer1:Slice,
        cartReducer:CartSlice,
        incrdecr:cartIncrDecr
    }
})
export default Store;