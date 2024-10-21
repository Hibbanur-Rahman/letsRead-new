import { createSlice } from "@reduxjs/toolkit";

const initialState={
    show:false,
}
const modalSlice=createSlice({
    name:'modal',
    initialState,
    reducers:{
        toggleModal(state){
            state.show=!state.show;
        }
    }
})

export const {toggleModal}=modalSlice.actions;
export default modalSlice.reducer;