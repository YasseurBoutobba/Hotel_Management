import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import usersReducer from "./slices/userSlice";
import bookingReducer from "./slices/bookingSlice";
import roomsSlice from "./slices/roomsSlice";
import generalSlice from "./slices/generalSlice";
const store = configureStore({
  reducer: {
    auth: authReducer,
    users: usersReducer,
    booking: bookingReducer,
    rooms: roomsSlice,
    general: generalSlice,

    // here we will be adding reducers
  },
});

export default store;
