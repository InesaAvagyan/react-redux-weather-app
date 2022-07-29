import { createSlice } from "@reduxjs/toolkit";

const inputSlice = createSlice({
    name: 'inputText',
    initialState: '',
    reducers: {
        typeText(state, {payload}){
            return payload
        }
    }
})

export const {typeText} = inputSlice.actions

export const selectInputText = (state) => state.inputText 

export const inputSliceReducer = inputSlice.reducer 
