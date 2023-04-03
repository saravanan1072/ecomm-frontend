import { createSlice } from "@reduxjs/toolkit";

const cartIncrDecr=createSlice({
    name:"cart",
    initialState:1,
    reducers:{
        increatement:(state,action)=>{
            state+=1;
            return state
        },
        decreatement:(state,action)=>{
            state-=1;
            return state
        }
    }
})
export const {increatement,decreatement}=cartIncrDecr.actions;
export default cartIncrDecr.reducer