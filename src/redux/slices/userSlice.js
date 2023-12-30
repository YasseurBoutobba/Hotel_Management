import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {Toast} from "../../toasts"

const API_URL = "https://aceiny.tech:9991/users";

const initialState = {
  users: [],
  pendingUsers: false,
  changedUsers : false,
};

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
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


export const createUser = createAsyncThunk("users/createUser", async (user) => {
  try {
    const token = localStorage.getItem("authorization");
    const response = await axios.post(`${API_URL}`, user, {
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

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state, action) => {
        state.pendingUsers = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.pendingUsers = false;
        if (action.payload.status === 200) {
          state.users = [...action.payload.data];
        } else {
          Toast(action.payload.data.message, "success");
        }
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.pendingUsers = false;
        Toast("Something went wrong", "error");
      })
      .addCase(createUser.pending, (state, action) => {
        state.pendingUsers = true;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.pendingUsers = false;
        if (action.payload.status === 200) {
          state.users = [...action.payload.data];
          state.changedUsers = !state.changedUsers;
          Toast("User created successfully","success");
        } else {
          Toast(action.payload.data.message);
        }
      })
      .addCase(createUser.rejected, (state, action) => {
        state.pendingUsers = false;
        Toast("Something went wrong", "error");
      });
  },
});

export default usersSlice.reducer;
