import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {Toast} from "../../toasts"
const API_URL = "https://aceiny.tech:9991";

const initialState = {
    status: "idle",
    error : null,
    token : null,
    userName: '',
    isAuthenticated : localStorage.getItem("authorization") ? true : false,
    isAuthenticating : false,
}
export const signIn = createAsyncThunk("auth/signIn", 
async (user) => {
    try{
        const response = await axios.post(`${API_URL}/signIn`, user);
        console.log(response)
        return response;
    }catch(error){
        return error.response;
    }
});

const authSlice = createSlice({
    name : "auth",
    initialState,
    reducers : {
        logout : (state, action) => {
            localStorage.removeItem("authorization");
            state.isAuthenticated = false;
            state.token = null;
            state.userName = null;
        },
        setUserName : (state, action) => {
            state.userName = action.payload;
        }
    },
    extraReducers : (builder) => {
        builder
        .addCase(signIn.pending, (state, action) => {
            state.isAuthenticating = true;
        })
        .addCase(signIn.fulfilled, (state, action) => {
            state.isAuthenticating = false;
            if(action.payload.status === 200){
                state.isAuthenticated = true;
                state.token = action.payload.data;
                localStorage.setItem("authorization", action.payload.data);
            }else{
                Toast.error(action.payload.data.message);
            }
        })
        .addCase(signIn.rejected, (state, action) => {
            state.isAuthenticating = false;
            Toast.error("Something went wrong");
        })
    }
})

export const { logout, setUserName } = authSlice.actions;
export default authSlice.reducer;