import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const API_URL = "https://aceiny.tech:9991";
const initialState = {
  users: null,
  pendingUsers: false,
};
export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  try {
    const response = await axios.get(`${API_URL}/users`, {
      headers: {
        token: localStorage.getItem("token"),
      },
    });
    return response;
  } catch (error) {
    return error.response;
  }
});
export const createUser = createAsyncThunk("users/createUser", async (user) => {
  try {
    const response = await axios.post(`${API_URL}/users`, user);
    return response;
  } catch (error) {
    return error.response;
  }
});
export const deleteUser = createAsyncThunk("users/deleteUser", async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/users/${id}`);
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
          state.users = action.payload.data;
        } else {
          toast.error(action.payload.data.message);
        }
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.pendingUsers = false;
        toast.error("Something went wrong");
      })
      .addCase(createUser.pending, (state, action) => {
        state.pendingUsers = true;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.pendingUsers = false;
        if (action.payload.status === 200) {
          state.users = action.payload.data;
          toast.success("User created successfully");
        } else {
          toast.error(action.payload.data.message);
        }
      })
      .addCase(createUser.rejected, (state, action) => {
        state.pendingUsers = false;
        toast.error("Something went wrong");
      })
      .addCase(deleteUser.pending, (state, action) => {
        state.pendingUsers = true;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.pendingUsers = false;
        if (action.payload.status === 200) {
          state.users = action.payload.data;
          toast.success("User deleted successfully");
        } else {
          toast.error(action.payload.data.message);
        }
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.pendingUsers = false;
        toast.error("Something went wrong");
      });
  },
});

export default usersSlice.reducer;