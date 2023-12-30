import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const API_URL = "https://aceiny.tech:9991/users";
const headers = {
  authorization: localStorage.getItem("authorization"),
};
const initialState = {
  users: [],
  pendingUsers: false,
};

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  try {
    const response = await axios.get(`${API_URL}/`, {headers});
    return response;
  } catch (error) {
    return error.response;
  }
});
export const createUser = createAsyncThunk(
  "users/createUser",
  async (user) => {
    try {
      const response = await axios.post(`${API_URL}`, {headers}, user);
      return response;
    } catch (error) {
      return error.response;
    }
  }
);


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
          state.users = [...action.payload.data];
          toast.success("User created successfully");
        } else {
          toast.error(action.payload.data.message);
        }
      })
      .addCase(createUser.rejected, (state, action) => {
        state.pendingUsers = false;
        toast.error("Something went wrong");
      });
   
  },
});

export default usersSlice.reducer;
