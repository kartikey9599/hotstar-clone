import { configureStore, createListenerMiddleware } from "@reduxjs/toolkit";
import userReducer from "../features/users/userSlice";
const listnerMiddleware = createListenerMiddleware({
  serializableCheck: false,
});
export default configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: (getDefultMiddleware) =>
    getDefultMiddleware().concat(listnerMiddleware.middleware),
});
