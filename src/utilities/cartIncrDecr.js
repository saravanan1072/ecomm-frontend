import { createSlice } from "@reduxjs/toolkit";

const cartIncrDecr=createSlice({
    name:"cart",
    initialState:1,
    reducers:{
        increatement:(state,action)=>{
            const id=action.payload.id;
            console.log(id);

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