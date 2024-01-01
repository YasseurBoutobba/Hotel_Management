import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Toast } from "../../toasts";
const API_URL = "https://aceiny.tech:9991/booking";

const initialState = {
  bookings: [],
  bookingChanged: false,
  pendingBooking: false,
};

export const fetchBooking = createAsyncThunk(
  "booking/fetchBooking",
  async () => {
    try {
      const token = localStorage.getItem("authorization");
      const response = await axios.get(`${API_URL}/`, {
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

export const createBooking = createAsyncThunk(
  "booking/createBooking",
  async (booking) => {
    try {
      const token = localStorage.getItem("authorization");
      const response = await axios.post(`${API_URL}`, booking, {
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
const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooking.pending, (state, action) => {
        state.pendingBooking = true;
      })
      .addCase(fetchBooking.fulfilled, (state, action) => {
        state.pendingBooking = false;
        if (action.payload.status === 200) {
          state.bookings = [...action.payload.data];
        } else {
          Toast.error(action.payload.data.message);
        }
      })
      .addCase(fetchBooking.rejected, (state, action) => {
        state.pendingBooking = false;
        Toast.error("Something went wrong");
      })
      .addCase(createBooking.pending, (state, action) => {
        state.pendingBooking = true;
      })
      .addCase(createBooking.fulfilled, (state, action) => {
        state.pendingBooking = false;
        if (action.payload.status === 200) {
          state.bookings = [...state.bookings, action.payload.data];
          state.bookingChanged = !state.bookingChanged;
          Toast.success("Booking Status Changed Successfully");
        } else {
          Toast.error(action.payload.data.message);
        }
      })
      .addCase(createBooking.rejected, (state, action) => {
        state.pendingBooking = false;
        Toast.error("Something went wrong");
      });
  },
});

export default bookingSlice.reducer;
