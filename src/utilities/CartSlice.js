import { createSlice } from "@reduxjs/toolkit";

const CartSlice=createSlice({
    name:"cart",
    initialState:{
        cartItems:[],
        subTotal: 0,
        shipping: 0,
        total: 0,
       
    },
    reducers:{
        addtocart:(state,action)=>{
            const item = action.payload;
             const isItemExist = state.cartItems.find((i) => i.item.id === action.payload.item.id);
             if (isItemExist) {
                state.cartItems.forEach((i) => {
                if (i.id === item.id) i.quantity += 1;
                });
            } else {
                state.cartItems.push(item);
                return state
            }
            console.log(state.cartItems);

        },
        increatements:(state,action)=>{
            const value = action.payload;
             const isItemExist = state.cartItems.find((i) => i.item.id === value.item.id);
            if (isItemExist) {
              state.cartItems.forEach((i) => {
                if (i.item.id === value.item.id) {
                    i.quantity += 1;
                }
              }) }     
            },
        decreatements:(state,action)=>{
            const value = action.payload;
             const isItemExist = state.cartItems.find((i) => i.item.id === value.item.id);
            if (isItemExist) {
              state.cartItems.forEach((i) => {
                if (i.item.id === value.item.id) {
                    i.quantity -= 1;
                }
                if(i.quantity===0){
                    state.cartItems.splice(i,1)
                }
              });
            
            }      
    },
    
        removeToCart:(state,action)=>{
            console.log(action.payload)
            state.cartItems.splice(action.payload,1)
            return state

        },
        calculatePrice: (state,action) => {
            console.log("hello");
            let sum = 0;
            let arr=state.cartItems;
            for(let i=0;i<arr.length;i++){
            let price=arr[i].item.discountPrice;
             price=price.replaceAll(',','')
                sum+=price* arr[i].quantity
            }
            console.log(sum);
            state.subTotal = sum;
            state.shipping =0
            state.total = state.subTotal + state.shipping ;
          },
        //   priceDecrease:(state,action)=>{
        //     console.log("hello");
        //     let sum = 0;
        //     let arr=state.cartItems;
        //     for(let i=0;i<arr.length;i++){
        //     let price=arr[i].item.discountPrice;
        //      price=price.replaceAll(',','')
        //         sum+=price* arr[i].quantity
        //     }
        //     console.log(sum);
        //     state.subTotal = sum;
        //     state.shipping =0
        //     state.total = state.subTotal + state.shipping ;

        //   }
          
    }
})
export const {addtocart,removeToCart,increatements,decreatements, calculatePrice, priceDecrease}=CartSlice.actions;
export default CartSlice.reducer