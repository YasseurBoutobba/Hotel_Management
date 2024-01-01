import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Toast } from "../../toasts";
const API_URL = "https://aceiny.tech:9991";
const initialState = {
    loyalCustomers : [],
    pendingLoyalCustomers : null,
    nbrBookings : null,
    pendingNbrBookings: null,
    nbrDone: null,
    pendingNbrDone: null,

}
export const fetchLoyalCustomers = createAsyncThunk("general/fetchLoyalCustomers", async () => {
    try {
        const token = localStorage.getItem("authorization");
        const response = await axios.get(`${API_URL}/general/loyal`, {
        headers: {
            Authorization: token,
            "Content-Type": "application/json",
        },
        });
        return response;
    } catch (error) {
        return error.response;
    }
    }
);

export const fetchNbrBookings = createAsyncThunk("general/fetchNbrBookings", async () => {
    try {
        const token = localStorage.getItem("authorization");
        const response = await axios.get(`${API_URL}/dashboard/nbrBookings`, {
        headers: {
            Authorization: token,
            "Content-Type": "application/json",
        },
        });
        return response;
    } catch (error) {
        return error.response;
    }
    }
);

export const fetchNbrDone = createAsyncThunk("general/fetchNbrDone", async () => {
    try {
        const token = localStorage.getItem("authorization");
        const response = await axios.get(`${API_URL}/dashboard/nbrDone`, {
        headers: {
            Authorization: token,
            "Content-Type": "application/json",
        },
        });
        return response;
    } catch (error) {
        return error.response;
    }
    }
);

const generalSlice = createSlice({
    name: "general",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchLoyalCustomers.pending, (state, action) => {
            state.pendingLoyalCustomers = true;
        })
        .addCase(fetchLoyalCustomers.fulfilled, (state, action) => {
            state.pendingLoyalCustomers = false;
            if (action.payload.status === 200) {
                state.loyalCustomers = [...action.payload.data];
            } else {
                Toast(action.payload.data.message, "error");
            }
        })
        .addCase(fetchNbrBookings.pending, (state, action) => {
            state.pendingNbrBookings = true;
        })
        .addCase(fetchNbrBookings.fulfilled, (state, action) => {
            state.pendingNbrBookings = false;
            if (action.payload.status === 200) {
                state.nbrBookings = action.payload.data;
            } else {
                Toast(action.payload.data.message, "error");
            }
        })
        .addCase(fetchNbrDone.pending, (state, action) => {
            state.pendingNbrDone = true;
        })
        .addCase(fetchNbrDone.fulfilled, (state, action) => {
            state.pendingNbrDone = false;
            if (action.payload.status === 200) {
                state.nbrDone = action.payload.data;
            } else {
                Toast(action.payload.data.message, "error");
            }
        })
    },

  serialize: true,
});

export default generalSlice.reducer;