import { createSlice } from "@reduxjs/toolkit";

const CartSlice=createSlice({
    name:"cart",
    initialState:{
        cartItems:[]
    },
    reducers:{
        addtocart:(state,action)=>{
            state.cartItems.push(action.payload)
            return state
        },
        removeToCart:(state,action)=>{
            console.log(action.payload)
            state.cartItems.splice(action.payload,1)
            return state

        }
    }
})
export const {addtocart,removeToCart}=CartSlice.actions;
export default CartSlice.reducer