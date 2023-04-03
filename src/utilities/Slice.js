import {createSlice}from '@reduxjs/toolkit';
const Slice=createSlice({
    name:"Action",
    initialState:0,
    reducers:{
        update : (state,action)=>{
            state=state+1;
            return state
    },
    reduce:(state,action)=>{
        state=state-1;
        return state
}
  
      }})
export const {update,reduce}=Slice.actions;
export default Slice.reducer;
