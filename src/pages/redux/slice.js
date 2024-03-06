"use client"

import { createSlice,nanoid } from "@reduxjs/toolkit";
const initialState = {
    users:[],
}
const Slice = createSlice({
    name:"Add-user-Data",
    initialState,
    reducers: {
        AddUser:(state,action)=>{
            // console.log(action)
            const data = {
                id:nanoid(),
                name:action.payload,
            }
            state.users.push(data)
        },
        RemoveItem:(state,action)=>{
            // console.log(action)
            const  data = state.users.filter((item)=>{
                return(
                    item.id !== action.payload
                    )
                }
                )
                state.users=data

        }
    }
});
export const {AddUser,RemoveItem} = Slice.actions;
export default Slice.reducer