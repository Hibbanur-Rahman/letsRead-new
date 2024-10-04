import { createSlice } from "@reduxjs/toolkit";

const modalSlice=createSlice({
    name:'modal',
    initialState:{
        show:false,
    },
    reducers:{
        toggleModal(state){
            state.show=!state.show;
        }
    }
})

export const {toggleModal}=modalSlice.actions;
export default modalSlice.reducer;