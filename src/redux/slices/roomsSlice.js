import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Toast } from "../../toasts";
const API_URL = "https://aceiny.tech:9991/rooms";

const initialState = {
  rooms: [],
  pendingRooms: false,
  changedRooms: false,
};

export const fetchRooms = createAsyncThunk("rooms/fetchRooms", async () => {
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
});
export const createRoom = createAsyncThunk("rooms/createRoom", async (room) => {
  try {
    const token = localStorage.getItem("authorization");
    const response = await axios.post(`${API_URL}/addRoom`, room, {
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (error) {
    return error.response;
  }
});
export const bookRoom = createAsyncThunk("rooms/bookRoom", async (room) => {
  try {
    const token = localStorage.getItem("authorization");
    const response = await axios.post(`${API_URL}/addBooking`, room, {
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (error) {
    return error.response;
  }
});

const roomsSlice = createSlice({
  name: "rooms",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRooms.pending, (state, action) => {
        state.pendingRooms = true;
      })
      .addCase(fetchRooms.fulfilled, (state, action) => {
        state.pendingRooms = false;
        if (action.payload.status === 200) {
          state.rooms = [...action.payload.data];
        } else {
          Toast(action.payload.data.message), "error";
        }
      })
      .addCase(fetchRooms.rejected, (state, action) => {
        state.pendingRooms = false;
        Toast("Something went wrong", "error");
      })
      .addCase(createRoom.pending, (state, action) => {
        state.pendingRooms = true;
      })
      .addCase(createRoom.fulfilled, (state, action) => {
        state.pendingRooms = false;
        if (action.payload.status === 200) {
          state.rooms = [...state.rooms, action.payload.data];
          Toast("Room created successfully", "success");
        } else {
          Toast(action.payload.data.message, "error");
        }
      })
      .addCase(createRoom.rejected, (state, action) => {
        state.pendingRooms = false;
        Toast("Something went wrong", "error");
      })
      .addCase(bookRoom.pending, (state, action) => {
        state.pendingRooms = true;
      })
      .addCase(bookRoom.fulfilled, (state, action) => {
        state.pendingRooms = false;
        if (action.payload.status === 200) {
          state.rooms = [...state.rooms, action.payload.data];
          Toast("Room booked successfully", "success");
        } else {
          Toast(action.payload.data.message, "error");
        }
      })
      .addCase(bookRoom.rejected, (state, action) => {
        state.pendingRooms = false;
        Toast.error("Something went wrong");
      });
  },
});

export default roomsSlice.reducer;
