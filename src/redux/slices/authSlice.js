import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const API_URL = "https://aceiny.tech:9991";

const initialState = {
    status: "idle",
    error : null,
    token : null,
    isAuthenticated : localStorage.getItem("token") ? true : false,
    isAuthenticating : false,
}
export const signIn = createAsyncThunk("auth/signIn", 
async (user) => {
    try{
        const response = await axios.post(`${API_URL}/signIn`, user);
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
            localStorage.removeItem("token");
            state.isAuthenticated = false;
            state.token = null;
            state.user = null;
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
                state.token = action.payload.data.token;
                localStorage.setItem("token", action.payload.data.token);
            }else{
                toast.error(action.payload.data.message);
            }
        })
        .addCase(signIn.rejected, (state, action) => {
            state.isAuthenticating = false;
            toast.error("Something went wrong");
        })
    }
})

export const { logout } = authSlice.actions;
export default authSlice.reducer;